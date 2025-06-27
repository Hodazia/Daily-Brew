import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/NotFound'
import CoffeeQuiz from './pages/CoffeeQuiz'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Index />}/>
        <Route path='/coffee-quiz' element={<CoffeeQuiz />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
