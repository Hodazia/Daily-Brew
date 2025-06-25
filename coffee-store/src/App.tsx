import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg- font-white'>
        Hey this i Zia</p>
        {/*<Navbar />*/}
        <About />
        <FAQs />
        <Footer />
    </>
  )
}

export default App
