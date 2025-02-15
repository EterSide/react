import { useState } from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import { Routes, Route} from "react-router-dom"


import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </>
  )
}

export default App
