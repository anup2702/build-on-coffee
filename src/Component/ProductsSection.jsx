import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Wrench, User, ExternalLink, Award } from 'lucide-react';

const ProductsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: 'Courses',
      description: 'Curated CS courses with video tutorials, docs, and references.',
      icon: BookOpen,
      color: 'from-coffee-400 to-mocha-500',
      bgColor: 'bg-coffee-50 dark:bg-coffee-900/20',
      borderColor: 'border-coffee-200 dark:border-coffee-800',
      hoverColor: 'group-hover:text-coffee-600 dark:group-hover:text-coffee-400',
      route: '/courses'
    },
    {
      id: 2,
      name: 'Tools',
      description: 'Discover and use the best developer tools for productivity.',
      icon: Wrench,
      color: 'from-latte-400 to-coffee-500',
      bgColor: 'bg-latte-50 dark:bg-latte-900/20',
      borderColor: 'border-latte-200 dark:border-latte-800',
      hoverColor: 'group-hover:text-latte-600 dark:group-hover:text-latte-400',
      route: '/tools'
    },
    {
      id: 3,
      name: 'SnapFolio',
      description: 'Generate your developer portfolio instantly. Try SnapFolio now!',
      icon: User,
      color: 'from-mocha-400 to-coffee-500',
      bgColor: 'bg-mocha-50 dark:bg-mocha-900/20',
      borderColor: 'border-mocha-200 dark:border-mocha-800',
      hoverColor: 'group-hover:text-mocha-600 dark:group-hover:text-mocha-400',
      route: 'https://snapfolio.vercel.app',
      external: true
    },
    {
      id: 4,
      name: 'Certificates',
      description: 'Browse top courses from leading platforms and earn certificates to showcase your skills.',
      icon: Award,
      color: 'from-coffee-400 to-latte-500',
      bgColor: 'bg-coffee-50 dark:bg-coffee-900/20',
      borderColor: 'border-coffee-200 dark:border-coffee-800',
      hoverColor: 'group-hover:text-coffee-600 dark:group-hover:text-coffee-400',
      route: '/free-certificates'
    }

  ];

  const handleProductClick = (product) => {
    if (product.external) {
      window.open(product.route, '_blank');
    } else {
      navigate(product.route);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Discover our comprehensive suite of products designed to accelerate your development journey and enhance your skills.
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                className={`group relative overflow-hidden rounded-2xl p-8 cursor-pointer border-2 ${product.borderColor} ${product.bgColor} hover:shadow-2xl transition-all duration-200`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.03,
                  transition: { duration: 0.2, ease: "easeOut" }
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
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Call to Action Button */}
                  <motion.button
                    className={`inline-flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 bg-gradient-to-r ${product.color} text-white hover:shadow-lg`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Explore Now</span>
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>

                {/* Animated border glow */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${product.color} opacity-20`}
                  initial={false}
                  animate={{
                    opacity: hoveredProduct === product.id ? 0.3 : 0,
                    scale: hoveredProduct === product.id ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                  <div className={`w-full h-full bg-gradient-to-br ${product.color} rounded-full transform translate-x-8 -translate-y-8`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Info Section */}
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
