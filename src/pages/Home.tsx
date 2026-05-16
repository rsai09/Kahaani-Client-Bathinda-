import { motion, useScroll, useSpring } from 'motion/react';
import { ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpiceParticles from '../components/SpiceParticles';

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <SpiceParticles />
        
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-[-1]">
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/60 to-charcoal z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2070&auto=format&fit=crop"
            className="w-full h-full object-cover grayscale-[0.3] brightness-[0.4]"
            alt="Fine Dining"
          />
        </div>

        {/* Side Accents from Theme */}
        <div className="absolute left-10 h-full hidden lg:flex flex-col justify-center items-center opacity-30">
          <div className="w-px h-32 bg-gold"></div>
          <span className="vertical-text py-8 text-[10px] uppercase tracking-[0.5em] font-light">ESTABLISHED 2025</span>
          <div className="w-px h-32 bg-gold"></div>
        </div>

        <div className="absolute right-10 h-full hidden lg:flex flex-col justify-center items-center opacity-30">
          <div className="w-px h-32 bg-gold"></div>
          <span className="vertical-text py-8 text-[10px] uppercase tracking-[0.5em] font-light text-center">BATHINDA, PUNJAB</span>
          <div className="w-px h-32 bg-gold"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-20 relative z-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-6 flex justify-center items-center gap-4 opacity-80">
              <div className="h-px w-12 bg-gold opacity-40"></div>
              <span className="font-display italic text-xl text-gold-light">Kahaani</span>
              <div className="h-px w-12 bg-gold opacity-40"></div>
            </div>
            
            <h1 className="font-display text-7xl md:text-[10rem] leading-[0.8] font-bold gold-gradient tracking-tighter mb-8">
              The Fine Art<br/>of Dining
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="font-sans text-lg md:text-xl tracking-[0.2em] font-light text-ivory opacity-80 mb-12 uppercase"
            >
              EVERY DISH TELLS A STORY
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col md:flex-row items-center justify-center gap-6"
            >
              <Link to="/menu">
                <button className="px-10 py-4 bg-gold text-charcoal font-bold uppercase tracking-widest text-xs hover:bg-ivory transition-all duration-300">
                  Explore Menu
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-10 py-4 border border-ivory text-ivory font-bold uppercase tracking-widest text-xs hover:bg-ivory hover:text-charcoal transition-all duration-300">
                  Book a Table
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-ivory">Scroll to begin</span>
          <div className="w-[1px] h-10 bg-white" />
        </motion.div>
      </section>

      {/* Featured Sections */}
      <section className="py-24 px-6 bg-charcoal relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <span className="text-gold uppercase tracking-[0.3em] text-sm">Legacy of Taste</span>
              <h2 className="text-4xl md:text-6xl">Royal Spices, <br />Modern Craft</h2>
              <p className="text-ivory/60 leading-relaxed font-sans text-lg">
                Step into a world where tradition meets innovation. Our chefs curate each dish with passion, 
                blending age-old family recipes with contemporary culinary techniques to bring you the 
                finest Indian multi-cuisine experience in Bathinda.
              </p>
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-gold font-display text-xl group"
              >
                Learn Our Story <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              <div className="absolute -inset-4 border border-gold/20 rotate-3 p-4">
                <div className="w-full h-full border border-gold/20 -rotate-6" />
              </div>
              <img 
                src="https://images.unsplash.com/photo-1585937421612-7110a3bb17f1?q=80&w=2072&auto=format&fit=crop"
                className="w-full h-full object-cover rounded-sm relative z-10"
                alt="Chef's Special"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-24 px-6 bg-black relative">
        <div className="container mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl mb-4">The Kahaani Experience</h2>
          <div className="w-24 h-1 bg-gold mx-auto" />
        </div>
        
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Fine Dining",
              desc: "Impeccable service in a regal setting designed for comfort and luxury.",
              img: "https://images.unsplash.com/photo-1550966841-3ee7adac1661?q=80&w=2070&auto=format&fit=crop"
            },
            {
              title: "Live Kitchen",
              desc: "Watch as our master chefs weave culinary magic with fresh ingredients.",
              img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop"
            },
            {
              title: "Exotic Spices",
              desc: "Sourced directly from the heart of India to ensure authentic flavors.",
              img: "https://images.unsplash.com/photo-1596040033229-a9821ebd05ed?q=80&w=2070&auto=format&fit=crop"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative h-80 mb-6 overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-charcoal/40 group-hover:bg-charcoal/20 transition-colors" />
              </div>
              <h3 className="text-2xl mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
              <p className="text-ivory/50 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
