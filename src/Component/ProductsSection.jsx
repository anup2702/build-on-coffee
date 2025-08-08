import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "../../data/products";

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
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Explore Our Products
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive suite of products designed to accelerate
            your development journey and enhance your skills.
          </p>
        </motion.div>

        {/* Arrows on Both Ends + Scrollable Cards */}
        <div className="relative mt-10">
          {/* Left Arrow (start) */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow (end) */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="overflow-hidden"
          >
            <div
              className="flex items-center gap-4"
              style={{ position: "relative" }}
            >
              {/* Left Arrow (after first card) */}
              <button
                onClick={() => scroll("left")}
                className="p-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg sticky left-0 z-10"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Scrollable product cards */}
              <div
                ref={scrollRef}
                className="flex gap-8 py-4 scroll-smooth"
                style={{
                  overflowX: "auto",
                  scrollbarWidth: "none",
                  msOverflowStyle: "none",
                }}
              >
                {products.map((product, index) => {
                  const Icon = product.icon;
                  return (
                    <motion.div
                      key={product.id}
                      className={`w-[340px] flex-shrink-0 group relative overflow-hidden rounded-2xl p-8 cursor-pointer border-2 ${product.borderColor} ${product.bgColor} hover:shadow-2xl transition-all duration-200`}
                      initial={{ opacity: 0, y: 30 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      whileHover={{
                        y: -8,
                        scale: 1.03,
                        transition: { duration: 0.2, ease: "easeOut" },
                      }}
                      whileTap={{ scale: 0.98 }}
                      onHoverStart={() => setHoveredProduct(product.id)}
                      onHoverEnd={() => setHoveredProduct(null)}
                      onClick={() => handleProductClick(product)}
                    >
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${product.color}`}>
                          <Icon className="w-12 h-12 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className={`text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200 ${product.hoverColor}`}>
                          {product.name}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed break-words">
                          {product.description}
                        </p>
                        <motion.button
                          className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r ${product.color} text-white hover:shadow-lg`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span>Explore Now</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>

                      {/* Glow */}
                      <motion.div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.color} opacity-20`}
                        initial={false}
                        animate={{
                          opacity: hoveredProduct === product.id ? 0.3 : 0,
                          scale: hoveredProduct === product.id ? 1.02 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      />

                      {/* Pattern */}
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <div className={`w-full h-full bg-gradient-to-br ${product.color} rounded-full transform translate-x-8 -translate-y-8`} />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right Arrow (after last card) */}
              <button
                onClick={() => scroll("right")}
                className="p-2 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full shadow-lg sticky right-0 z-10"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Ready to get started? Choose the product that fits your needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
