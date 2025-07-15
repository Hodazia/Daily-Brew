
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToItems = () => {
    const element = document.getElementById('items');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen 
    flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')`
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
      />
      
      {/* Floating coffee beans */}

      <motion.div
        className="absolute top-20 left-10 w-4 h-4 bg-amber-400 
        rounded-full opacity-30"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-40 right-20 w-3 h-3 bg-amber-400 
        rounded-full opacity-40"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-5 h-5 bg-amber-400 
        rounded-full opacity-20"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center text-white px-4 sm:px-6 
        lg:px-8 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold
           mb-6 font-serif text-orange-300"
          variants={itemVariants}
        >
          Welcome to
          <motion.span 
            className="block text-orange-100"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring", damping: 10, stiffness: 100 }}
          >
            Daily Brew
          </motion.span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl 
          lg:text-2xl mb-8 max-w-2xl mx-auto
          text-orange-100 leading-relaxed"
          variants={itemVariants}
        >
          Experience the perfect blend of premium coffee, artisanal pastries, and warm hospitality in the heart of the city.
        </motion.p>
        
        <motion.div 
          className="space-y-4 sm:space-y-0 sm:space-x-4 
          sm:flex sm:justify-center"
          variants={itemVariants}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              onClick={scrollToItems}
              size="lg"
              className="bg-orange-400 hover:bg-white
              hover:text-orange-400 text-orange-100 
              font-semibold px-8 py-3 rounded-full
              transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Explore Our Menu
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              variant="outline"
              size="lg"
              className="border-2 bg-orange-400 border-white text-orange-100 
              hover:bg-white hover:text-orange-400 
              font-semibold px-8 py-3 rounded-full transition-all
               duration-300"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Animated floating coffee bean */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [-10, 10, -10],
          rotate: [0, 360],
        }}
        transition={{
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 8, repeat: Infinity, ease: "linear" }
        }}
      >
        <div className="w-6 h-6 bg-gold rounded-full 
        opacity-70 shadow-lg"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
