import React from 'react'
import Progress from './progress/progress'
import './card.scss'
function card(props) {
  return (
    <div className='MainCard'>
        <div className={`cardIcon ${props.title}`} ><img src={props.icon} /></div>
        <div className='cardTitle'> {props.title} </div>
        <div className='cardDescription'><Progress done={props.pers}/>
        <h1>{props.pers}%</h1> <p> {props.pers} used from 80gb</p> 
        </div>
</div>
  )
}

export default card