import { useState } from "react"
import logo from '../assets/logo.png'
import { useNavigate, useLocation } from "react-router-dom"
import { Menu, X, Coffee} from 'lucide-react'

const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const NavItems = [
        { name: 'Home', action: () => { /*Home page */}},
        { name: 'About Us', action: () => { /*Home page */}},
        { name: 'Items', action: () => { /*Home page */}},
        { name: 'Customizer', action: () => { /*Home page */}},
        { name: 'Coffee Quiz', action: () => { /*Home page */}},
        { name: 'Daily Specials', action: () => { /*Home page */}},
        { name: 'Testimonials', action: () => { /*Home page */}},
        { name: 'FAQs', action: () => { /*Home page */}},
        { name: 'Contact Us', action: () => { /*Home page */}}
    ]
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-between items-center">
                {/*onClick={() => navigate('/')}*/}
                {/* Logo  */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <Coffee className="h-8 w-8 " />
                    <span className="text-xl font-bold  font-serif">Café Vista</span>
                </div>

                          {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                        {NavItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={item.action}
                            className="text-coffee-700 hover:text-coffee-900 font-medium transition-colors duration-200 relative group text-sm"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coffee-600 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        ))}
                </div>

                
            </div>

        </div>
    </nav>
    </>
  )
}

export default Navbar
