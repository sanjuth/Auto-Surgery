/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Home from "./Home";
import UploadImage from "./UploadImage";

const ScrollSections = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sectionsRef = React.useRef([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentSectionIndex(
            sectionsRef.current.findIndex((section) => section.id === sectionId)
          );
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);
    sectionsRef.current.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (event) => {
    event.preventDefault(); // Prevent default scroll behavior
    if (
      event.deltaY > 0 &&
      currentSectionIndex < sectionsRef.current.length - 1
    ) {
      setCurrentSectionIndex((prevIndex) => prevIndex + 1);
    } else if (event.deltaY < 0 && currentSectionIndex > 0) {
      setCurrentSectionIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSectionIndex]);

  const scrollToCurrentSection = () => {
    const currentSection = sectionsRef.current[currentSectionIndex];
    if (currentSection) {
      const topOffset = currentSection.offsetTop;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToCurrentSection();
  }, [currentSectionIndex]);

  return (
    <div className="h-full w-full">
      <div
        id="div1"
        ref={(el) => (sectionsRef.current[0] = el)}
        className="section h-full w-full"
      >
        {/* Content for Div 1 */}
        <Home />
      </div>

      <div
        id="div2"
        ref={(el) => (sectionsRef.current[1] = el)}
        className="section h-full w-full"
      >
        {/* Content for Div 2 */}
        <UploadImage />
      </div>
      {/* Add more divs and use the ref for each section */}
    </div>
  );
};

export default ScrollSections;
