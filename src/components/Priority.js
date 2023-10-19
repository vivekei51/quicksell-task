import React from 'react'
import { useState ,useEffect } from 'react';
import Card from './Card';
import './card.css'
import './all.css'
const Priority = () => {
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
        const groupedTickets = {
          4: [],
          3: [],
          2: [],
          1: [],
          0: [],
        };
        
        tickets.forEach((ticket) => {
          const user = users.find((user) => user.id === ticket.userId);
          ticket.userName = user ? user.name : 'Unknown User';
    
          groupedTickets[ticket.priority].push(ticket);
        });
    
        for (let priority in groupedTickets) {
          groupedTickets[priority].sort((a, b) => a.title.localeCompare(b.title));
        }
    
        return groupedTickets;
      };
    
      const groupedAndSortedTickets = groupAndSortTickets();
      
  return (
    <div className="board1">
    {Object.keys(groupedAndSortedTickets).map((priority) => (
      <div key={priority} className='user-icon'>
        <h2>
          {priority === '0'
            ? 'No priority'
            : `${priority === '4' ? 'Urgent' : priority === '3' ? 'High' : priority === '2' ? 'Medium' : 'Low'} `}
        </h2>
        {groupedAndSortedTickets[priority].map((ticket) => (
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

export default Priority
