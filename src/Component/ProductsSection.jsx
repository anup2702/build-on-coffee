import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/products";
import { useTheme } from "next-themes";
const { theme } = useTheme();
const isDarkMode = theme === "dark";


const ProductsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container?.children?.length) {
      const cardWidth = container.children[0].offsetWidth + 32; // width + gap
      container.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const handleProductClick = (product) => {
    if (product.external) {
      window.open(product.route, "_blank");
    } else {
      navigate(product.route);
    }
  };

  return (
   <section className="py-16 bg-[#f9fafb] dark:bg-[#0f172a]" ref={ref}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <motion.div
      className="text-center mb-12"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#111] dark:text-white mb-4">
        Explore Our Products
      </h2>
      <p className="text-lg text-[#333] dark:text-gray-300 max-w-2xl mx-auto">
        Discover our suite of tools built to accelerate your dev journey.
      </p>
    </motion.div>

    {/* Cards */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="overflow-x-auto pb-4 scroll-smooth"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div
        ref={scrollRef}
        className="flex gap-6 px-2"
      >
        {products.map((product, index) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.id}
              className={`w-[300px] flex-shrink-0 group relative overflow-hidden rounded-xl p-5 cursor-pointer border ${
                isDarkMode
                  ? "bg-[#1e293b] border-[#334155]"
                  : "bg-white border-[#e5e7eb]"
              } hover:shadow-md transition-all duration-200`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.97 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product)}
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-lg bg-[#1d4ed8] text-white">
                  <Icon className="w-10 h-10" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-[#111] dark:text-white mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#333] dark:text-gray-300 mb-4 leading-relaxed">
                  {product.description}
                </p>
                <motion.button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-medium text-white bg-[#1d4ed8] hover:bg-[#1e40af] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Explore</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Hover Glow */}
              <motion.div
                className="absolute inset-0 rounded-xl bg-[#1d4ed8] opacity-10"
                animate={{
                  opacity: hoveredProduct === product.id ? 0.15 : 0,
                  scale: hoveredProduct === product.id ? 1.02 : 1,
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>

    {/* Footer Text */}
    <motion.div
      className="text-center mt-14"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      <p className="text-base text-[#333] dark:text-gray-300">
        Ready to get started? Choose the product that fits your needs.
      </p>
    </motion.div>
  </div>
</section>

  );
};

export default ProductsSection;
