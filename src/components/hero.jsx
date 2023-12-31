import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CustomBtn from "./custom_btn";
import Image from "next/image";
import rocket from "../app/assets/vector/rocket2.svg";
import landing from "../app/assets/vector/landing.svg";
import stats from "../app/assets/vector/stats.svg";

const Hero = () => {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      setContainerHeight(container.clientHeight);
    }

    const handleResize = () => {
      setContainerHeight(container.clientHeight);
    };

    handleResize(); // Set initial height
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const rocketBounceAnimation = {
    y: [-125, -145, -125], // The new animation to move the rocket up and down
    opacity: [1, 0.9, 1], // Added opacity keyframes to maintain visibility
    transition: {
      duration: 4, // Duration of the up and down animation
      ease: "easeInOut",
      times: [0, 0.5, 1], // Adjusted the times to match the added keyframes
      repeat: Infinity, // Repeat the animation infinitely
    },
  };
  const rocketAnimation = {
    initial: {
      x: 180,
      y: 0,
      opacity: 0,
      rotate: 0,
      scale: 0.6,
    },
    animate: {
      y: [0, -300, -130], // Additional y positions for the rocket to go up and down a little
      opacity: [0, 1, 1], // Added an extra opacity value to keep the rocket visible at the end
      transition: {
        duration: 8,
        ease: "easeInOut",
        times: [0, 0.2, 1], // Adjusted the times to match the added keyframes
      },
    },
    exit: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      scale: 0.6,
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[calc(100vh-60px)] flex flex-col  justify-between overflow-hidden"
    >
      <motion.main
        animate={{ opacity: 1, y: 50 }}
        transition={{ ease: "easeOut", duration: 0.56 }}
        initial={{ opacity: 0 }}
        className="w-2/3 md:w-3/4 px-3"
      >
        <h1 className="text-center max-sm:text-start max-sm:text-5 text-3xl uppercase font-extrabold">
          this is a digital marketing app
        </h1>
        <p className="text-center max-sm:text-start mx-auto w-2/3 sm:w-full lg:w-3/5 max-sm:w-full mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          at.
        </p>
        <CustomBtn name="test" route="#" />
      </motion.main>
      <div className="relative">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={rocketAnimation}
          whileTap={{
            translateY: -80,
            transition: { duration: 0.8 },
          }}
          style={{ originX: 0.5, originY: 0.8 }} // To rotate from the bottom-center
        >
          <motion.div
            animate={rocketBounceAnimation} // Chaining the new animation for continuous up and down movement
            style={{ display: "inline-block" }}
          >
            <Image src={rocket} width="200" height="220" alt="rocket" />
          </motion.div>
        </motion.div>
        <Image
          src={landing}
          width={"100%"}
          className="absolute bottom-0 w-full h-auto"
          height="auto"
          alt="landing"
        />
        <Image
          src={stats}
          width={"30%"}
          className="absolute bottom-0 w-20 left-1/3 h-auto"
          height="auto"
          alt="landing"
        />
      </div>
    </section>
  );
};

export default Hero;
