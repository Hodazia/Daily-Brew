import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import FAQs from "../components/FAQs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Items from "../components/Items"
import Newsletter from "../components/Newsletter"
import ImageGallery from "../components/ImageGallery"

const Index = () => {
    return (

    <>
        <Navbar />
        <Hero />
        <About />
        <Items />
        <ImageGallery />
        <Testimonials />
        <FAQs />
        <Newsletter />
        <Contact />
        <Footer />
    </>
  )
}

export default Index