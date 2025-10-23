
import { useState, useEffect } from 'react';
import { Menu, X, Coffee } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { scrollY } = useScroll();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };


  const navItems = [
    { name: 'Home', action: () => scrollToSection('hero') },
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Items', action: () => scrollToSection('items') },
    //{ name: 'Customizer', action: () => navigateToPage('/customizer') },
    //{ name: 'Coffee Quiz', action: () => navigateToPage('/quiz') },
    //{ name: 'Daily Specials', action: () => navigateToPage('/specials') },
    { name: 'Testimonials', action: () => scrollToSection('testimonials') },
    { name: 'FAQs', action: () => scrollToSection('faqs') },
    { name: 'Contact Us', action: () => scrollToSection('contact') }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 rounded-full backdrop-blur-sm
         border-b border-coffee-200 transition-all duration-300 ${
        scrolled ? 'shadow-lg py-2' : 'shadow-sm py-0'
      }`}
      style={{ 
        backgroundColor: useTransform(
          scrollY,
          [0, 100, 200],
          ["rgba(252, 248, 242, 0.95)", "rgba(252, 248, 242, 0.85)", "rgba(252, 248, 242, 0.75)"]
        )
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer" 
            onClick={() => navigate('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: scrolled ? 360 : 0 }}
              transition={{ duration: 0.6 }}
            >
              <Coffee className="h-8 w-8 text-amber-800" />
            </motion.div>
            <span className="text-xl font-bold text-amber-950 font-serif">Daily Brew</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={item.action}
                className="text-amber-800 hover:text-amber-900
                 font-medium transition-colors duration-200 
                 relative group text-sm"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.name}
                <motion.span 
                  className="absolute bottom-0 left-0 h-0.5 bg-amber-600"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-amber-800 hover:text-amber-900
               transition-colors duration-200"
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMenuOpen ? <X className="h-6 w-6" />
                 : <Menu className="h-6 w-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="lg:hidden bg-cream border-t border-amber-800
           overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-96 overflow-y-auto">
            {navItems.map((item, index) => (
              <motion.button
                key={index}
                onClick={item.action}
                className="block w-full text-center px-3 py-2 text-amber-800
                 hover:text-amber-900 hover:bg-orange-100
                  transition-colors duration-200"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
