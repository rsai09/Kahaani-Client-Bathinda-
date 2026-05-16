import { motion } from 'motion/react';
import { Award, Users, UtensilsCrossed, Calendar } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Calendar, value: "15+", label: "Years of Excellence" },
    { icon: Users, value: "50k+", label: "Happy Customers" },
    { icon: UtensilsCrossed, value: "200+", label: "Signature Dishes" },
    { icon: Award, value: "12", label: "Culinary Awards" },
  ];

  return (
    <div className="pt-32 pb-24">
      {/* Story Section */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <img 
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?q=80&w=2070&auto=format&fit=crop" 
                alt="Chef at work"
                className="w-full rounded-sm shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/30 -z-10 animate-pulse-slow" />
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div className="flex items-center gap-4">
              <div className="h-px w-8 bg-gold opacity-40"></div>
              <span className="text-gold uppercase tracking-[0.5em] text-sm block">Our Journey</span>
            </div>
            <h1 className="text-5xl md:text-7xl gold-gradient font-bold">A Legacy Written <br />in Spices</h1>
            <p className="text-ivory/70 leading-relaxed font-sans text-lg">
              Kahaani was born out of a desire to share the stories of India's culinary history. 
              Founded in Bathinda, we've spent over a decade perfecting the art of fine dining, 
              bringing the essence of the royal kitchens of India to the modern palate.
            </p>
            <p className="text-ivory/60 leading-relaxed font-sans">
              Every dish we serve is a chapter of a larger narrative—one that celebrates local produce, 
              ancient techniques, and the complex alchemy of spices. Our name, 'Kahaani' (Story), 
              reflects our commitment to being more than just a restaurant; we are storytellers of taste.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black/40 py-32 mb-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center py-10 glass border-ornament"
              >
                <div className="w-16 h-16 border border-gold/30 rounded-full flex items-center justify-center mx-auto text-gold mb-6 group hover:bg-gold hover:text-charcoal transition-all duration-500">
                  <stat.icon size={28} />
                </div>
                <div className="font-display text-4xl text-gold mb-2">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-ivory/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-gold uppercase tracking-[0.5em] text-sm block mb-4">Milestones</span>
          <h2 className="text-4xl md:text-6xl">Our Timeline</h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-20 relative">
          <div className="absolute left-1/2 top-0 w-[1px] h-full bg-gold/20 -translate-x-1/2 hidden md:block" />
          
          {[
            { year: "2010", title: "The First Spice", desc: "Kahaani opens its doors in Bathinda with just 10 signature dishes.", left: true },
            { year: "2015", title: "Expansion & Design", desc: "Renovated to include royal Mughal influences and expanded menu.", left: false },
            { year: "2020", title: "Culinary Star", desc: "Awarded 'Best Fine Dining' in the region for three consecutive years.", left: true },
            { year: "2025", title: "Global Fusion", desc: "Introducing our Multi-Cuisine specials while staying true to our roots.", left: false },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.left ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative flex items-center ${item.left ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="hidden md:block w-1/2" />
              <div className="absolute left-1/2 w-4 h-4 bg-gold rounded-full -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(201,168,76,0.6)] hidden md:block" />
              <div className={`w-full md:w-1/2 ${item.left ? 'md:pr-20' : 'md:pl-20'}`}>
                <div className="glass p-8 space-y-4 hover:border-gold/50 transition-colors">
                  <span className="font-display text-3xl text-gold">{item.year}</span>
                  <h3 className="text-xl tracking-widest uppercase">{item.title}</h3>
                  <p className="text-ivory/60 font-sans leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
