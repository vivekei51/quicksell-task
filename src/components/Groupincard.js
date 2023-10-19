import React from 'react'
import Card from './Card'
import './Groupin.css'
const Groupincard = ({status,tickets}) => {
  return (
    <div className={`card-group ${status.toLowerCase().replace(' ','-')}`}>
           <h2>{status}</h2>
      <div className='card-container'>
        { 
            tickets.map((ticket)=>
            (<Card
               className={ticket.status}
                key={ticket.id}
                id={ticket.id}
                title={ticket.title}
                userId={ticket.userId}
                tag={ticket.tag}/>))
        }
      </div>
    </div>
  )
}

export default Groupincard
