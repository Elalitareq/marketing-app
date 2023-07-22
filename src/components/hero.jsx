import React from 'react';
import { motion } from 'framer-motion';
import CustomBtn from './custom_btn';
import Image from 'next/image';
const Hero = ({ scroll }) => {
	return (
		<section className="relative min-h-screen flex flex-col items-center justify-between  overflow-hidden  ">
			<motion.main
				animate={{ opacity: 1, y: 50 }}
				transition={{ ease: 'easeOut', duration: 0.56 }}
				initial={{ opacity: 0 }}
				className=" w-2/3 md:w-3/4 max-sm:w-full px-3"
			>
				<h1 className="text-center max-sm:text-start max-sm:text-5 text-4xl uppercase font-extrabold ">
					this is a digital marketing app
				</h1>
				<p className="text-center max-sm:text-start  mx-auto w-2/3 sm:w-full lg:w-3/5 max-sm:w-full mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Veritatis, at. Tempore doloremque beatae quia architecto
					porro consequuntur neque, similique enim autem temporibus,
				</p>
				<CustomBtn name="test" route="#" />
			</motion.main>
			<div className="absolute bottom-0 -z-10 ">
				<Image
					src="https://i.ibb.co/tD9W4zN/Daco-4177578.png"
					width="2721"
					height="1325"
					alt="illustration"
				/>
			</div>
		</section>
	);
};

export default Hero;
