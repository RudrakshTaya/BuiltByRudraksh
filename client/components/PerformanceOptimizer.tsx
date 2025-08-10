import { useEffect } from "react";

export const PerformanceOptimizer = () => {
  useEffect(() => {
    // Optimize scrolling performance
    const optimizeScrolling = () => {
      let ticking = false;

      const handleScroll = () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            // Update scroll-based animations here if needed
            ticking = false;
          });
          ticking = true;
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    // Preload critical resources
    const preloadResources = () => {
      // Preload fonts
      const fontUrls = [
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      ];

      fontUrls.forEach((url) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = url;
        document.head.appendChild(link);
      });
    };

    // Optimize images loading
    const optimizeImages = () => {
      const images = document.querySelectorAll("img[data-src]");

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src!;
            img.classList.remove("lazy");
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach((img) => imageObserver.observe(img));
    };

    // Detect device capabilities
    const detectDeviceCapabilities = () => {
      const isMobile = window.innerWidth < 768;
      const isLowEnd = navigator.hardwareConcurrency < 4;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      // Add classes to body for conditional styling
      document.body.classList.toggle("is-mobile", isMobile);
      document.body.classList.toggle("is-low-end", isLowEnd);
      document.body.classList.toggle(
        "prefers-reduced-motion",
        prefersReducedMotion,
      );

      // Disable heavy animations on low-end devices
      if (isLowEnd || prefersReducedMotion) {
        document.body.classList.add("performance-mode");
      }
    };

    // Initialize optimizations
    const cleanup = optimizeScrolling();
    preloadResources();
    optimizeImages();
    detectDeviceCapabilities();

    // Cleanup
    return cleanup;
  }, []);

  return null;
};
