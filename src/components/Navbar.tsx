import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Menu', path: '/menu' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-[1000] transition-all duration-500",
        scrolled ? "glass h-20 shadow-xl" : "bg-transparent h-24 pt-4"
      )}
    >
      <div className="container mx-auto px-12 h-full flex items-center justify-between">
        {/* Desktop Left Menu */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-light">
          {navLinks.slice(0, 3).map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-ivory"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Central Logo */}
        <Link to="/" className="flex flex-col items-center group">
          <span className="font-display text-3xl font-bold tracking-tighter text-gold group-hover:text-white transition-colors">
            KAHAANI
          </span>
          <span className="text-[8px] tracking-[0.4em] uppercase opacity-60">Indian & Multi Cuisine</span>
        </Link>

        {/* Desktop Right Menu */}
        <div className="hidden md:flex items-center gap-10 text-[11px] uppercase tracking-[0.2em] font-light">
          {navLinks.slice(3).map((link) => (
            <Link 
              key={link.path}
              to={link.path}
              className={cn(
                "transition-colors hover:text-gold",
                location.pathname === link.path ? "text-gold" : "text-ivory"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-4 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Reservations
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[999] bg-charcoal flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <div className="mb-8 flex flex-col items-center">
              <span className="font-display text-4xl font-bold tracking-tighter text-gold">KAHAANI</span>
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">Indian & Multi Cuisine</span>
            </div>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={link.path}
                  className={cn(
                    "text-3xl font-display tracking-widest",
                    location.pathname === link.path ? "text-gold" : "text-ivory"
                  )}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <Link 
              to="/contact" 
              className="mt-8 px-10 py-3 border border-gold text-gold text-lg uppercase tracking-[0.2em] font-sans"
            >
              Reserve a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
