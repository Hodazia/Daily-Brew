// testimonials section, what are they

import { useState, useEffect } from 'react';
import { Star} from 'lucide-react'
import { Card, CardContent } from './CardComponent';
import Cappucchino from '../assets/test1capp.avif'
import Avatar from '../assets/test1avat.avif'
import Avatar2 from '../assets/test1avat2.avif'
import Avatar3 from '../assets/test1avat3.avif'
import femAvatr1 from '../assets/test1avatfem1.avif';
import femAvatr2 from '../assets/test1avatfem2.avif';
import femAvatr3 from '../assets/test1avatfem3.avif';
import femAvatr4 from '../assets/test1avatfem4.avif';
import VanillaBean from '../assets/vanillabean.avif';
import ChocoDelight from '../assets/chocodelight.avif';
import Expresso from '../assets/expresso.avif'
import RedVelvet from '../assets/redvelvet.avif'
import Croissants from '../assets/Croissants.avif';
import Cookies from '../assets/Cookies.avif';
import { motion,  AnimatePresence } from 'framer-motion';

interface testimonial {
    id:number,
    name:string,
    location: string,
    rating:number,
    date:string,
    itemOrdered:string,
    itemImage:string,
    quote:string,
    avatar:string
}

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const testimonials: testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Downtown",
      rating: 5,
      date: "2025-06-15",
      itemOrdered: "Cappuccino Classic",
      itemImage: Cappucchino,
      quote: "The best coffee in the city! The atmosphere is perfect for working and the staff is incredibly friendly.",
      avatar: femAvatr1
    },
    {
      id: 2,
      name: "Anjana",
      location: "Uptown",
      rating: 4,
      date: "2025-06-1",
      itemOrdered: "Chocolate Delight",
      itemImage: ChocoDelight,
      quote: "Absolutely divine cake! Every bite was a piece of heaven. Will definitely be back for more.",
      avatar: femAvatr2
    },
        {
      id: 3,
      name: "Zeba Khan",
      location: "Midtown",
      rating: 5,
      date: "2025-06-10",
      itemOrdered: "Vanilla Bean Shake",
      itemImage: VanillaBean,
      quote: "Creamy, rich, and perfectly sweet. This shake brings back childhood memories in the best way possible.",
      avatar: femAvatr3
    },
        {
      id: 4,
      name: "Ajay Pandey",
      location: "EastSide",
      rating: 5,
      date: "2025-06-5",
      itemOrdered: "Espresso Perfecto",
      itemImage: Expresso,
      quote: "Perfect espresso shot every time. The baristas here are true artists and masters of their craft.",
      avatar: Avatar
    },
        {
      id: 5,
      name: "Zain Malik",
      location: "WestEnd",
      rating: 4,
      date: "2025-06-10",
      itemOrdered: "Red Velvet",
      itemImage: RedVelvet,
      quote: "The red velvet cake here is legendary! Moist, flavorful, and the cream cheese frosting is perfect.",
      avatar: Avatar2
    },
            {
      id: 6,
      name: "Rohit Singh",
      location: "WestEnd",
      rating: 5,
      date: "2025-06-8",
      itemOrdered: "Croissants",
      itemImage: Croissants,
      quote: "The croissants were perfectly flaky, buttery, and melted in my mouth – pure bliss!",
      avatar: Avatar3
    },
            {
      id: 7,
      name: "Priya Verma",
      location: "WestEnd",
      rating: 4,
      date: "2025-06-20",
      itemOrdered: "Cookies",
      itemImage: Cookies,
      quote: "Irresistibly chewy cookies with rich chocolate chunks – an absolute must-try treat!",
      avatar: femAvatr4
    },
]

// Auto-scroll functionality
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, 4000);

  return () => clearInterval(timer);
}, [testimonials.length]);

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
    <motion.div
      key={index}
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ 
        delay: index * 0.1, 
        type: "spring" as const,
        damping: 15,
        stiffness: 200
      }}
      whileHover={{ 
        scale: 1.2,
        rotate: 360,
        transition: { duration: 0.3 }
      }}
    >
      <Star 
        className={`w-4 h-4 ${index < rating ? 'text-gold fill-current' : 'text-gray-300'}`} 
      />
    </motion.div>
  ));
};

const cardVariants = {
  enter: {
    x: 1000,
    opacity: 0,
    scale: 0.8,
    rotateY: -90
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: {
      type: "spring" as const,
      damping: 25,
      stiffness: 120,
      duration: 0.8
    }
  },
  exit: {
    x: -1000,
    opacity: 0,
    scale: 0.8,
    rotateY: 90,
    transition: {
      duration: 0.5
    }
  }
};

const backgroundVariants = {
  initial: { 
    background: "linear-gradient(135deg, #f5f5dc 0%, #deb887 100%)" 
  },
  animate: { 
    background: [
      "linear-gradient(135deg, #f5f5dc 0%, #deb887 100%)",
      "linear-gradient(135deg, #deb887 0%, #f5f5dc 100%)",
      "linear-gradient(135deg, #f5f5dc 0%, #deb887 100%)"
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

return (
  <motion.section 
    id="testimonials" 
    className="py-20 overflow-hidden"
    variants={backgroundVariants}
    initial="initial"
    animate="animate"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ 
          duration: 0.8,
          type: "spring" as const,
          damping: 20
        }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-serif"
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ 
            delay: 0.2, 
            type: "spring" as const, 
            damping: 15,
            stiffness: 100
          }}
        >
          What Our Customers Say
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 1.2 }}
        />
        <motion.p 
          className="text-lg text-coffee-600 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Don't just take our word for it. Here's what our valued customers have to say about their Café Vista experience.
        </motion.p>
      </motion.div>

      {/* Testimonials Carousel */}
      <div className="relative h-96 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="absolute w-full max-w-2xl"
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
          >
            <motion.div
              whileHover={{ 
                scale: 1.02,
                rotateX: 5,
                boxShadow: "0 25px 50px rgba(0,0,0,0.2)"
              }}
              transition={{ type: "spring" as const, damping: 20 }}
            >
              <Card className="bg-white border-coffee-200 shadow-2xl overflow-hidden">
                <CardContent className="p-8">
                  {/* Header with avatar and info */}
                  <motion.div 
                    className="flex items-center mb-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <motion.img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
                      }}
                      transition={{ type: "spring" as const, damping: 15 }}
                    />
                    <div className="flex-1">
                      <motion.h4 
                        className="font-semibold text-coffee-900 text-lg"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {testimonials[currentIndex].name}
                      </motion.h4>
                      <motion.p 
                        className="text-coffee-600"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                      >
                        {testimonials[currentIndex].location}
                      </motion.p>
                    </div>
                    <div className="text-right">
                      <motion.div 
                        className="flex justify-end mb-2"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 }}
                      >
                        {renderStars(testimonials[currentIndex].rating)}
                      </motion.div>
                      <motion.p 
                        className="text-sm text-coffee-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                      >
                        {testimonials[currentIndex].date}
                      </motion.p>
                    </div>
                  </motion.div>

                  {/* Quote */}
                  <motion.blockquote 
                    className="text-coffee-700 mb-6 italic leading-relaxed text-lg text-center relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    <motion.span
                      className="text-6xl text-gold absolute -top-4 -left-4 opacity-30"
                      initial={{ scale: 0, rotate: -90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.8, type: "spring" as const }}
                    >
                      "
                    </motion.span>
                    {testimonials[currentIndex].quote}
                    <motion.span
                      className="text-6xl text-gold absolute -bottom-8 -right-4 opacity-30"
                      initial={{ scale: 0, rotate: 90 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.9, type: "spring" as const }}
                    >
                      "
                    </motion.span>
                  </motion.blockquote>

                  {/* Item ordered */}
                  <motion.div 
                    className="flex items-center justify-center p-4 bg-coffee-50 rounded-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "rgba(139, 69, 19, 0.1)"
                    }}
                  >
                    <motion.img
                      src={testimonials[currentIndex].itemImage}
                      alt={testimonials[currentIndex].itemOrdered}
                      className="w-12 h-12 rounded-lg object-cover mr-4"
                      whileHover={{ 
                        scale: 1.3, 
                        rotate: 15,
                        boxShadow: "0 8px 16px rgba(0,0,0,0.2)"
                      }}
                      transition={{ type: "spring" as const, damping: 15 }}
                    />
                    <div>
                      <motion.p 
                        className="text-sm font-medium text-coffee-900"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.8 }}
                      >
                        Ordered:
                      </motion.p>
                      <motion.p 
                        className="text-coffee-600"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.9 }}
                      >
                        {testimonials[currentIndex].itemOrdered}
                      </motion.p>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots indicator */}
      <motion.div 
        className="flex justify-center mt-8 space-x-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-coffee-600 scale-125' : 'bg-coffee-300 hover:bg-coffee-400'
            }`}
            whileHover={{ 
              scale: index === currentIndex ? 1.4 : 1.2,
              backgroundColor: index === currentIndex ? "#8B4513" : "#D2691E"
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scale: index === currentIndex ? 1.25 : 1,
              opacity: index === currentIndex ? 1 : 0.7
            }}
            transition={{ type: "spring" as const, damping: 20 }}
          />
        ))}
      </motion.div>
    </div>
  </motion.section>
);
};

export default Testimonials;

