import { useState } from "react"
import { X, ChevronRight, ChevronLeft} from 'lucide-react'
import { Button } from "./Button"
import Interior from '../assets/GALLERY/interior1.avif'
import coffeemul1 from '../assets/GALLERY/coffemul1.avif'
import coffeemul3 from '../assets/GALLERY/coffeemul3.avif'
import interior2 from '../assets/GALLERY/interior2.avif'
import shake from '../assets/GALLERY/shake.avif'
import coffeebeans from '../assets/GALLERY/coffee1.avif'
import { motion} from "framer-motion"

// interface Img {
//     img: Number | null
// };

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    const images = [
        {
            id:1,
            src:Interior,
            alt:'Coffee shop interior with warm lighting',
            category:'Inferior'
        },
        {
            id:2,
            src:coffeemul1,
            alt:'Perfect latte art',
            category:'Coffee'
        },
        {
            id:3,
            src:coffeemul3,
            alt:'Fresh pastries display',
            category:'pastries'
        },
        {
            id:4,
            src:interior2,
            alt:'Morning Coffee Setup',
            category:'Coffee'
        },
        {
            id:5,
            src:coffeebeans,
            alt:'Cozy setting area',
            category:'Inferior'
        },
        {
            id:6,
            src:shake,
            alt:'Iced coffee collection',
            category:'Coffee'
        }
    ]

    const openLightbox = (index: number) => {
        setSelectedImage(index);
      };
    
      const closeLightbox = () => {
        setSelectedImage(null);
      };
    
      const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return;
        
        if (direction === 'prev') {
          setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
        } else {
          setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
        }
      };
    
      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.1
          }
        }
      };
    
      const itemVariants = {
        hidden: { 
          y: 50, 
          opacity: 0,
          scale: 0.9
        },
        visible: {
          y: 0,
          opacity: 1,
          scale: 1,
          transition: {
            type: 'spring' as const,
            damping: 20,
            stiffness: 100
          }
        }
      };
    return (
        <>
        <section className="py-20 bg-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold 
            text-amber-950 mb-4 font-serif"
            initial={{ scale: 0.8 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, type: 'spring' as const, damping: 15 }}
          >
            Gallery
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
            Step inside our world of coffee craftsmanship and cozy atmosphere.
          </motion.p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(0,0,0,0.2)"
              }}
              transition={{ type: 'spring' as const, damping: 20 }}
              className="relative cursor-pointer group overflow-hidden rounded-xl"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-center">
                  <p className="text-sm font-medium mb-1">{image.category}</p>
                  <p className="text-xs">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={closeLightbox}
              >
                <X className="w-4 h-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={() => navigateImage('prev')}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
                onClick={() => navigateImage('next')}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">{images[selectedImage].category}</p>
                <p className="text-xs opacity-80">{images[selectedImage].alt}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
        </>
    )
}

export default ImageGallery