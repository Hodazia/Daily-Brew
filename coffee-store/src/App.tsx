import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg- font-white'>
        Hey this i Zia</p>
        {/*<Navbar />*/}
        <About />
    </>
  )
}

export default App
