import { ArrowRight } from 'lucide-react';
import Herobg from '../assets/Hero/bg.avif'


const Hero = () => {

    return (
    <section id="hero" className='relative  min-h-screen flex items-center justify-center overflow-hidden'
    >

        {/*Background Image */}
        <div
        className='absolute inset-0 bg-cover bg-green bg-no-repeat'
        style={{
            backgroundImage:`linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Herobg})`
            }}>

        </div>
    </section>
    )
}


export default Hero
