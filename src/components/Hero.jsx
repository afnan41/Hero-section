import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const dummyData = [
  {
    headline: "Build Stunning Websites Effortlessly",
    subheadline: "Empower your creativity with smart tools.",
    image: "/assets/hero1.svg",
    background: "from-indigo-500 via-purple-500 to-pink-500",
  },
  {
    headline: "Design Like a Pro",
    subheadline: "Turn ideas into reality, faster than ever.",
    image: "/assets/hero2.svg",
    background: "from-green-400 via-blue-500 to-purple-600",
  },
  {
    headline: "Next-Gen Web Experiences",
    subheadline: "Crafting innovation with every click.",
    image: "/assets/hero3.svg",
    background: "from-yellow-400 via-red-500 to-pink-500",
  },
  {
    headline: "Level Up Your Online Presence",
    subheadline: "Powerful designs for powerful brands.",
    image: "/assets/hero4.svg",
    background: "from-teal-400 via-cyan-500 to-blue-500",
  },
  {
    headline: "Experience Innovation Like Never Before",
    subheadline: "Blending creativity and technology perfectly.",
    image: "/assets/hero5.svg",
    background: "from-red-400 via-pink-500 to-purple-500",
  },
];

export default function Hero() {
  const [content, setContent] = useState(dummyData[0]);

  const handleRegenerate = () => {
    const randomIndex = Math.floor(Math.random() * dummyData.length);
    setContent(dummyData[randomIndex]);
  };

  const handleTextChange = (e, field) => {
    setContent((prev) => ({
      ...prev,
      [field]: e.target.innerText,
    }));
  };

  return (
<section className={`relative min-h-screen bg-gradient-to-r ${content.background} transition-all duration-700 px-6 md:px-20 py-12`}>
  
  {/* Full Centered Flex Container */}
  <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left w-full max-w-7xl mx-auto min-h-[calc(100vh-150px)]">
    
    {/* Text Section */}
    <div className="flex-1 flex flex-col items-center md:items-start justify-center gap-6">
      <AnimatePresence mode="wait">
        <motion.h1
          key={content.headline}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleTextChange(e, "headline")}
          className="text-3xl md:text-6xl font-bold text-white leading-tight md:leading-snug max-w-xl"
        >
          {content.headline}
        </motion.h1>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.p
          key={content.subheadline}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          contentEditable
          suppressContentEditableWarning
          onBlur={(e) => handleTextChange(e, "subheadline")}
          className="text-md md:text-2xl text-white opacity-90 max-w-md"
        >
          {content.subheadline}
        </motion.p>
      </AnimatePresence>

      {/* Get Started Button */}
      <div className="mt-6">
        <button className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition">
          Get Started
        </button>
      </div>
    </div>

    {/* Image Section */}
    <div className="flex-1 w-full md:w-1/2 flex justify-center items-center">
    <AnimatePresence mode="wait">
      <motion.img
        key={content.image}
        src={content.image}
        alt="Hero"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
        className="w-64 md:w-96 rounded-xl shadow-2xl object-contain"
      />
    </AnimatePresence>
  </div>


  </div>

  {/* Regenerate Button */}
  <button
    onClick={handleRegenerate}
    className="fixed bottom-6 left-1/2 transform -translate-x-1/2 
                md:left-auto md:right-8 md:translate-x-0 md:absolute md:bottom-8 
                flex items-center gap-2 px-6 py-3 text-sm md:text-base 
                bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-md"
  >
    <span className="text-lg">✨</span>
    Regenerate with AI
  </button>

</section>

  );
}
