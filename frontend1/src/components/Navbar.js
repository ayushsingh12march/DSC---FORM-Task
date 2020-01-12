import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component{
    render(){
        return(
        <nav className="navbar navbar-expand-sm navbar-light bg-light ">
            <Link to='/add' className="navbar-brand">Formify</Link>
            <div className=" navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to="/add" className="navbar-item nav-link">Enter details</Link>
                    <Link to="/view" className="navbar-item nav-link">Visualize</Link>
                </div> 
            </div>      
        </nav>
        );
    }
}