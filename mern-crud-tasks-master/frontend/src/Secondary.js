import React from 'react';
import './css/App.css';
import Menu from './Menu';
import List from './List';
import Nav from './Nav';
import Footer from './footer';
import Nav2 from './Nav2'; 




class Secondary extends React.Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      params: '',
      Iluminacion:[
        {id:0, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'Linterna solar vintage exteriores', image: 'Iluminacion/iluminacion-1.jpg', link: "https://amzn.to/3ms8qSS"},
        {id:1, rating: 3, price:'$260,2',text:'black or white minimalist vase' , title: 'Lámpara de pared vintage', image: 'Iluminacion/iluminacion-2.jpg', link: "https://amzn.to/3y9j82v"},
        {id:2, rating: 5, price:'$15,00',text:'black or white minimalist vase' , title: 'Focos de techo vintage giratorios', image: 'Iluminacion/iluminacion-3.jpg', link: "https://amzn.to/3ze3g03"},
        {id:3, rating: 5, price:'$2745,00',text:'black or white minimalist vase' , title: 'Bombilla de filamento', image: 'Iluminacion/iluminacion-4.jpg', link: "https://amzn.to/38aPBet"},
        {id:4, rating: 5, price:'$467,10',text:'black or white minimalist vase' , title: 'Lampara de techo vintage', image: 'Iluminacion/iluminacion-5.jpg', link: "https://amzn.to/2XROCOo"},
        {id:6, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombilla de filamentro vintage', image: 'Iluminacion/iluminacion-6.jpg', link: "https://amzn.to/3DbMG3q"},
        {id:7, rating: 5, price:'$1600,00', text:'black or white minimalist vase' , title: 'Portalámparas vintage', image: 'Iluminacion/iluminacion-7.jpg', link: "https://amzn.to/3ybin9l"},
        {id:8, rating: 5, price:'$325,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-8.jpg', link: "https://amzn.to/386hyUD"},
        {id:9, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-9.jpg', link: "https://amzn.to/3B7qOo4"},
        {id:10, rating: 3, price:'$260,2',text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-10.jpg', link: "https://amzn.to/3msCihW"},
        {id:11, rating: 5, price:'$15,00',text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-11.jpg', link: "https://amzn.to/2Wk4A3d"},
        {id:12, rating: 5, price:'$2745,00',text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-12.jpg', link: "https://amzn.to/3zfJlhe"},
        {id:13, rating: 5, price:'$467,10',text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-12.jpg', link: "https://amzn.to/3jbMjOl"},
        {id:14, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:15, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:16, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:17, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:18, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:19, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:20, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:21, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:22, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:23, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:24, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:25, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:26, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
        {id:27, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'Bombillos vintage', image: 'Iluminacion/iluminacion-13.jpg', link: "https://amzn.to/3zcTLhM"},
      
      ],

  
      Cocina:[
        {id:0, rating: 4, price:'', text:'Hervidor Vintage, 2200 W, 1.7 litros, Acero Inoxidable, Azul' ,title: '', image: 'Cocina/cocina-1.webp', link: "https://amzn.to/37U7z4I"},
        {id:1, rating: 3, price:'',text:'Tostador 2 ranuras anchas, vintage, 6 posiciones, función descongelar, recalentar, cancelar, paredes frías, pies antideslizante, recogecable, 810 W, Color Beige' , title: '', image: 'Cocina/cocina-2.webp', link: "https://amzn.to/3mhkbLK"},
        {id:2, rating: 5, price:'',text:'Cecotec Tostadora Digital ClassicToast . 1500 W, 2 Ranuras largas extraanchas para 4 tostadas, Pantalla Digital, 3 Funciones, Varillas Superiores, Diseño Retro en Amarillo' , title: '', image: 'Cocina/cocina-3.webp', link: "https://amzn.to/2UvJBJW"},
        {id:3, rating: 5, price:'',text:'black or white minimalist vase' , title: 'product4', image: 'Cocina/cocina-4.webp', link: "https://amzn.to/3AY6JAk"},
        {id:4, rating: 5, price:'',text:'black or white minimalist vase' , title: 'product5', image: 'Cocina/cocina-5.webp', link: "https://amzn.to/3miyi3q"},
        {id:6, rating: 5, price:'', text:'black or white minimalist vase' , title: 'product6', image: 'Cocina/cocina-6.webp', link: "https://amzn.to/380gb9S"},
        {id:7, rating: 5, price:'', text:'black or white minimalist vase' , title: 'product7', image: 'Cocina/cocina-7.webp', link: "https://amzn.to/3z4VNjN"},
        {id:8, rating: 5, price:'', text:'black or white minimalist vase' , title: 'product8', image: 'Cocina/cocina-8.webp', link: "https://amzn.to/3B0RC9x"},
        {id:9, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'product8', image: 'Cocina/cocina-9.webp', link: "https://amzn.to/3z5fFTY"},
        {id:10, rating: 3, price:'',text:'black or white minimalist vase' , title: 'product2', image: 'Cocina/cocina-10.webp', link: "https://amzn.to/3D0YqWq"},
        {id:11, rating: 5, price:'',text:'black or white minimalist vase' , title: 'product3', image: 'Cocina/cocina-11.webp', link: "https://amzn.to/380weVc"},
        {id:12, rating: 5, price:'',text:'black or white minimalist vase' , title: 'product4', image: 'Cocina/cocina-12.webp', link: "https://amzn.to/3CYelF3"},
        {id:13, rating: 5, price:'',text:'black or white minimalist vase' , title: 'product5', image: 'Cocina/cocina-13.webp', link: "https://amzn.to/3y5cPgx"},
        {id:14, rating: 5, price:'', text:'black or white minimalist vase' , title: 'product6', image: 'Cocina/cocina-14.webp', link: "https://amzn.to/3gilBS9"},
        {id:15, rating: 5, price:'', text:'black or white minimalist vase' , title: 'product7', image: 'Cocina/cocina-15.webp', link: "https://amzn.to/3B1u845"},
        {id:16, rating: 5, price:'', text:'black or white minimalist vase' , title: 'product8', image: 'Cocina/cocina-16.webp', link: "https://amzn.to/3gk10gp"},
        {id:17, rating: 5, price:'',text:'black or white minimalist vase' , title: 'product4', image: 'Cocina/cocina-17.webp', link: "https://amzn.to/3AWC32x"},
       
      ],

      Muebles:[
    
        {id:0, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'product8', image: 'Muebles/muebles-1', link: "https://amzn.to/3DhEUou"},
        {id:1, rating: 3, price:'$260,2',text:'black or white minimalist vase' , title: 'product2', image: 'Muebles/muebles-2', link: "https://amzn.to/3gwjmuJ"},
        {id:2, rating: 5, price:'$15,00',text:'black or white minimalist vase' , title: 'product3', image: 'Muebles/muebles-2', link: "https://amzn.to/3vNIe6R"},
        {id:3, rating: 5, price:'$2745,00',text:'black or white minimalist vase' , title: 'product4', image: 'Muebles/muebles-2', link: "https://amzn.to/3vNIe6R"},
        {id:4, rating: 5, price:'$467,10',text:'black or white minimalist vase' , title: 'product5', image: 'Muebles/muebles-2', link: "https://amzn.to/3vNIe6R"},
        {id:6, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'product6', image: 'Muebles/muebles-2', link: "https://amzn.to/3vNIe6R"},
        {id:7, rating: 5, price:'$1600,00', text:'black or white minimalist vase' , title: 'product7', image: 'Muebles/muebles-2', link: "https://amzn.to/3vNIe6R"},
        {id:8, rating: 5, price:'$325,00', text:'black or white minimalist vase' , title: 'product8', image: 'Muebles/muebles-2', link: "https://amzn.to/3vNIe6R"}
      ],

      Masculina:[
        {id:0, rating: 4, price:'', text:'black or white minimalist vase' ,title: 'product8', image: 'cyberpunk.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:1, rating: 3, price:'$260,2',text:'black or white minimalist vase' , title: 'product2', image: 'tocadisco.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:2, rating: 5, price:'$15,00',text:'black or white minimalist vase' , title: 'product3', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:3, rating: 5, price:'$2745,00',text:'black or white minimalist vase' , title: 'product4', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:4, rating: 5, price:'$467,10',text:'black or white minimalist vase' , title: 'product5', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:6, rating: 5, price:'$11,00', text:'black or white minimalist vase' , title: 'product6', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:7, rating: 5, price:'$1600,00', text:'black or white minimalist vase' , title: 'product7', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"},
        {id:8, rating: 5, price:'$325,00', text:'black or white minimalist vase' , title: 'product8', image: 'minimalist.jpg', link: "https://amzn.to/3vNIe6R"}
      ],

      copyBooks: [],
      
     
    };
    // this.initBooks = this.initBooks.bind(this);
    // this.updateRating = this.updateRating.bind(this);
  }
  

  actualizarCampo = () => {
  
    const match = this.props.params;
    this.setState({copyBooks: this.state[match]});
    
  }
  
  componentDidMount(){
     
      this.actualizarCampo()
    
  }
 
  render(){
    
    return (

      <div className= "secondary">
        
        <Menu/>
        
        <List className="list" items={this.state.copyBooks} />
        <Footer title="Minimalist" /> 

        </div>
    )
  }
}

export default Secondary;
