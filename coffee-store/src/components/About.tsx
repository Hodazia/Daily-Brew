import Aboutus from '../assets/aboutus.avif'

const About = () => {
    return (
        <>
        <section id="about" className="bg-white p-20">
            <div className="max-w-7xl mx-auto p-6 md:p-4 lg:p-2">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/*Image in the first grid */}
                    <div className="relative">
                        <img 
                        src={Aboutus}
                        alt="Cakes, pastries of cafes"
                        />
                        <div className="absolute -bottom-6 -right-6 bg-yellow-500 p-6 rounded-2xl shadow-xl z-10">
                            <div className="text-center">
                                <div className="text-2xl font-bold ">2+</div>
                                <div className="text-sm ">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/*the next grid,  */}
                    <div className="space-y-6">
                        <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-coffee-900 mb-4 font-serif">
                            About Café Vista
                        </h2>
                        <div className="w-20 h-1 bg-gold rounded-full mb-6"></div>
                        </div>
                        
                        <p className="text-lg text-coffee-700 leading-relaxed">
                        Founded in 2009, Café Vista has been serving the finest artisanal coffee and handcrafted treats to our beloved community. We source our beans directly from sustainable farms, ensuring every cup tells a story of quality and ethical practices.
                        </p>
                        
                        <p className="text-lg text-coffee-700 leading-relaxed">
                        Our passionate team of baristas and pastry chefs work tirelessly to create an experience that goes beyond just great coffee. We believe in creating moments of connection, comfort, and joy in every visit.
                        </p>

                        <div className="grid grid-cols-2 gap-6 mt-8">
                        <div className="text-center p-4 bg-white rounded-xl shadow-md">
                            <div className="text-2xl font-bold text-coffee-600 mb-2">50+</div>
                            <div className="text-sm text-coffee-700">Coffee Varieties</div>
                        </div>
                        <div className="text-center p-4 bg-white rounded-xl shadow-md">
                            <div className="text-2xl font-bold text-coffee-600 mb-2">1000+</div>
                            <div className="text-sm text-coffee-700">Happy Customers</div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default About