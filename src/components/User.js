import React from 'react'
import { useState,useEffect } from 'react';
import './card.css'
import Card from './Card';
import './all.css'
const User = () => {
    const[tickets,settickets] =useState([]);
    const[users,setUsers]=useState([]);
    const fetchdata = async () => {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = await response.json();
        settickets(data.tickets);
        setUsers(data.users);
      };
      useEffect(() => {
        fetchdata();
      }, []);
      const groupAndSortTickets = () => {
        const groupedTickets = {};
    
        tickets.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.userName = user ? user.name : 'Unknown User';
    
          if (!groupedTickets[ticket.userId]) {
            groupedTickets[ticket.userId] = {
              user: user,
              tickets: [ticket],
            };
          } else {
            groupedTickets[ticket.userId].tickets.push(ticket);
          }
        });
    
        return groupedTickets;
      };
    
      const groupedAndSortedTickets = groupAndSortTickets();
  return (
    <div className="board1">
    {Object.values(groupedAndSortedTickets).map((group) => (
      <div key={group.user.id} className='user-icon'>
        <h2>{group.user.name}</h2>
        {group.tickets.map((ticket) => (
          <Card
            key={ticket.id}
            id={ticket.id}
            title={ticket.title}
            userId={ticket.userId}
            tag={ticket.tag}
            imgUrl={ticket.userId}
          />
        ))}
      </div>
    ))}
  </div>
  )
}

export default User
