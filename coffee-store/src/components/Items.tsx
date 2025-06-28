import { useState } from "react";
import { Card, CardContent } from "./CardComponent";
import AmericanBold from '../assets/Items/Coffee/americanbold.avif';
import Cappuchino from '../assets/Items/Coffee/cappuchino.jpg'
import Espresso from '../assets/Items/Coffee/espreesso.avif'
import Latte from '../assets/Items/Coffee/latte.avif'
import ChocolateDelight from '../assets/Items/Cakes/ChocolateDelight.avif'
import RedVelvet from '../assets/Items/Cakes/RedVelvet.avif'
import Vanilla from '../assets/Items/Cakes/Vanilla.avif'
import Lemon from '../assets/Items/Cakes/lemontart.avif'
import VanillaShake from '../assets/Items/Shakes/vanilla.avif'
import Choco from '../assets/Items/Shakes/chocofudge.avif'
import Strawberry from '../assets/Items/Shakes/strawberry.avif'
import Caramel from '../assets/Items/Shakes/caramel.avif'
import Croissant from '../assets/Items/snacks/croissant.avif';
import Blueberry from '../assets/Items/snacks/blueberrymuffin.avif';
import Bar from '../assets/Items/snacks/granolabar.avif';
import bagelcream from '../assets/Items/snacks/bagelcream.avif'
import { motion, AnimatePresence } from "framer-motion";

// define an interface for the card elements img will be wrapped inside a card
interface Product {
    id:number,
    name:string,
    description:string,
    price:string,
    image:string
}

const Items =() =>{

    const [activeTab,setActiveTab] = useState('coffees');
    const products = {
        'coffees':[
        {
            'id':1,
            'name':'Espresso Perfecto',
            'description':'Rich bold expresso with perfect creama',
            'price':'$3.50',
            image:Espresso
        },
        {
            'id':2,
            'name':'Cappuchino Classic',
            'description':'Creamy steamed milk with espresso and foam art',
            'price':'$4.20',
            image:Cappuchino
        },
        {
            'id':3,
            'name':'Latte Artisanal',
            'description':'Smooth expresso with velvety steamed milk',
            'price':'$4.50',
            image:Latte
        },
        {
            'id':4,
            'name':'Americano Bold',
            'description':'Pure expresso diluted with hot water',
            'price':'$3.20',
            image:AmericanBold
        }
    ],
    'cakes':[
        {
        id: 5,
        name: "Chocolate Delight",
        description: "Rich chocolate cake with ganache frosting",
        price: "$5.80",
        image: ChocolateDelight
      },
      {
        id: 6,
        name: "Vanilla Dream",
        description: "Classic vanilla sponge with buttercream",
        price: "$4.90",
        image: Vanilla
      },
      {
        id: 7,
        name: "Red Velvet",
        description: "Moist red velvet with cream cheese frosting",
        price: "$6.20",
        image: RedVelvet
      },
      {
        id: 8,
        name: "Lemon Tart",
        description: "Zesty lemon curd in buttery pastry shell",
        price: "$4.50",
        image: Lemon
      }
    ],
     'shakes': [
      {
        id: 9,
        name: "Vanilla Bean Shake",
        description: "Creamy vanilla ice cream with real vanilla beans",
        price: "$5.50",
        image: VanillaShake
      },
      {
        id: 10,
        name: "Chocolate Fudge",
        description: "Rich chocolate shake with fudge swirls",
        price: "$6.00",
        image: Choco
      },
      {
        id: 11,
        name: "Strawberry Bliss",
        description: "Fresh strawberries blended with cream",
        price: "$5.80",
        image: Strawberry
      },
      {
        id: 12,
        name: "Caramel Crunch",
        description: "Caramel shake with crunchy cookie pieces",
        price: "$6.20",
        image: Caramel
      }
    ],
    'snacks': [
      {
        id: 13,
        name: "Croissant Butter",
        description: "Flaky, buttery French croissant",
        price: "$2.80",
        image: Croissant
      },
      {
        id: 14,
        name: "Blueberry Muffin",
        description: "Freshly baked with juicy blueberries",
        price: "$3.20",
        image:Blueberry
      },
      {
        id: 15,
        name: "Bagel & Cream Cheese",
        description: "Toasted everything bagel with cream cheese",
        price: "$4.50",
        image: bagelcream
      },
      {
        id: 16,
        name: "Granola Bar",
        description: "Healthy mix of oats, nuts, and dried fruits",
        price: "$2.50",
        image: Bar
      }
    ]
    }


    const tabs = [
    { id: 'coffees', label: 'Coffees', icon: '☕' },
    { id: 'cakes', label: 'Cakes', icon: '🍰' },
    { id: 'shakes', label: 'Shakes', icon: '🥤' },
    { id: 'snacks', label: 'Snacks', icon: '🥐' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  return (
    <section id="items" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
        className="text-center mb-12"
        initial={{ opacity:0, y:-50}}
        whileInView={{ opacity:1,y:0}}
        viewport={{ once:true}}
        transition={{ duration: 0.6}}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4 font-serif">
            Our Delicious Menu
          </h2>
          <motion.div 
          className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-6"
          initial={{ width: 0}}
          whileInView={{ width: 98 }}
          viewport={{ once:true}}
          transition={{ delay:0.3, duration: 0.6}}
          ></motion.div>
          <p className="text-lg text-yellow-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of premium coffees, artisanal cakes, creamy shakes, and fresh snacks.
          </p>
        </motion.div>
        {/* Tabs */}
        <motion.div 
        className="flex flex-wrap justify-center gap-4 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
              }`}
              whileHover={{ scale:1.05}}
              whileTap={{ scale: 0.95}}
              layout
            >
              <motion.span 
              animate={{ rotate: activeTab === tab.id ? [0, 15, -15, 0] : 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg">{tab.icon}</motion.span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>
        {/*products grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products[activeTab as keyof typeof products].map((product) => (
            <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden border-yellow-200">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-yellow-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-yellow-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-yellow-400">{product.price}</span>
                  <button className="bg-yellow-600 text-white px-4 py-2 rounded-full text-sm hover:bg-yellow-700 transition-colors duration-300">
                    Order Now
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Items