import React from 'react';
import Item from './Item';
import './css/List.css';
import Footer from './footer';

function List(props){
    return(
        <div className="principal-list">
            
        <div className="list-item">
            {props.items.map(item =>
           
                <Item 
                    title={item.title} 
                    image={item.image} 
                    text={item.text} 
                    price={item.price} 
                    link={item.link}
                    name={item.name}
                    
                    />
                     
               
            
        )}
        </div>
        
        </div>
    );
}


export default List;