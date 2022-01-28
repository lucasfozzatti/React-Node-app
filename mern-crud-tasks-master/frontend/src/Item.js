import React from 'react';
import './css/Item.css';

class Item extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            title: '',
            image: '',
            text: '',
            price:'',   
            link:'', 
            name:'',
           
        }
  
    }
    componentDidMount(){
        this.setState({
           
            title: this.props.title,
            image: this.props.image,
            text: this.props.text,
            price: this.props.price,
            link: this.props.link,
            name: this.props.name,
            
        });
    }

    render(){
        return(
            
            <div className="item" >
               
                    <a href= {this.props.link} >
                    <div className="image"><img src={'img/' + this.state.image} width="100%" /></div>
                    </a>
                    <div className="title">{this.state.title}</div>
                    <div className="text">{this.state.text}</div>
                    <div className="price">{this.state.price}</div>
                    
            </div>
        );
    }
}

export default Item;