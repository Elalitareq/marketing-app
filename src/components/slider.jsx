'use client';
import React, { useState } from 'react';
import { navLinks } from '@/app/global';
import Link from 'next/link';
import CustomBtn from './custom_btn';

const Slider = ({ navStatus }) => {
	return (
		<>
			<aside
				className="md:hidden duration-500   shadow-md pb-5  absolute z-10  left-0  w-full bg-white "
				style={{
					top: navStatus ? '-300%' : '100%',
				}}
			>
				{navLinks &&
					navLinks.map(({ name, path }, index) => (
						<Link
							href={path}
							key={index}
							className="text-black tracking-wider block my-3 text-center "
						>
							{name}
						</Link>
					))}
				<CustomBtn name="contact" route="#" />
			</aside>
		</>
	);
};

export default Slider;
