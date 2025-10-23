import { MapPin , Phone, Clock, Mail } from "lucide-react"
import { Card, CardContent } from "./CardComponent"
import { motion} from "framer-motion"

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


    return (
        <section id="contact" className="py-20 bg-gradient-to-r from-rgba(252, 248, 242, 0.95) 
        to-rgba(252, 248, 242, 0.98)">
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
                    className="text-3xl md:text-4xl font-bold text-amber-950 
                    mb-4 font-serif"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" as const, damping: 15 }}
                    >
                        Get in Touch
                    </motion.h2>
                    <motion.div 
                    className="w-20 h-1 text-amber-800 rounded-full mx-auto mb-6"
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}>

                    </motion.div>
                    <motion.p 
                    className="text-lg text-amber-800 max-w-2xl mx-auto"
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
                        <Card className="border-amber-100 
                        hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <motion.div 
                                        className="bg-amber-800 p-3
                                         rounded-full"
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
                                        <h3 className="font-semibold text-amber-950 mb-1">Visit Us</h3>
                                        <p className="text-amber-800">The Cannaught Place</p>
                                        <p className="text-amber-800">New Delhi,Delhi</p>
                                    </motion.div>    
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>

                        <motion.div
                        className=""
                        whileHover={{ 
                        scale: 1.03,
                        boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                        }}
                        transition={{ type: "spring" as const, damping: 20 }}
                        >
                            <Card className="border-amber-100 
                             hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                    <motion.div 
                                    className="bg-amber-800 p-3 rounded-full"
                                    initial={{scale:1, rotate:0}}
                                    whileHover={{
                                                scale:1.1,
                                                rotate:5,
                                                }}
                                    transition={{ type: "spring" as const, damping: 20 }}
                                    >
                                        <Phone className="w-6 h-6 text-white" />
                                    </motion.div>
                                    <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}>
                                        <h3 className="font-semibold text-amber-950 mb-1">Call Us</h3>
                                        <p className="text-amber-800">(555) 123-CAFE</p>
                                        <p className="text-amber-800">(555) 123-2233</p>
                                    </motion.div>
                                </div>
                            </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                            }}
                            transition={{ type: "spring" as const, damping: 20 }}
                        >
                        <Card className="border-amber-100 hover:shadow-lg transition-all duration-300">
                            <CardContent className="p-6">
                                <div className="flex items-center space-x-4">
                                <motion.div 
                                className="bg-amber-800 p-3 rounded-full"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                >
                                    <Mail className="w-6 h-6 text-white" />
                                </motion.div>
                                <div>
                                    <h3 className="font-semibold text-amber-950 mb-1">Email Us</h3>
                                    <p className="text-amber-800">hello@dailybrew.com</p>
                                    <p className="text-amber-800">orders@dailybrew.com</p>
                                </div>
                                </div>
                            </CardContent>
                            </Card>
                            </motion.div>

                            
                            <motion.div
                            whileHover={{ 
                                scale: 1.03,
                                boxShadow: "0 15px 30px rgba(0,0,0,0.15)"
                            }}
                            transition={{ type: "spring" as const, damping: 20 }}
                            >
                                <Card className="border-amber-100 
                                hover:shadow-lg transition-all duration-300">
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4">
                                        <motion.div 
                                        initial={{scale:1, rotate:0}}
                                        whileHover={{
                                                    scale:1.1,
                                                    rotate:5,
                                                    }}
                                        transition={{ type: "spring" as const, damping: 20 }}
                                        className="bg-amber-800 p-3 rounded-full">
                                            <Clock className="w-6 h-6 text-white" />
                                        </motion.div>
                                        <motion.div
                                        initial={{ x: -20, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 }}>
                                            <h3 className="font-semibold text-amber-950 mb-1">Hours</h3>
                                            <p className="text-amber-800">Mon-Fri: 6:00 AM - 8:00 PM</p>
                                            <p className="text-amber-800">Sat-Sun: 7:00 AM - 9:00 PM</p>
                                        </motion.div>
                                        </div>
                                   </CardContent>
                                </Card>
                            </motion.div>
                    </motion.div>
                    {/* Map Placeholder / Additional Info */}
                            {/* Map and Additional Info */}
                <motion.div className="space-y-6" variants={ItemVariants}>
                    <motion.div
                    whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                    }}
                    transition={{ type: "spring" as const, damping: 20 }}
                    >
                    <Card className="border-amber-100 overflow-hidden">
                        <CardContent className="p-0">
                        <div className="p-6 bg-orange-100">
                            <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: "spring" as const, damping: 15 }}
                            className="text-center mb-4"
                            >
                            <MapPin className="w-12 h-12 text-amber-800
                             mx-auto mb-3" />
                            <h3 className="text-xl font-semibold 
                            text-amber-950 mb-2">Find Us Easily</h3>
                            <p className="text-amber-800 mb-4">Located in the heart of Delhi,
                                 just 2 blocks from Cannaught Place</p>
                            </motion.div>
                            
                            {/* Google Maps Embed */}
                            <div className="w-full h-64 rounded-lg 
                            shadow-inner overflow-hidden">
                            <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224193.2026046709!2d76.97211924146275!3d28.599213092610064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd35c804a1a1%3A0xe374c47e935b9c3a!2sCafe%20Delhi%20Heights!5e0!3m2!1sen!2sin!4v1752587481049!5m2!1sen!2sin" 
                            width="100%"
                             height="100%" 
                            style={{ border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" 
                            title="Café Vista Location"
                            className="rounded-lg"/>
                            
                            </div>
                        </div>
                        </CardContent>
                    </Card>
                    </motion.div>

                    <motion.div
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              transition={{ type: "spring" as const, damping: 20 }}
            >
              <Card className="border-amber-100">
                <CardContent className="p-6">
                  <motion.h3 
                    className="text-xl font-semibold text-amber-950 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    Why Visit Daily Brew?
                  </motion.h3>
                  <ul className="space-y-3 text-amber-800">
                    {[
                      "Premium ethically sourced coffee beans",
                      "Fresh pastries baked daily on-site",
                      "Cozy atmosphere perfect for work or relaxation",
                      "Free Wi-Fi and ample seating",
                      "Friendly, knowledgeable baristas"
                    ].map((item, index) => (
                      <motion.li 
                        key={index}
                        className="flex items-start space-x-2"
                        initial={{ x: -30, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * index }}
                        whileHover={{ x: 10 }}
                      >
                        <motion.span 
                          className="w-2 h-2 bg-amber-800 rounded-full 
                          mt-2 flex-shrink-0"
                          animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.3
                          }}
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
)
}
export default Contact;