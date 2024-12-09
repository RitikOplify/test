"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const LandingPage = () => {
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const contentData = [
    {
      heading: 'Innovative Brazing Solutions',
      image: "/HomePageBanner/Brazingsolutionsliderimage.jpg",
      subheading: "Precision and Reliability",
      desc: "Safe Invotec: Delivering Advanced Brazing Technologies for Unmatched Performance and Durability",
    }
    , {
      heading: 'Efficient and Reliable',
      image: "/HomePageBanner/gassaversliderimage.png",
      subheading: "Gas Savers",
      desc: "Reduce gas usage and maximize efficiency with our trusted solutions",
    },
    {
      heading: 'Precise and Durable',
      image: "/HomePageBanner/solderingsolutionsliderimage.png",
      subheading: "Soldering Solutions",
      desc: "Achieve flawless connections with our reliable soldering expertise",
    },
    {
      heading: 'Strong and Accurate',
      image: "/HomePageBanner/Weldingsolutionsliderimage.jpg",
      subheading: "Welding Solutions",
      desc: "Delivering dependable welds with unmatched precision for every application",
    },
  ];

  useEffect(() => {
    const currentContent = contentData[index];
    let charIndex = 0;
    let typingInterval;
    let reverseTypingInterval;

    const typing = () => {
      if (charIndex <= currentContent.heading.length) {
        // Add the next character to the typed text with a caret
        setTypedText(currentContent.heading.slice(0, charIndex) + '|');
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          reverseTyping();
        }, 500); // Wait before starting reverse typing
      }
    };

    const reverseTyping = () => {
      let reverseIndex = currentContent.heading.length;
      reverseTypingInterval = setInterval(() => {
        if (reverseIndex > 0) {
          // Ensure reverse typing doesn't cause undefined
          setTypedText((prevText) => prevText.slice(0, reverseIndex - 1) + '|');
          reverseIndex--;
        } else {
          clearInterval(reverseTypingInterval);
          setTimeout(() => {
            // After reverse typing, update the index to move to next content
            setIndex((prevIndex) => (prevIndex + 1) % contentData.length);
            setAnimate(true); // Trigger image change
          }, 500);
        }
      }, 100); // Adjust reverse typing speed here
    };

    typingInterval = setInterval(typing, 100); // Start typing

    // Clean up intervals on component unmount or when index changes
    return () => {
      clearInterval(typingInterval);
      clearInterval(reverseTypingInterval);
    };
  }, [index]); // Re-run effect when index changes

  // Image transition effect
  useEffect(() => {
    if (!animate) return;

    const timeout = setTimeout(() => {
      setAnimate(false); // End image transition
    }, 800); // Duration of the image transition

    return () => clearTimeout(timeout); // Clean up the image transition timeout
  }, [animate]);

  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(/HomePageBanner/homepageplainbackground.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-10 flex gap-10 md:gap-0 flex-col-reverse md:flex-row py-10">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5">
          {/* Typewriter Text */}
          <h1 className="text-[#AA1F2E] text-2xl min-h-10 sm:text-3xl md:text-4xl font-bold">
            <span className="typewrite">{typedText}</span>
          </h1>

          {/* Subheading and Description */}
          <h2 className="text-black font-bold text-xl sm:text-2xl md:text-3xl">
            {contentData[index].subheading}
          </h2>
          <p className="w-full md:[85%] lg:w-[80%] xl:w-[75%] text-black font-medium">
            {contentData[index].desc}
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-5 flex-wrap">
            <button className="bg-[#AA1F2E] text-white px-3 w-[220px] font-medium text-sm py-2 rounded-md">
              VIEW OUR PRODUCTS
            </button>
            <button className="bg-black text-white w-[220px] px-3 py-2 font-medium text-sm rounded-md">
              LEARN MORE ABOUT
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center relative overflow-hidden">
          {/* Static Image */}
          <Image
            src={"/HomePageBanner/Brazingsolutionsliderimage.jpg"}
            width={893}
            height={766}
            className="w-full opacity-0"
            alt="banner-img"
            quality={100}
          />

          {/* Animated Image */}
          <Image
            src={contentData[index].image}
            width={893}
            height={766}
            className={`w-full absolute top-0 left-0 transition-transform duration-500 ease-out ${animate
              ? "translate-x-[100%] opacity-0"
              : "translate-x-0 opacity-100"
              }`}
            alt="banner-img"
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
