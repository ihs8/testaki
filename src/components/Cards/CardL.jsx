import React from 'react'
import './CardL.scss'
function CardL(props) {
  return (
    <div className='cardL'>
        <div className= {`ico ${props.title}`}>
        <img src={props.icon} alt="icon"  /></div>
        <div className='cardTitle'>
             4 {props.title} files 
            <p> Go To View </p>
        
        
         </div>
    </div>
  )
}

export default CardL