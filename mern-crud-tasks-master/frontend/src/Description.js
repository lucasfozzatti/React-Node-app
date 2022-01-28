import React from 'react';
import './css/Description.css';


class Description extends React.Component{

   
   


    render(){
        return(
            <div className="container-description">
                <div className="subcontainer-description">
                <h1>
                    Tienda online de artículos vintage
                </h1>
                <p className="text-description">
                    Cansado de andar pintando todo el fin de semana? he aqui la solucion:
                    PAINT ZOOM
                    La utilización de esta palabra por las distintas bodegas para referirse a los vinos producto de sus mejores cosechas ha hecho que su significado haya derivado a todo producto antiguo de calidad. También se utiliza para denominar aquello que por su historia, significado, influencia o singularidad se ha convertido en objeto de culto e icono para coleccionistas, y especialmente para referirse a la moda y el diseño posteriores al año 1900.


                </p>
                    <div className="amazon-container">
                       
                        <a   href= "https://amzn.to/3vNIe6R ">
                        <img className= "img-description" src="/img/tocadisco.jpg"></img>
                    
                        </a> 

                     </div>   

                </div>
            </div>
            
        );
    }
}

export default Description;