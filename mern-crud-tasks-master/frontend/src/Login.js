import React from "react"
import { useState} from "react";
import Axios  from "axios";
import Budget from "./transactions"
import './css/User_log.css'
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";
import axios from "axios";

const notexist =()=>{
  swal({
    title: 'Incorrect username or password',
    icon: 'warning',
    button: 'OK',
  })}
const empty =()=>{
  swal({
    title: 'Enter username and password',
    icon: 'warning',
    button: 'OK',
  })}

export default function Login() {
    let history = useHistory();
    console.log("Login")
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // const [id, setid] = useState(0);
    const [loginStatus, setLoginStatus] = useState(false);
    
    const login = async(e) => {
        e.preventDefault()
        
        if(!username || !password ){
          empty()
        }else{
        console.log("Login")
        await Axios.post('login',{
            username: username,
            password: password,

        }).then((response) => {
          if (!response.data.auth) {
            setLoginStatus(false);
            notexist()
          } else {
            localStorage.setItem("token", response.data.token)
            setLoginStatus(true);
            Axios.get("transactions/40").then(()=>{
             
            })
            history.push("/transactions/"+ 40)
             
          }
        });
    }};
    
   
    return (
      <React.Fragment>
          
          <label htmlFor="email">Username</label>
          <input type="text" className="log-input" placeholder="  Ej: Lucas23423"
          onChange={(e)=>{
            setUsername(e.target.value);
            console.log(e.target.value)
        }}
          />
          <label htmlFor="password">password</label>
          <input type="password" className="log-input" placeholder= "  123456" 
          onChange={(e)=>{
            setPassword(e.target.value);
        }}
          />
          
          <button className="button-log"  onClick={login}>Login</button>
          
        
      </React.Fragment>
  );
    
    
       
}