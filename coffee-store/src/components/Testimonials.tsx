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
import Cookies from '../assets/Cookies.avif'

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
  useEffect(() =>  {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  // write a function for displaying Start out of rating
  const renderRating = (currentRating:number) => {
    const totalStars = 5;

    const starElements =[];

    for(let i=0;i<totalStars;i++)
    {
        const isFilled = i < currentRating;

        const StarColor = isFilled ? `text-yellow-500 fill-current` : `text-gray-300`;

        const StarClassName = `w-4 h-4 ${StarColor}`
        starElements.push(
            <Star 
            key={i}
            className={StarClassName}
            />
        )
    }
    return starElements
  }

  return (
    <section id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
            <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-serif">
                What Our Customers Say
            </h2>
            <div className="w-20 h-1 bg-gold rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-coffee-600 max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our valued customers have to say about their Café Vista experience.
            </p>
            </div>

            {/*Testimonials Carousel */}
            <div className='relative overflow-hidden'>
                <div
                className='flex transition-transform duration-500 ease-in-out'
                style={{ transform: `translateX(-${currentIndex * (100 / Math.min(testimonials.length, 3))}%)` }}
                >
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}
                        className='w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3'>
                            <Card className='h-full bg-white border-yellow-200 hover:shadow-xl transform-all duration-300 group '>
                                <CardContent className='p-6'>
                                    {/*Header with avatar and info */}
                                    <div className='flex items-center p-4'>
                                        <img 
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className='w-12 h-12 rounded-full object-cover mr-4'
                                        />
                                        <div className='flex-1 '>
                                            <h4 className='font-semibold text-yellow-600'>{testimonial.name}</h4>
                                            <p className='text-sm text-yellow-600'>{testimonial.location}</p>
                                         </div> 
                                         <div className='text-right'>
                                            <div className='flex justify-end mb-1'>
                                                {renderRating(testimonial.rating)}
                                            </div>
                                            <p className='text-xs text-yellow-500'>{testimonial.date}</p>
                                        </div>  
                                    </div>
                                    {/* Quote */}
                                    <blockquote className="text-coffee-700 mb-4 italic leading-relaxed">
                                    "{testimonial.quote}"
                                    </blockquote>

                                    {/* Item ordered */}
                                    <div className="flex items-center p-3 bg-coffee-50 rounded-lg group-hover:bg-coffee-100 transition-colors duration-300">
                                    <img
                                        src={testimonial.itemImage}
                                        alt={testimonial.itemOrdered}
                                        className="w-10 h-10 rounded-lg object-cover mr-3"
                                    />
                                    <div>
                                        <p className="text-sm font-medium text-coffee-900">Ordered:</p>
                                        <p className="text-sm text-coffee-600">{testimonial.itemOrdered}</p>
                                    </div>
                                    </div>
                                </CardContent>
                            </Card>
                            </div>
                    ))
                    }
                </div>
            </div>
              {/* Dots indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-yellow-600' : 'bg-yellow-300 hover:bg-yellow-400'
                    }`}
                  />
                ))}
              </div>
        </div>
    </section>
  )
}

export default Testimonials