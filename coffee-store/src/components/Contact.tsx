import { MapPin , Phone, Clock, Mail } from "lucide-react"
import { Card, CardContent } from "./CardComponent"
import { motion, transform } from "framer-motion"

const Contact = () => {
    const containerVariants = {
        hidden:{ opacity: 0 },
        visible:{
            opacity:1,
            transition:{
                delayChildren:0.3,
                staggerChildren:0.2
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
        initial:{scale:1, rotate:0},
        hover:{
            scale:1.1,
            rotate:5,
            transform:{ type: "string" as const, damping: 15}
        }
    }

    return (
        <section id="contact" className="py-20 bg-yellow-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div 
                className="text-center mb-12"
                initial={{ opacity:0 ,y: -50}}
                whileInView={{ opacity:1, y:0}}
                viewport={{ once:true}}
                transition={{duration: 0.6 }}
                >
                    <motion.h2 
                    className="text-3xl md:text-4xl font-bold text-yellow-900 mb-4 font-serif"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" as const, damping: 15 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.div 
                    className="w-20 h-1 text-yellow-500 rounded-full mx-auto mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}>

                    </motion.div>
                    <motion.p 
                    className="text-lg text-yellow-200 max-w-2xl mx-auto"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    >
                        We'd love to hear from you! Visit us, call us, or drop us a line. Your perfect coffee experience awaits.
                    </motion.p>
                </motion.div>

                <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true}}
                className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div className="space-y-8" variants={ItemVariants}>
                        <motion.div
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                            }}
                                transition={{ type: "spring" as const, damping: 20 }}
                        >
                        <Card className="border-yellow-200 hover:Shadow-lg transition-all duration-300">
                            <CardContent>
                                <div className="flex items-center space-x-4">
                                    <motion.div 
                                        className="bg-coffee-600 p-3 rounded-full"
                                        initial={{scale:1, rotate:0}}
                                        whileHover={{
                                                    scale:1.1,
                                                    rotate:5,
                                                }}
                                         transition={{ type: "spring" as const, damping: 20 }}
                                        >
                                        <MapPin className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <motion.div
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity:1, x: 0}}
                                    viewport={{ once:true}}
                                    transition={{ delay: 0.2}}
                                    >
                                        <h3 className="font-semibold text-yellow-900 mb-1">Visit Us</h3>
                                        <p className="text-yellow-600">The Wall Street, Downtown</p>
                                        <p className="text-yellow-600">New York, New York</p>
                                    </motion.div>    
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>.

                        <motion.div
                        className=""
                        whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring" as const, damping: 20 }}
                        >
                            <Card className="border-coffee-200 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                <div className="bg-coffee-600 p-3 rounded-full">
                                    <Phone className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-coffee-900 mb-1">Call Us</h3>
                                    <p className="text-coffee-600">(555) 123-CAFE</p>
                                    <p className="text-coffee-600">(555) 123-2233</p>
                                </div>
                                </div>
                            </CardContent>
                            </Card>
                        </motion.div>

                        <Card className="border-coffee-200 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                <div className="bg-coffee-600 p-3 rounded-full">
                                    <Mail className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-coffee-900 mb-1">Email Us</h3>
                                    <p className="text-coffee-600">hello@cafevista.com</p>
                                    <p className="text-coffee-600">orders@cafevista.com</p>
                                </div>
                                </div>
                            </CardContent>
                            </Card>

                        <Card className="border-coffee-200 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                <div className="bg-coffee-600 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-coffee-900 mb-1">Hours</h3>
                                    <p className="text-coffee-600">Mon-Fri: 6:00 AM - 8:00 PM</p>
                                    <p className="text-coffee-600">Sat-Sun: 7:00 AM - 9:00 PM</p>
                                </div>
                                </div>
                            </CardContent>
                    </Card>
                    </motion.div>
                    {/* Map Placeholder / Additional Info */}
                    <div className="space-y-6">
                        <Card className="border-coffee-200 h-64 flex items-center justify-center bg-gradient-to-br from-coffee-100 to-coffee-200">
                        <CardContent className="text-center">
                            <MapPin className="w-16 h-16 text-coffee-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-coffee-900 mb-2">Find Us Easily</h3>
                            <p className="text-coffee-600">Located in the heart of downtown, just 2 blocks from Central Station</p>
                        </CardContent>
                        </Card>

                        <Card className="border-coffee-200">
                        <CardContent className="p-6">
                            <h3 className="text-xl font-semibold text-coffee-900 mb-4">Why Visit Café Vista?</h3>
                            <ul className="space-y-3 text-coffee-600">
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                                <span>Premium ethically sourced coffee beans</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                                <span>Fresh pastries baked daily on-site</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                                <span>Cozy atmosphere perfect for work or relaxation</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                                <span>Free Wi-Fi and ample seating</span>
                            </li>
                            <li className="flex items-start space-x-2">
                                <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0"></span>
                                <span>Friendly, knowledgeable baristas</span>
                            </li>
                            </ul>
                        </CardContent>
                        </Card>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Contact