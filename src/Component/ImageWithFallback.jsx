import { useState, useEffect, useCallback } from "react";
import { useTheme } from "./context/ThemeContext";

const ImageWithFallback = ({ 
  src, 
  alt, 
  fallbackSrc, 
  className = "", 
  onError,
  ariaLabel,
  role = "img"
}) => {
  const { isDark } = useTheme();
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(src);

  // Theme-aware default fallback
  const defaultFallback = isDark ? "/default-avatar-dark.svg" : "/default-avatar.svg";
  const actualFallbackSrc = fallbackSrc || defaultFallback;

  // Reset error state when src changes
  useEffect(() => {
    if (src !== currentSrc) {
      setHasError(false);
      setIsLoading(true);
      setCurrentSrc(src);
      
      // Basic validation for image URL
      if (src && typeof src === 'string') {
        // Check if it's a valid URL format or local path
        const isValidUrl = src.startsWith('http') || src.startsWith('/') || src.startsWith('./');
        if (!isValidUrl) {
          console.warn(`Invalid image URL format: ${src}. Expected absolute URL or path starting with '/'`);
        }
      }
    }
  }, [src, currentSrc]);

  const handleImageError = useCallback((error) => {
    // Only log if we're not already showing fallback
    if (!hasError) {
      console.warn(`Failed to load image: ${src}. Switching to fallback: ${actualFallbackSrc}`, {
        originalSrc: src,
        fallbackSrc: actualFallbackSrc,
        theme: isDark ? 'dark' : 'light',
        error: error.type,
        timestamp: new Date().toISOString()
      });
    }
    
    setHasError(true);
    setIsLoading(false);
    
    // Call optional error callback
    if (onError) {
      onError(error);
    }
  }, [src, actualFallbackSrc, hasError, onError, isDark]);

  const handleImageLoad = useCallback(() => {
    setIsLoading(false);
  }, []);

  // Determine which image source to use
  const imageSrc = hasError ? actualFallbackSrc : src;

  // Enhanced alt text for fallback images
  const enhancedAlt = hasError 
    ? `${alt} (default avatar)` 
    : alt;

  return (
    <img
      src={imageSrc}
      alt={enhancedAlt}
      className={className}
      onError={handleImageError}
      onLoad={handleImageLoad}
      loading="lazy"
      role={role}
      aria-label={ariaLabel || enhancedAlt}
      tabIndex={0}
      style={{
        transition: 'opacity 0.2s ease-in-out',
        opacity: isLoading ? 0.7 : 1,
        outline: 'none'
      }}
      onKeyDown={(e) => {
        // Allow keyboard navigation for accessibility
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          // Focus behavior for screen readers
        }
      }}
    />
  );
};

export default ImageWithFallback;