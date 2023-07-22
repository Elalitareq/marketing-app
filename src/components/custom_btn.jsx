import React from 'react';
import Link from 'next/link';

const CustomBtn = ({ route, name }) => {
	return (
		<Link
			className="block max-w-[150px] z-40 overflow-hidden relative text-white px-5 py-2 rounded-xl mt-4  mx-auto  bg-blue-600 hover:text-blue-950 border-2 border-blue-600 shadow-md
    before:top-0 before:left-1/2 before:absolute before:bg-white before:h-full before:w-0  hover:before:w-full hover:before:top-0 hover:before:h-full   hover:before:rounded-0   before:duration-500   before:rounded-tr-[50%] before:rounded-br-[50%]
    after:top-0  after:right-1/2 after:absolute after:bg-white after:h-full after:w-0  hover:after:w-full     hover:after:top-0   hover:after:h-full           hover:after:rounded-0          after:duration-500            after:rounded-tl-[50%]            after:rounded-bl-[50%]
    ease-out"
			href={route ? route : '#'}
		>
			<span className="relative z-50  duration-1000 font-bold tracking-widest  block text-center uppercase">
				{name ? name : 'Custom '}
			</span>
		</Link>
	);
};

export default CustomBtn;
