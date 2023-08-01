import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import CustomBtn from "./custom_btn";
import Image from "next/image";
import rocket from "../app/assets/vector/rocket.svg";

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

  const rocketAnimation = {
    initial: {
      x: -100,
      y: 0,
      opacity: 0,
      rotate: 0,
      scale: 0.6,
    },
    animate: {
      x: [50, 250, 50, -150, 50, 150],
      y: [0, -150, -300, -150, 200, 90], // Adjusted the final y position to land at the bottom-center
      opacity: [0, 1, 1, 1, 0, 1],
      rotate: [0, 0, 360, 360],
      scale: [0.6, 1, 0.6, 0.6, 0.6, 0.6],
      transition: {
        duration: 8,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 0.9, 1],
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
      className="relative min-h-[calc(100vh-80px)] flex flex-col items-center justify-between overflow-hidden"
    >
      <motion.main
        animate={{ opacity: 1, y: 50 }}
        transition={{ ease: "easeOut", duration: 0.56 }}
        initial={{ opacity: 0 }}
        className="w-2/3 md:w-3/4 max-sm:w-full px-3"
      >
        <h1 className="text-center max-sm:text-start max-sm:text-5 text-4xl uppercase font-extrabold">
          this is a digital marketing app
        </h1>
        <p className="text-center max-sm:text-start mx-auto w-2/3 sm:w-full lg:w-3/5 max-sm:w-full mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          at. Tempore doloremque beatae quia architecto porro consequuntur
          neque, similique enim autem temporibus,
        </p>
        <CustomBtn name="test" route="#" />
      </motion.main>
      <div className="absolute bottom-0 left-0 right-0 -z-10 ">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={rocketAnimation}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 },
          }}
          whileTap={{ scale: 0.8 }}
          style={{ originX: 0.5, originY: 0.8 }} // To rotate from the bottom-center
        >
          <motion.div
            animate="wiggle"
            variants={rocketAnimation}
            style={{ display: "inline-block" }}
          >
            <Image src={rocket} width="200" height="220" alt="rocket" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
