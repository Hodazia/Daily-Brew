import {useState} from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { Card,CardContent } from './CardComponent';

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

    return (
        <>
        <section id='faqs' className='py-20 bg-white'>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4 font-serif">
                    Frequently Asked Questions
                </h2>
                <div className="w-20 h-1 text-yellow-500 rounded-full mx-auto mb-6"></div>
                <p className="text-lg text-yellow-200 max-w-2xl mx-auto">
                    Got questions? We've got answers! Find everything you need to know about Café Vista.
                </p>
            </div>

            {/* FAQ Accordion */}
                <div className="space-y-4">
                {faqs.map((faq) => (
                    <Card key={faq.id} className="border-coffee-200 hover:shadow-md transition-all duration-300">
                    <CardContent className="p-0">
                        <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full p-6 text-left flex justify-between items-center hover:bg-coffee-50 transition-colors duration-300"
                        >
                        <h3 className="font-semibold text-coffee-900 pr-4">
                            {faq.question}
                        </h3>
                        {openfq === faq.id ? (
                            <ArrowUp className="w-5 h-5 text-coffee-600 flex-shrink-0" />
                        ) : (
                            <ArrowDown className="w-5 h-5 text-coffee-600 flex-shrink-0" />
                        )}
                        </button>
                        
                        {openfq === faq.id && (
                        <div className="px-6 pb-6 animate-accordion-down">
                            <div className="pt-4 border-t border-coffee-100">
                            <p className="text-coffee-700 leading-relaxed">
                                {faq.answer}
                            </p>
                            </div>
                        </div>
                        )}
                    </CardContent>
                    </Card>
            ))}
                </div>
                {/* Contact CTA */}
                <div className="text-center mt-12 p-8 bg-yellow-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-yellow-900 mb-2">
                    Still have questions?
                </h3>
                <p className="text-yellow-600 mb-4">
                    We're here to help! Feel free to contact us directly.
                </p>
                <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-yellow-600 text-white px-6 py-3 rounded-full hover:bg-yellow-700 transition-colors duration-300 font-medium"
                >
                    Contact Us
                </button>
                </div>
            </div>
        </section>
        </>
    )
}

export default FAQs