import React from 'react'
import { useEffect,useState } from 'react';
import Groupincard from './Groupincard';
import './card.css'
import './all.css'
const Status = () => {
    const [Data, setAlldata] = useState(null);
    const fetchdata = async () => {
        const response = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
        const data = await response.json();
        setAlldata(data);
      };
      useEffect(() => {
        fetchdata();
      }, []);
      if(!Data)
      return <div>Loading...</div>
      const groupticket = Data.tickets.reduce((groups,ticket)=>
      {
        const{status}=ticket;
        if(!groups[status])groups[status]=[];
        groups[status].push(ticket);
        return groups;
      },{});
      const sortstatusorder =['Backlog','In progress','Todo'];
  return (
    <div className='board1'>
     {sortstatusorder.map((status)=>
     (<Groupincard key ={status} status={status} tickets={groupticket[status]||[]}/>))}
    </div>
  )
}

export default Status;
