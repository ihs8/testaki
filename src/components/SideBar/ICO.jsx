import React from 'react'
import './ICO.css';
import {Link} from 'react-router-dom';
function ICO(props) {
  return (
    
<div className="icon">
    
        <img src={props.icon} alt="icon" />
        <p>{props.text}</p>
    
      </div>  )
}

export default ICO
