
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Priority from './components/Priority';
import Status from './components/Status';
import User from './components/User';
import { useState } from 'react';

function App() {
  const [selectedData, setSelectedData] = useState('');

  const renderSelectedComponent = () => {
    if (selectedData === 'User Name' || selectedData === '') {
      return <User />;
    } else if (selectedData === 'Priority') {
      return <Priority />;
    } else {
      return <Status/>;
    }
  };

  return (
    <div>
      <Navbar onDataSelected={setSelectedData} />
      {renderSelectedComponent()}
    </div>
  );
}


export default App;
