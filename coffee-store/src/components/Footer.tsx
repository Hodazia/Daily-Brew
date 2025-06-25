import { Coffee, Heart } from 'lucide-react';


const Footer = () => {
    return (
        <footer className='bg-yellow-900 text-white py-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <div className='flex justify-center items-center'>
                        <Coffee className='h-8 w-8 text-yellow-300'/>
                        <span className='text-2xl font-bold font-serif'>Daily Brew</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer