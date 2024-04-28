import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
    constructor(){
        super()
        this.state={
            search:""
        }
    }
    postSearch(e){
        e.preventDefault()
     this.props.changesearch(this.state.search)
     this.state.search=""
    }
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg bg-secondary sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light"  onClick={()=>this.props.changesearch("")}to="/">NewsApp</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link text-light active" aria-current="page" onClick={()=>this.props.changesearch("")}to="/ALL">ALL</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>this.props.changesearch("")}to="/Politics">Politics</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>this.props.changesearch("")}to="/Science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link text-light" onClick={()=>this.props.changesearch("")}to="/Technology">Technology</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        others
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Crime">Crime</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Sports">Sports</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Cricket">Cricket</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/World">World</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Covid-19">Covid-19</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Entertenment">Entertenment</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Education">Education</Link></li>
                                        <li><Link className="dropdown-item" onClick={()=>this.props.changesearch("")}to="/Jokes">Jokes</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link text-light dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Languages
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><button className="dropdown-item" onClick={() => this.props.changelanguage('hi')}>Hindi</button></li>
                                        <li><button className="dropdown-item" onClick={() => this.props.changelanguage('en')}>English</button></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="d-flex" role="search" onSubmit={(e)=>this.postSearch(e)}>
                                <input className="form-control me-2" type="search"  value={this.state.search}name='search' onChange={(e)=>this.setState({search:e.target.value})} placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-light" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}
