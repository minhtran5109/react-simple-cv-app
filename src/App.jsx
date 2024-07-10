import { useState } from 'react'
import './App.css'
import CVforms from './components/CVforms.jsx'

function App() {
  const [genInfo, setGenInfo] = useState({
    name: 'Example John',
    email: 'ejohn@email.com',
    phoneNumber: '0000 000 000',
  });

  function handleInputChange(e) {
    const {name, value} = e.target;
    setGenInfo({...genInfo, [name]: value});
  };

  return (
    <div className='container'>
      <CVforms genInfo={genInfo} setGenInfo={handleInputChange}/>
      <div className='preview'>
        preview
        <br />
        N: {genInfo.name}<br />
        E: {genInfo.email}<br />
        Tel: {genInfo.phoneNumber}<br />
      </div>
    </div>
  )
}

export default App

// ToDo
// Test state change to display preview on the right screen