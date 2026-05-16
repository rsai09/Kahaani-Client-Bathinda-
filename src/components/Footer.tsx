import { Link } from 'react-router-dom';
import { Instagram, Facebook, Youtube, Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 overflow-hidden relative z-10">
      {/* Decorative Top Border */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="container mx-auto pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          {/* Brand Section */}
          <div className="space-y-8">
            <Link to="/" className="flex flex-col items-start gap-1 group">
              <span className="font-display text-4xl font-bold tracking-tighter text-gold group-hover:text-white transition-colors">
                KAHAANI
              </span>
              <span className="text-[10px] tracking-[0.4em] uppercase opacity-60">Indian & Multi Cuisine</span>
            </Link>
            <p className="text-ivory/50 leading-relaxed font-sans italic text-sm">
              "A culinary narrative that celebrates heritage, innovation, and the complex alchemy of spices."
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 border border-gold/20 rounded-full flex items-center justify-center text-gold hover:bg-gold hover:text-charcoal transition-all duration-500"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:pl-12">
            <h4 className="font-display text-xs text-gold mb-10 tracking-[0.4em] uppercase opacity-80">Navigate</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Menu', 'Gallery', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-ivory/60 hover:text-gold transition-colors text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 group"
                  >
                    <span className="w-0 h-px bg-gold group-hover:w-4 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-xs text-gold mb-10 tracking-[0.4em] uppercase opacity-80">Inquiries</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold shrink-0 opacity-60" size={18} />
                <span className="text-ivory/60 text-xs tracking-wider leading-relaxed">
                  Bathinda, Punjab, India
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-gold shrink-0 opacity-60" size={18} />
                <a href="tel:+919478669999" className="text-ivory/60 hover:text-gold text-xs tracking-[0.2em]">
                  +91-9478669999
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-gold shrink-0 opacity-60" size={18} />
                <a href="mailto:info@kahaani.com" className="text-ivory/60 hover:text-gold text-xs tracking-[0.2em]">
                  info@kahaani.com
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-xs text-gold mb-10 tracking-[0.4em] uppercase opacity-80">Experience</h4>
            <div className="border border-gold/10 p-8 glass space-y-4">
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                <span className="text-ivory/40">Mon - Fri</span>
                <span className="text-gold">11:00 - 23:00</span>
              </div>
              <div className="h-px bg-gold/10 w-full" />
              <div className="flex justify-between items-center text-[10px] uppercase tracking-widest">
                <span className="text-ivory/40">Sat - Sun</span>
                <span className="text-gold">10:00 - 00:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[9px] tracking-[0.2em] font-light text-ivory/40 uppercase sans">
          <div>&copy; 2025 Kahaani Restaurant. All Rights Reserved.</div>
          <div className="hidden lg:flex gap-8 italic normal-case tracking-widest opacity-60">
            <span>Authentic Flavors</span>
            <span>Royal Ambiance</span>
            <span>Modern Craft</span>
          </div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
