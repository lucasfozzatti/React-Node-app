import React from 'react';
import './css/Menu.css';



const element = {
    name: "lucas",
    apellido: "fozzatti",
}
class Menu extends React.Component{

    

    render(){
        return(
            <div className="container">
                <div className="subcontainer">
                    <div className= "back-tittle">
                        <h1 className = "tittle">

                        WALLET

                        </h1>
                        
                    </div>
                    </div>
                        
                    <div className='Add'>
                        <h2>Add new</h2>
                        <button className=''>+</button>
                    {/* <div className="div-logo">
                        <img ClassName= "logo"src="/img/logo.png">
                        </img>
                       
                    </div> */}

                  
                    </div>
            </div>
        );
    }
}

export default Menu;