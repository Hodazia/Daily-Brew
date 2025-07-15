import {useState} from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card,CardContent } from './CardComponent';
import { motion, AnimatePresence } from 'framer-motion';
// define an interface for faq's like accordion, where once u click on it , a new p will be generated it will be a toggle state
interface faq {
    id:number,
    question:string,
    answer:string
}


const FAQs = () => {

    const [openfq,setopenfq] = useState<number | null>(null);
    const faqs: faq[] = [
        {
      id: 1,
      question: "What are your operating hours?",
      answer: "We're open Monday through Friday from 6:00 AM to 8:00 PM, and weekends from 7:00 AM to 9:00 PM. During holidays, our hours may vary, so please check our website or call ahead."
    },
    {
      id: 2,
      question: "Do you offer dairy-free and vegan options?",
      answer: "Absolutely! We have a variety of plant-based milk alternatives including oat, almond, soy, and coconut milk. We also offer vegan pastries and snacks clearly marked on our menu."
    },
    {
      id: 3,
      question: "Can I place orders for pickup or delivery?",
      answer: "Yes, we offer both pickup and delivery services. You can place orders through our website or call us directly. Delivery is available within a 5-mile radius with a minimum order of $15."
    },
    {
      id: 4,
      question: "Do you have Wi-Fi for customers?",
      answer: "Yes, we provide free high-speed Wi-Fi for all our customers. The network name is 'CafeVista_Guest' and the password is available at the counter. Perfect for remote work or studying!"
    },
    {
      id: 5,
      question: "Are your coffee beans ethically sourced?",
      answer: "Absolutely! We're committed to ethical sourcing and work directly with fair-trade certified farms. Our beans are sustainably grown and we ensure farmers receive fair compensation for their exceptional products."
    },
    {
      id: 6,
      question: "Do you cater events or offer bulk orders?",
      answer: "Yes, we offer catering services for corporate events, meetings, and special occasions. We can provide coffee urns, assorted pastries, and custom orders. Please contact us at least 48 hours in advance."
    },
    {
      id: 7,
      question: "Do you have a loyalty program?",
      answer: "Yes! Our Café Vista Rewards program offers points for every purchase. Earn 1 point per dollar spent and get a free drink after 100 points. Sign up at the counter or through our mobile app."
    }
    ]

    const toggleFAQ = (id:number) => {
        setopenfq(openfq === id ? null: id); // toggling the state
    }

    const containerVariants = {
        hidden:{
            opacity:0
        },
        visible:{
            opacity:1,
            transition:{
                delayChildren:0.3,
                staggerChildren:0.1
            }
        }
    }

    const ItemVariants = {
        hidden:{
            y:50,
            opacity:0,
            scale:0.95
        },
        visible:{
            y:0,
            opacity:1,
            scale:1,
            transition:{
                type:"spring" as const,
                damping:20,
                stiffness:100
            }
        }
    }

    const IconVariants = {
        closed:{rotate:0},
        open:{rotate:180}
    }
    return (
        <>
        <section id='faqs' className='py-20 bg-white'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                className="text-center mb-12"
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                >
                <motion.h2 
                className="text-3xl md:text-4xl font-bold text-amber-950 
                mb-4 font-serif"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" as const, damping: 15 }}
                >
                Frequently Asked Questions
                </motion.h2>
                <motion.div 
                    className="w-20 h-1 bg-amber-400 rounded-full mx-auto mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                />
                <motion.p 
                className="text-lg text-amber-800 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                >
                    Got questions? We've got answers! Find everything you need to know about Café Vista.
                </motion.p>
            </motion.div>

            {/* FAQ Accordion */}
                <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once:true}}
                >
                {faqs.map((faq) => (
                        <motion.div
                        key={faq.id}
                        variants={ItemVariants}
                        whileHover={{ 
                                scale: 1.02,
                                boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                        }}
                        transition={{ type: "spring" as const, damping: 20 }}
            >
                            <Card key={faq.id} className="border-amber-200
                             hover:shadow-md transition-all duration-300 
                             bg-stone-50">
                            <CardContent className="p-0">
                                <motion.button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full p-6 text-left
                                 flex justify-between items-center 
                                 hover:bg-coffee-50 transition-colors duration-300"
                                whileHover={{ backgroundColor: "rgba(139,69,19,0.05)"}}
                                whileTap={{scale:0.95}}
                                >
                                    <h3 className="font-semibold 
                                    text-amber-950 pr-4">
                                        {faq.question}
                                    </h3>
                                    <motion.div
                                    variants={IconVariants}
                                    animate={ openfq === faq.id ? "open": "closed"}>
                                        {openfq === faq.id ? (
                                            <ArrowUp className="w-5 h-5 text-coffee-600 flex-shrink-0" />
                                        ) : (
                                            <ArrowDown className="w-5 h-5 text-coffee-600 flex-shrink-0" />
                                        )}
                                    </motion.div>
                                </motion.button>
                                
                                <AnimatePresence>
                                {openfq === faq.id && (
                                <motion.div 
                                initial={{ height:0, opacity:0}}
                                animate={{ 
                                    height: "auto", 
                                    opacity: 1,
                                    transition: {
                                        height: { duration: 0.4 },
                                        opacity: { duration: 0.3, delay: 0.1 }
                                    }
                                    }}
                                    exit={{ 
                                    height: 0, 
                                    opacity: 0,
                                    transition: {
                                        height: { duration: 0.3 },
                                        opacity: { duration: 0.2 }
                                    }
                                    }}
                                className='overflow-hidden'
                                >
                                    <div className='px-6 pb-6'>
                                        <motion.div 
                                        className="pt-4 border-t border-coffee-100"
                                        initial={{ y: -10 }}
                                        animate={{ y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        >
                                            <p className="text-amber-900 leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    </div>
                                </motion.div>
                                )}
                                </AnimatePresence>
                            </CardContent>
                            </Card>
                            </motion.div>
            ))}
                </motion.div>
                {/* Contact CTA */}
                <motion.div 
                    className="text-center mt-12 p-8 
                    bg-orange-100 rounded-2xl"
                    initial={{opacity:0, y:50}}
                    whileInView={{ opacity:1,y:0}}
                    viewport={{ once:true}}
                    transition={{ delay: 0.5, duration: 0.6}}
                    whileHover={{
                        scale:1.02,
                        boxShadow:"0 15px 30px rgba(0,0,0,0.1)"
                    }}
                    >
                    <motion.h3 
                    className="text-xl font-semibold text-amber-950 mb-2"
                    initial={{ scale: 0.9 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                    >
                        Still have questions?
                    </motion.h3>
                     <motion.p 
                        className="text-amber-800 mb-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8 }}
                    >
                        We're here to help! Feel free to contact us directly.
                    </motion.p>
                    <motion.button 
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-amber-900
                         text-white px-6 py-3 rounded-full 
                         hover:bg-coffee-700 transition-colors duration-300 font-medium"
                        whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 8px 20px rgba(139, 69, 19, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.9, type: "spring" as const, damping: 15 }}
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </section>
        </>
    )
}

export default FAQs