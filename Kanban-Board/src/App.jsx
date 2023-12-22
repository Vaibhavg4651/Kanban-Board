import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import CardLayout from './components/CardLayout'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <div style={{backgroundColor : "#f5f4f8", height: "100vh"}}>
        {/* <Card/> */}
        <CardLayout/>
      </div>
    </div>
    </>
  )
}

export default App
