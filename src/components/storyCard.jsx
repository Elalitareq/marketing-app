import React from 'react';
import Image from 'next/image';

const StoryCard = () => {
	return (
		<article className="w-[300px] h-[360px]  rounded-xl shadow-lg hover:shadow-xl  transition duration-300 cursor-pointer overflow-hidden hover:scale-105 ">
			<div className="h-1/2 w-full ">
				<Image
					className="object-cover"
					src={'https://i.ibb.co/pJv84y2/tiktok.webp'}
					alt="service image"
					height={1000}
					width={1000}
				/>
			</div>
			<div className="text-gray-900 font-medium tracking-widest  p-4 leading-5 h-1/2 text-sm">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
				vel labore nulla, ut maiores, cumque minima rem quis alias nobis
				quas
			</div>
		</article>
	);
};

export default StoryCard;
