import { Coffee, Heart } from 'lucide-react';


const Footer = () => {
    return (
        <footer className='bg-orange-100 text-amber-800 py-8'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <div className='flex justify-center items-center'>
                        <Coffee className='h-8 w-8 text-amber-800'/>
                        <span className='text-2xl font-bold  text-amber-800 font-serif'>Daily Brew</span>
                    </div>

                    {/* Divider */}
                    <div className="w-20 h-0.5 bg-amber-400 mx-auto mb-6"></div>
          
                        {/* Footer Text */}
                        <div className="space-y-2 text-amber-800">
                            <p className="flex items-center justify-center space-x-1">
                            <span>Created with</span>
                            <Heart className="w-4 h-4 text-red-400 fill-current" />
                            <span>by Ziaul</span>
                            </p>
                            <p>All Rights Reserved</p>
                            <p>Copyright © 2025</p>
                        </div>
                        
                        {/* Bottom decorative element */}
                        <div className="mt-6 pt-6 border-t border-amber-400">
                            <p className="text-sm text-amber-800 italic">
                            "Life begins after coffee" ☕
                            </p>
                        </div>


                </div>
            </div>
        </footer>
    )
}

export default Footer