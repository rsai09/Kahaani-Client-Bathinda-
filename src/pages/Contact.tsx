import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail, Clock, Calendar, Users } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <div className="pt-32 pb-24">
      {/* Header */}
      <div className="container mx-auto px-6 text-center mb-16">
        <div className="flex justify-center items-center gap-4 mb-4">
          <div className="h-px w-8 bg-gold opacity-40"></div>
          <span className="text-gold uppercase tracking-[0.5em] text-sm block italic">Inquiries</span>
          <div className="h-px w-8 bg-gold opacity-40"></div>
        </div>
        <h1 className="text-5xl md:text-7xl gold-gradient font-bold">Connect With Us</h1>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass p-10 md:p-16 border-ornament"
          >
            <div className="space-y-4 mb-8">
              <h2 className="text-3xl font-display text-gold">Table Reservation</h2>
              <p className="text-ivory/50 text-sm italic">Reserve your chapter in our story tonight.</p>
            </div>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup 
                  label="Name" 
                  type="text" 
                  placeholder="Your Full Name" 
                  isFocused={focused === 'name'}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
                <InputGroup 
                  label="Email" 
                  type="email" 
                  placeholder="your@email.com" 
                  isFocused={focused === 'email'}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup 
                  label="Phone" 
                  type="tel" 
                  placeholder="+91 91234 56789" 
                  isFocused={focused === 'phone'}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                />
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60 flex items-center gap-2">
                    <Users size={12} /> Guests
                  </label>
                  <select className="w-full bg-charcoal border-b border-gold/20 py-3 text-ivory outline-none focus:border-gold transition-colors appearance-none cursor-pointer">
                    {[1, 2, 3, 4, 5, 6, 7, '8+'].map(n => (
                      <option key={n} value={n}>{n} Persons</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup 
                  label="Date" 
                  type="date" 
                  isFocused={focused === 'date'}
                  onFocus={() => setFocused('date')}
                  onBlur={() => setFocused(null)}
                />
                <InputGroup 
                  label="Time" 
                  type="time" 
                  isFocused={focused === 'time'}
                  onFocus={() => setFocused('time')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60">Special Request</label>
                <textarea 
                  className="w-full bg-charcoal border border-gold/20 p-4 text-ivory outline-none focus:border-gold transition-colors min-h-[120px] resize-none"
                  placeholder="Any dietary requirements or special occasions?"
                />
              </div>

              <button className="w-full py-5 bg-gold text-charcoal font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-3 group">
                Request Table <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          {/* Contact Details & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: MapPin, title: "Location", lines: ["Bathinda, Punjab", "India"] },
                { icon: Phone, title: "Phone", lines: ["+91-9478669999", "+91-9876543210"] },
                { icon: Mail, title: "Email", lines: ["reserve@kahaani.com", "info@kahaani.com"] },
                { icon: Clock, title: "Hours", lines: ["Daily: 11 AM - 11 PM", "Fri: 11 AM - 12 AM"] }
              ].map((item, i) => (
                <div key={i} className="glass p-8 group hover:border-gold/40 transition-all">
                  <item.icon className="text-gold mb-6 group-hover:scale-110 transition-transform" size={24} />
                  <h4 className="text-gold uppercase tracking-widest text-xs mb-3">{item.title}</h4>
                  {item.lines.map((line, j) => (
                    <p key={j} className="text-ivory/60 text-sm font-sans">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-[400px] w-full rounded-sm overflow-hidden grayscale contrast-125 border border-gold/10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110196.2625275066!2d74.87786435345717!3d30.202377546682705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3917329d2319401b%3A0xc480521e1e0d3ca4!2sBathinda%2C%20Punjab!5e0!3m2!1sen!2sin!4v1715858000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 pointer-events-none border-[20px] border-charcoal/20" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, type, placeholder, isFocused, onFocus, onBlur }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-[0.3em] text-gold/60">{label}</label>
      <div className="relative">
        <input 
          type={type} 
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          className="w-full bg-transparent border-b border-gold/20 py-3 text-ivory outline-none focus:border-gold transition-colors font-sans"
        />
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-gold"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : 0 }}
        />
      </div>
    </div>
  );
}
