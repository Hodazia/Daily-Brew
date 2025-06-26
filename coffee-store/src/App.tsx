import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import FAQs from './components/FAQs';
import Footer from './components/Footer';
import Contact from './components/Contact'
import Testimonials from './components/Testimonials';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p className='bg- font-white'>
        Hey this i Zia</p>
        {/*<Navbar />*/}
        <About />
        <Testimonials />
        <FAQs />
        <Contact />
        <Footer />
    </>
  )
}

export default App
