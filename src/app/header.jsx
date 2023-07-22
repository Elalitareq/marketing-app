'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';
import Slider from '@/components/slider';

const Header = ({ navLinks }) => {
	const [navStatus, setNavStatus] = useState(true);
	return (
		<>
			<header className="relative w-full shadow-lg">
				<div className="relative z-20 px-3 max-sm:px-5 py-5 flex justify-around max-sm:justify-between items-center bg-white ">
					<span className="text-xl uppercase basis-1/3">Brand</span>
					<span
						className="text-2xl sm:hidden"
						onClick={() => {
							setNavStatus(!navStatus);
						}}
					>
						<HiBars3BottomRight />
					</span>
					<nav className="basis-1/3 max-sm:hidden">
						{navLinks ? (
							navLinks.map(({ name, path }, index) => (
								<Link
									key={index}
									className="mx-4 text-md  hover:font-semibold duration-300"
									href={path}
								>
									{name}
								</Link>
							))
						) : (
							<></>
						)}
					</nav>
					<div className="max-sm:hidden">
						<button className="mx-1 text-sm bg-blue-600 text-white rounded-xl outline-2 outline-blue-700 py-2 px-5">
							Sign In
						</button>
						<button className="mx-1 text-sm border-2 border-blue-700  text-blue-700 rounded-xl py-2 px-5">
							Sign Up
						</button>
					</div>
				</div>
				<Slider navStatus={navStatus} />
			</header>
		</>
	);
};

export default Header;
