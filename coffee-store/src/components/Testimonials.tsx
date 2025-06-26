// testimonials section, what are they

import { useState, useEffect } from 'react';
import { Star} from 'lucide-react'
import { Card, CardContent } from './CardComponent';
import Cappucchino from '../assets/test1capp.avif'

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
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Anjana",
      location: "Uptown",
      rating: 4,
      date: "2025-06-1",
      itemOrdered: "Chocolate Delight",
      itemImage: "../assets/test1capp.avif",
      quote: "Absolutely divine cake! Every bite was a piece of heaven. Will definitely be back for more.",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
        {
      id: 3,
      name: "Zeba Khan",
      location: "Midtown",
      rating: 5,
      date: "2025-06-10",
      itemOrdered: "Vanilla Bean Shake",
      itemImage: "../assets/test1capp.avif",
      quote: "Creamy, rich, and perfectly sweet. This shake brings back childhood memories in the best way possible.",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
        {
      id: 4,
      name: "Ajay Pandey",
      location: "EastSide",
      rating: 5,
      date: "2025-06-5",
      itemOrdered: "Espresso Perfecto",
      itemImage: "../assets/test1capp.avif",
      quote: "Perfect espresso shot every time. The baristas here are true artists and masters of their craft.",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
    },
        {
      id: 5,
      name: "Zain Malik",
      location: "WestEnd",
      rating: 4,
      date: "2025-06-10",
      itemOrdered: "Red Velvet",
      itemImage: "../assets/test1capp.avif",
      quote: "The red velvet cake here is legendary! Moist, flavorful, and the cream cheese frosting is perfect.",
      avatar: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
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
            className={StarColor}
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
                <div>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}>
                            <Card>
                                <CardContent>
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

        </div>
    </section>
  )
}

export default Testimonials