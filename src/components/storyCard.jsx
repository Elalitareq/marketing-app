import React from 'react';
import Image from 'next/image';

const StoryCard = () => {
	return (
		<article className="w-[150px] rounded-xl shadow-lg hover:shadow-xl  transition duration-300 cursor-pointer overflow-hidden hover:scale-105 ">
			<div className=" w-full ">
				<Image
					className="object-cover"
					src={'https://i.ibb.co/pJv84y2/tiktok.webp'}
					alt="service image"
					height={1000}
					width={1000}
				/>
			</div>
			<div className="text-gray-900 font-medium leading-4 p-2   text-xs overflow-hidden tracking-tight">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
				vel labore nulla, ut maiores.
			</div>
		</article>
	);
};

export default StoryCard;
