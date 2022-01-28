import React from 'react';
import Menu from './Menu';
// import List from './List';
// import Nav2 from './Nav2';
// import Description from './Description';
// import Nav from './Nav';
import axios from 'axios'
import Footer from './footer';



class Principal extends React.Component{

  constructor(props){
    super(props);
    
    this.state = {
      title: '',
      url: '',
      description: '',
      user_id: '',
      task: [],
      width: 0,
    };
    // this.updateRating = this.updateRating.bind(this);
  }

  
  // async componentDidMount(){
    
  //   window.addEventListener('resize', this.updateWindowDimensions);

  //   const res = await axios.get('http://localhost:4000/links');
    
  //   this.setState({task: res.data});
  //   console.log("holas", this.state.task)
  //   } 
  
  render(){
    
    return (

      <div className="principal">
        
        <Menu title="Minimalist"/>
        {/* {(this.state.width > 600)? <Nav2/> : <Nav/> }
        <Description />
        <List className="list" items={this.state.copyBooks}/> */}
        <Footer title="Minimalist"/>

        </div>
    )
  }
}

export default Principal;
