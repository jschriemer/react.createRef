import { useState, useEffect } from "react";

export const useIsMobile = (maxWidth = 680) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= maxWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isMobile;
};

export const useIsTablet = (maxWidth = 1024) => {
  const [isTablet, setIsTablet] = useState(window.innerWidth <= maxWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth <= maxWidth && window.innerWidth > 680);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return isTablet;
};
