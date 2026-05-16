import { motion } from 'motion/react';

const galleryImages = [
  { url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop", title: "Royal Ambiance", size: "large" },
  { url: "https://images.unsplash.com/photo-1544124499-58912cbddaad?q=80&w=2000&auto=format&fit=crop", title: "Handcrafted Naan", size: "small" },
  { url: "https://images.unsplash.com/photo-1596797038530-2c39da01f6ea?q=80&w=2000&auto=format&fit=crop", title: "Spice Treasures", size: "small" },
  { url: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=2000&auto=format&fit=crop", title: "Signature Biryani", size: "medium" },
  { url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=2070&auto=format&fit=crop", title: "The Grand Hall", size: "medium" },
  { url: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2000&auto=format&fit=crop", title: "Tandoori Delights", size: "small" },
  { url: "https://images.unsplash.com/photo-1574484284002-952d92456975?q=80&w=2000&auto=format&fit=crop", title: "Mithai Platter", size: "large" },
  { url: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2000&auto=format&fit=crop", title: "Chef's Finishing Touch", size: "medium" },
];

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-gold uppercase tracking-[0.5em] text-sm block mb-4">Visual Feast</span>
        <h1 className="text-5xl md:text-7xl">Our Gallery</h1>
      </div>

      <div className="container mx-auto px-6">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden break-inside-avoid rounded-sm cursor-zoom-in"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-auto grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-12 h-[1px] bg-gold mb-4 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                <h3 className="text-xl text-white tracking-widest">{img.title}</h3>
                <span className="text-[10px] uppercase text-gold tracking-[0.4em] mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">Kahaani Exclusive</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Text */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
        <span className="text-[20rem] font-display text-gold italic -rotate-12">Crafted</span>
      </div>
    </div>
  );
}
