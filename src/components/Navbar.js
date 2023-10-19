
import User from './User'
import Status from './Status'
import Priority from './Priority'
import React, { useState } from 'react';
import  './Navbar.css'
const Navbar = ({ onDataSelected }) => {
  const [data, setData] = useState('User Name');
  const options = ['User Name', 'Status', 'Priority'];

  const onOptionChangeHandler = (event) => {
    const selectedData = event.target.value;
    setData(selectedData);
    console.log('User Selected Value - ', selectedData);
    onDataSelected(selectedData);
  };

  return (
    <div className="nav">
      
      <div className="nav-link">
        <label>Display : </label>
      <select onChange={onOptionChangeHandler} value={data}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      </div>
      <h2>Kanban board</h2>
    </div>
  );
};

export default Navbar;

