import React from 'react';
import './css/App.css';
import Menu from './Menu';
import Principal from './Principal';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Footer from './footer';
import Log from './User_log'
import Budget from './transactions';




class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        title: '',
    }

}
  
  render(){
    return (

      <div>
        
        <Router >
           <Switch>

            <Route path="/" exact component={Principal}/> 
            {/* <Route path="/:subpage" exact render={({ match }) => {return <Secondary  params={match.params.subpage}/>}}/> */}
            <Route path="/nav" exact component={Menu} />
            <Route path="/register" exact component={Log}/>
            <Route path="/transactions/:40" exact component={Budget}/>

            </Switch>
            <Footer/>
        </Router>
        </div>
        
    )
  }
}

export default App;
