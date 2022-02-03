import React from 'react'
import './css/Movement.css'

const Movement = (props) => {
    return (
        <div className='movement'>
            <h1 className='type'>{props.type}</h1>
            <div className="mov ingreso-container"><img className="image-ingreso" src={'../img/ingreso-egreso/ingreso.png'} alt='green' width="100%" /></div>
            <div className="mov egreso-container"><img className="image-egreso" src={'../img/ingreso-egreso/egreso.png'} alt='red' width="100%" /></div>
        </div>
    )
}

export default Movement;
