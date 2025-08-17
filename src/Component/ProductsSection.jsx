import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { ExternalLink, Lightbulb } from "lucide-react";
import { products } from "../../data/products";

const ProductsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  const handleProductClick = (product) => {
    if (product.external) {
      window.open(product.route, "_blank");
    } else {
      navigate(product.route);
    }
  };

  // Add the new "Project Ideas" card dynamically
  const updatedProducts = [
    ...products,
    {
      id: "project-ideas",
      name: "Project Ideas",
      description:
        "Browse curated project ideas for beginner, intermediate, and advanced developers.",
      icon: Lightbulb,
      route: "/project-idea",
      color: "bg-yellow-500",
      borderColor: "border-yellow-200",
      bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
      hoverColor: "group-hover:text-yellow-600",
      external: false,
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-8">
            Explore Our Products
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Discover our comprehensive suite of products designed to accelerate
            your development journey and enhance your skills.
          </p>
        </motion.div>

        {/* Product cards in grid - 3 cards per row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {updatedProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer border-2 ${product.borderColor} ${product.bgColor} hover:shadow-xl transition-all duration-300 card-hover bg-white dark:bg-slate-800`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onHoverStart={() => setHoveredProduct(product.id)}
                  onHoverEnd={() => setHoveredProduct(null)}
                  onClick={() => handleProductClick(product)}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-8">
                    <div
                      className={`p-6 rounded-2xl ${product.color} shadow-lg`}
                    >
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3
                      className={`text-2xl font-black text-gray-900 dark:text-white mb-6 transition-colors duration-300 ${product.hoverColor}`}
                    >
                      {product.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-lg">
                      {product.description}
                    </p>
                    <motion.button
                      className={`inline-flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold text-lg transition-all duration-300 ${product.color} text-white hover:shadow-lg shadow-md`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Explore Now</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Subtle hover effect */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl ${product.color} opacity-0`}
                    initial={false}
                    animate={{
                      opacity: hoveredProduct === product.id ? 0.05 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
