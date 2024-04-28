import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default class extends Component {
    constructor() {
        super()
        this.state = {
            language: "hi",
            search: ""
        }
    }
    changelanguage = (data) => {
        this.setState({ language: data })
    }
    changesearch = (data) => {
        this.setState({ search: data })
    }
    render() {
        return (
            <BrowserRouter>
                <Navbar changelanguage={this.changelanguage} changesearch={this.changesearch} />
                <Routes>
                    <Route path='' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "ALL"} />} />
                    <Route path='/ALL' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "ALL"} />} />
                    <Route path='/Politics' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Politics"} />} />
                    <Route path='/Science' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Science"} />} />
                    <Route path='/Technology' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Technology"} />} />
                    <Route path='/Education' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Education"} />} />
                    <Route path='/Crime' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Crime"} />} />
                    <Route path='/Entertenment' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Entertenment"} />} />
                    <Route path='/Sports' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Sports"} />} />
                    <Route path='/Cricket' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Cricket"} />} />
                    <Route path='/Covid-19' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Covid-19"} />} />
                    <Route path='/World' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "World"} />} />
                    <Route path='/Jokes' element={<Home language={this.state.language} q={this.state.search ? this.state.search : "Jokes"} />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        )
    }
}
