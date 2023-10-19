import React from 'react'
import './card.css'
import i from '../asets/guy-clipart-man-portrait-15.png'

const Card = ({id,title,tag}) => {
 return (
    <div className='card '>
        <div className='user'>
           <h4>{id}</h4>
           { <img src={i} alt="user_icon" className='img'/> }
        </div>
        <h3 className='title'>{title}</h3>
        <div className='user-info'>
           <button className='info_btn'>!</button>
           <h4>#{tag}</h4>
        </div>
    </div>
  )
}

export default Card
