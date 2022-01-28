import React from 'react';
import './css/Nav.css';



class Nav extends React.Component{
    constructor(props){
        super(props);
        

    }


    render(){
        return(
            <div className="main-nav">
				<input type="checkbox" id="btn-nav" class="checkbox"/>
				<header className="header">
					<div class="header-container">
						<label for="btn-nav" class="btn-label">
						<div class="header-button"></div>
						</label>
					</div>
				</header>
				
				<nav class="menu">
				<ul className="ul-principal">
					<li className="li-principal">Home</li>
					<li className="li-principal">About</li>
					<li className="li-principal">Contacto</li>
				</ul>      
				<ul>
					<a className = "ul-a"href="" class="icon-facebook"/>
					<a className = "ul-a"href="" class="icon-twitter"/>
					<a className = "ul-a"href="" class="icon-youtube"/>
					<a className = "ul-a"href="" class="icon-instagram"/>
				</ul>      
				</nav>
			</div>
        );
    }
}   



export default Nav;