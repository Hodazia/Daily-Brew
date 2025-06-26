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

                    {/* Divider */}
                    <div className="w-20 h-0.5 bg-yellow-400 mx-auto mb-6"></div>
          
                        {/* Footer Text */}
                        <div className="space-y-2 text-coffee-200">
                            <p className="flex items-center justify-center space-x-1">
                            <span>Created with</span>
                            <Heart className="w-4 h-4 text-red-400 fill-current" />
                            <span>by Ziaul</span>
                            </p>
                            <p>All Rights Reserved</p>
                            <p>Copyright © 2025</p>
                        </div>
                        
                        {/* Bottom decorative element */}
                        <div className="mt-6 pt-6 border-t border-yellow-700">
                            <p className="text-sm text-yellow-300 italic">
                            "Life begins after coffee" ☕
                            </p>
                        </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer