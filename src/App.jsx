import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/GeneralInfo'

function App() {

  return (
    <div className='container'>
      <div className='cv'>
        cv
        <br />
        <GeneralInfo />
      </div>
      <div className='preview'>
        preview
      </div>
    </div>
  )
}

export default App

// ToDo
// Test state change to display preview on the right screen