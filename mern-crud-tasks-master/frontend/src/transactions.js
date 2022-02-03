import React from 'react';
import Item from './Item';
import './css/List.css';
import {useState, useEffect} from "react";
import Axios  from "axios";
import Footer from './footer';
import { useHistory } from "react-router-dom";
import Movement from './Movement';
import './css/List_Movement.css';
import Menu from './Menu';


const userAuthenticated = () =>{
  
  Axios.get('isUserAuth',{
    headers: {
      "Authorization" : localStorage.getItem('token')
    }

  }).then((response)=>{
     
   console.log("hola",response.data);
 })
}


  

function Budget(props){
  const [movements, setmovements] = useState([
    {
      id: 1,
      type: "movement 1",
      role: "Frontend Developer",
    },
    {
      id: 2,
      type: "movement 2",
      role: "Frontend Developer",
    },
    {
      id: 3,
      type: "movement 3",
      role: "Frontend Developer",
    },
    {
      id: 4,
      type: "movement 4",
      role: "Backend Developer",
    }])
    const [id, setid] = useState(0)
  let history = useHistory();
 
  // useEffect(() => {
  //   userAuthenticated()
  
  // },[]);
    
  const Logout = () =>{
    localStorage.removeItem('token')
    history.push("/register")

  }
    
    
    return(
      <div>
          <div>
            <Menu/>
          </div>
          <div className="box-movement">
              
          
            
              {/* <h1>Welcome {props.items}</h1> */}

              {/* <div> 
              <button style={{background : 'red'}} onClick={userAuthenticated}>Check if Authenticated</button> 
              <button style={{background : 'blue'}} onClick={Logout}>Check if Authenticated</button>
              </div>    */}
            
                <div className="list-movement">
                  {movements.map((movement)=>{
                    return (
                      <Movement key={movement.id} type={movement.type}/>
                    )
                  })}
                </div>
                
            
          </div>
      </div>              
    );
}


export default Budget;