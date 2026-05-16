import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Leaf, UtensilsCrossed } from 'lucide-react';
import { cn } from '../lib/utils';

type Category = 'Starters' | 'Main Course' | 'Breads' | 'Desserts' | 'Beverages';

interface MenuItem {
  id: number;
  name: string;
  desc: string;
  price: string;
  category: Category;
  img: string;
  special?: boolean;
  veg?: boolean;
  ingredients: string[];
}

const menuData: MenuItem[] = [
  {
    id: 1,
    name: "Murgh Malai Tikka",
    desc: "Boneless chicken marinated in cream, cheese, and mild spices, grilled to perfection.",
    price: "₹450",
    category: "Starters",
    img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2000&auto=format&fit=crop",
    special: true,
    ingredients: ["Chicken", "Cream", "Cheese", "Nutmeg", "Green Chili"]
  },
  {
    id: 2,
    name: "Paneer Lababdar",
    desc: "Cottage cheese cubes cooked in a rich, creamy tomato and onion gravy.",
    price: "₹380",
    category: "Main Course",
    img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=2000&auto=format&fit=crop",
    veg: true,
    ingredients: ["Paneer", "Tomato", "Melon Seeds", "Cream", "Butter"]
  },
  {
    id: 3,
    name: "Dal Kahaani",
    desc: "Our signature black lentils simmered overnight with butter and cream.",
    price: "₹320",
    category: "Main Course",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop",
    special: true,
    veg: true,
    ingredients: ["Black Lentils", "White Butter", "Cream", "Smoked Paprika"]
  },
  {
    id: 4,
    name: "Butter Garlic Naan",
    desc: "Tandoor baked flatbread with a generous brushing of butter and garlic.",
    price: "₹80",
    category: "Breads",
    img: "https://images.unsplash.com/photo-1601050690597-df056fb04791?q=80&w=2000&auto=format&fit=crop",
    veg: true,
    ingredients: ["Flour", "Garlic", "Butter", "Yeast"]
  },
  {
    id: 5,
    name: "Shahi Tukda",
    desc: "Deep fried bread soaked in saffron milk and topped with nuts.",
    price: "₹220",
    category: "Desserts",
    img: "https://images.unsplash.com/photo-1579954115545-a95591f28bee?q=80&w=2000&auto=format&fit=crop",
    veg: true,
    ingredients: ["Bread", "Mawa", "Saffron", "Pistachio", "Silver Leaf"]
  },
  {
    id: 6,
    name: "Galouti Kebab",
    desc: "Minced lamb melded with exotic spices that melts in your mouth.",
    price: "₹520",
    category: "Starters",
    img: "https://images.unsplash.com/photo-1626500155537-8321447db05c?q=80&w=2000&auto=format&fit=crop",
    special: true,
    ingredients: ["Lamb", "Raw Papaya", "Stone Flower", "Cardamom"]
  }
];

function MenuCard({ item }: { item: MenuItem }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      layout
      className="relative h-[450px] [perspective:1000px] group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div 
        className="w-full h-full relative [transition:transform_0.8s] [transform-style:preserve-3d]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] glass rounded-sm overflow-hidden flex flex-col">
          <div className="relative h-64 overflow-hidden">
            <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-60" />
            
            {item.special && (
              <div className="absolute top-4 left-4 bg-gold text-charcoal px-3 py-1 text-[10px] uppercase font-bold tracking-widest flex items-center gap-1 animate-pulse">
                <Star size={10} fill="currentColor" /> Chef's Special
              </div>
            )}
            
            <div className="absolute top-4 right-4 flex items-center gap-2">
              {item.veg ? <Leaf size={16} className="text-green-500" /> : <div className="w-4 h-4 border border-red-500 flex items-center justify-center"><div className="w-2 h-2 rounded-full bg-red-500" /></div>}
            </div>
            
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <h3 className="text-2xl font-display text-white">{item.name}</h3>
              <span className="text-xl font-display text-gold">{item.price}</span>
            </div>
          </div>
          
          <div className="p-6 flex-grow flex flex-col justify-between">
            <p className="text-ivory/60 text-sm leading-relaxed italic">{item.desc}</p>
            <div className="flex items-center gap-2 text-gold/40 text-[10px] uppercase tracking-[0.2em] mt-4">
              <span>View Ingredients</span>
              <div className="h-[1px] flex-grow bg-gold/20" />
            </div>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] glass rounded-sm p-8 flex flex-col justify-center items-center text-center space-y-6">
          <div className="w-16 h-16 border border-gold flex items-center justify-center text-gold mb-2">
            <UtensilsCrossed size={32} />
          </div>
          <h4 className="text-xl text-gold uppercase tracking-[0.2em]">Ingredients</h4>
          <ul className="space-y-2">
            {item.ingredients.map((ing, i) => (
              <li key={i} className="text-ivory/80 font-sans tracking-widest text-sm">{ing}</li>
            ))}
          </ul>
          <div className="pt-6 border-t border-gold/20 w-full">
            <p className="text-[10px] uppercase tracking-widest text-gold/60">Authentically Prepared</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Menu() {
  const [activeTab, setActiveTab] = useState<Category>('Starters');
  const categories: Category[] = ['Starters', 'Main Course', 'Breads', 'Desserts', 'Beverages'];

  const filteredMenu = menuData.filter(item => item.category === activeTab);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-gold uppercase tracking-[0.5em] text-sm block mb-4">Culinary Selection</span>
        <h1 className="text-5xl md:text-7xl mb-12">The Menu</h1>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gold/20 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={cn(
                "relative text-sm md:text-base uppercase tracking-[0.2em] transition-all duration-300 pb-2",
                activeTab === cat ? "text-gold" : "text-ivory/50 hover:text-ivory"
              )}
            >
              {cat}
              {activeTab === cat && (
                <motion.div 
                  layoutId="menu-tab"
                  className="absolute bottom-0 left-0 w-full h-1 bg-gold"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredMenu.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                layout
              >
                <MenuCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredMenu.length === 0 && (
          <div className="text-center py-20 text-ivory/40 italic">
            Expanding our menu... more delights coming soon.
          </div>
        )}
      </div>

      {/* Floating Spice Info */}
      <div className="fixed bottom-24 -left-20 opacity-5 -rotate-90 pointer-events-none select-none">
        <span className="text-9xl font-display text-gold italic">Aromatic</span>
      </div>
    </div>
  );
}
