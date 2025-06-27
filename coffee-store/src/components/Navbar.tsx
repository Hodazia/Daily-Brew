import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { Menu, X, Coffee} from 'lucide-react'

const Navbar = () => {

    const [isMenuopen,setismenuopen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const ScrolltoSection = (sectionId:string) => {
        if(location.pathname !== '/')
        {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if(element)
                {
                    element.scrollIntoView({ behavior: 'smooth'});
                }
            },100)
        }
        else {
                const element = document.getElementById(sectionId);
                if (element)
                {
                    element.scrollIntoView({ behavior: 'smooth'})
                }
            }
        setismenuopen(false);
    }
    const NavItems = [
        { name: 'Home', action: () => ScrolltoSection('home')},
        { name: 'About Us', action: () => ScrolltoSection('about')},
        { name: 'Items', action: () => ScrolltoSection('items')},
        { name: 'Coffee Quiz', action: () => NavigatetoPath('coffee-quiz')},
        { name: 'Daily Specials', action: () => ScrolltoSection('da')},
        { name: 'Testimonials', action: () => ScrolltoSection('testimonials')},
        { name: 'FAQs', action: () => ScrolltoSection('faqs')},
        { name: 'Contact Us', action: () => ScrolltoSection('contact')}
    ]

    const NavigatetoPath = (path:string) => {
        navigate(path);
        setismenuopen(false);
    }
  return (
    <>
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-coffee-200 shadow-sm ">
        <div className="max-w-7xl mx-auto px-4 ">
            <div className="flex justify-between items-center h-16">
                {/*onClick={() => navigate('/')}*/}
                {/* Logo  */}
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <Coffee className="h-8 w-8 text-yellow-600" />
                    <span className="text-xl font-bold text-yellow-800 font-serif">Café Vista</span>
                </div>

                          {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-6">
                        {NavItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={item.action}
                            className="text-yellow-700 hover:text-yellow-900 font-medium transition-colors duration-200 relative group text-sm"
                        >
                            {item.name}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-600 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                        ))}
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button
                    onClick={() => setismenuopen(!isMenuopen)}
                    className="text-yellow-700 hover:text-yellow-900 transition-colors duration-200"
                    >
                    {isMenuopen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                </div>

        {/* Mobile Navigation */}
            {isMenuopen && (
            <div className="lg:hidden bg-cream border-t border-yellow-200 animate-slide-in">
                <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
                {NavItems.map((item, index) => (
                    <button
                    key={index}
                    onClick={item.action}
                    className="block w-full text-left px-3 py-2 text-yellow-700 hover:text-yellow-900 hover:bg-yellow-100 rounded-md transition-colors duration-200"
                    >
                    {item.name}
                    </button>
                ))}
                </div>
            </div>
            )}
          
        </div>
    </nav>
    </>
  )
}

export default Navbar
