import { motion } from 'motion/react';
import { MessageCircle, Phone } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-[1000] flex flex-col gap-4">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919478669999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        whileHover={{ scale: 1.1 }}
        className="group relative w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl overflow-hidden"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-white/20"
        />
        <MessageCircle fill="currentColor" size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-[#25D366] text-white text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          WhatsApp Us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919478669999"
        initial={{ opacity: 0, scale: 0, x: 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="group relative w-14 h-14 bg-gold text-charcoal rounded-full flex items-center justify-center shadow-2xl"
      >
        <Phone size={28} />
        
        {/* Tooltip */}
        <span className="absolute right-full mr-4 px-3 py-1 bg-gold text-charcoal text-[10px] uppercase tracking-widest rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
          Call Now
        </span>
      </motion.a>
    </div>
  );
}
