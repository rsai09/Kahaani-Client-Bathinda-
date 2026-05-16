import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] bg-charcoal flex flex-col items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <div className="relative mb-8">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-2 border-gold/20 border-t-gold rounded-full"
              />
              <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-gold tracking-widest uppercase">
                K
              </div>
            </div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl md:text-6xl font-display text-gold tracking-[0.2em] mb-4"
            >
              KAHAANI
            </motion.h1>
            
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
              className="h-[1px] bg-gold/50 max-w-[200px]"
            />
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="mt-4 text-ivory/60 font-sans tracking-[0.3em] text-sm uppercase"
            >
              Every Dish Tells a Story
            </motion.p>
          </motion.div>
          
          <div className="absolute bottom-12 left-12">
            <div className="text-gold/30 text-8xl font-display italic opacity-20 transform -rotate-12 select-none">
              Luxury
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
