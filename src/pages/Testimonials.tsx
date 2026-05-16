import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../lib/utils';

const testimonials = [
  {
    name: "Arjun Sharma",
    role: "Food Critic",
    text: "An absolute masterpiece of Indian flavors. The Dal Kahaani is something I'll be dreaming about for weeks. The ambiance truly feels royal.",
    rating: 5,
    date: "March 2025"
  },
  {
    name: "Priya Kaur",
    role: "Regular Patron",
    text: "Kahaani is where we celebrate every family milestone. The service is impeccably warm, and the food is consistently world-class.",
    rating: 5,
    date: "February 2025"
  },
  {
    name: "Dr. Vikram Aditya",
    role: "Lifestyle Blogger",
    text: "The fusion of traditional Punjabi hospitality with Mughal elegance is perfect. Best fine dining experience in Bathinda, hands down.",
    rating: 5,
    date: "January 2025"
  },
  {
    name: "Sarah Jenkins",
    role: "Traveler",
    text: "Traveling through India and found this gem. The spices are balanced and sophisticated. A true 'kahaani' indeed!",
    rating: 5,
    date: "December 2024"
  },
  {
    name: "Mohit Jindal",
    role: "CEO, Tech Solutions",
    text: "Great place for business dinners. The privacy and quiet luxury make it ideal for important conversations accompanied by stellar food.",
    rating: 5,
    date: "November 2024"
  },
  {
    name: "Anjali Verma",
    role: "Home Chef",
    text: "The Shahi Tukda takes me back to my grandmother's kitchen. Exceptional attention to detail in every single dish.",
    rating: 5,
    date: "October 2024"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.5em] text-sm block mb-4">Guest Reviews</span>
          <h1 className="text-5xl md:text-7xl">Voices of Kahaani</h1>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex flex-col md:flex-row items-center gap-12"
            >
              {/* Content Card */}
              <div className="flex-grow glass p-12 relative">
                <Quote className="absolute top-8 left-8 text-gold opacity-10" size={120} />
                <div className="relative z-10 space-y-8">
                  <div className="flex gap-1">
                    {[...Array(testimonials[index].rating)].map((_, i) => (
                      <Star key={i} size={20} fill="#C9A84C" className="text-gold" />
                    ))}
                  </div>
                  
                  <p className="text-2xl md:text-3xl font-display text-white leading-relaxed italic">
                    "{testimonials[index].text}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gold/10 pt-8">
                    <div>
                      <h4 className="text-xl text-gold tracking-widest uppercase">{testimonials[index].name}</h4>
                      <p className="text-ivory/40 text-xs uppercase tracking-[0.2em] mt-1">{testimonials[index].role}</p>
                    </div>
                    <span className="text-[10px] text-ivory/30 uppercase tracking-[0.3em]">{testimonials[index].date}</span>
                  </div>
                </div>
              </div>
              
              {/* Image Decor */}
              <div className="w-1/3 hidden lg:block">
                <div className="relative aspect-[3/4] rounded-full overflow-hidden border border-gold/20 p-4">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-gold/10 rounded-full"
                  />
                  <img 
                    src={`https://images.unsplash.com/photo-1620171391512-259160533519?q=80&w=2000&auto=format&fit=crop`} 
                    alt="Ambience" 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex justify-center md:justify-start gap-4 mt-12">
            <button 
              onClick={prev}
              className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-14 h-14 border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Info */}
      <div className="mt-24 text-center">
        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setIndex(i)}
              className={cn(
                "h-1 transition-all duration-500",
                index === i ? "w-12 bg-gold" : "w-4 bg-gold/20"
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
