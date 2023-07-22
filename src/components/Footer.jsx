import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
const Footer = () => {
	return (
		<footer className="mt-auto  mx-auto py-16 px-2">
			<ul className="flex gap-x-5 flex-wrap pl-5">
				<li>
					<Link href="#" className="underline hover:no-underline">
						Linkone
					</Link>
				</li>
				<li>
					<Link href="#" className="underline hover:no-underline">
						twoLink
					</Link>
				</li>
				<li>
					<Link href="#" className="underline hover:no-underline">
						visitLink
					</Link>
				</li>
				<li>
					<Link href="#" className="underline hover:no-underline">
						LinkHere
					</Link>
				</li>
				<li>
					<Link href="#" className="underline hover:no-underline">
						Location
					</Link>
				</li>
			</ul>
			<span className="block border-t-2 border-gray-400 min-w-full my-6" />
			<div className=" pl-5 flex flex-wrap gap-3 items-center justify-between">
				<ul className="flex flex-wrap gap-4">
					<li>
						<Link href="#" className="underline hover:no-underline">
							Linkone
						</Link>
					</li>
					<li>
						<Link href="#" className="underline hover:no-underline">
							twoLink
						</Link>
					</li>
					<li>
						<Link href="#" className="underline hover:no-underline">
							visitLink
						</Link>
					</li>
				</ul>
				<span>© 2023 Grow Tech. All rights reserved</span>
				<div className="h-8 w-32  text-4xl flex gap-x-2">
					<Image
						className="object-cover"
						src="https://i.ibb.co/GW3y37g/paypal-logos-removebg-preview.png"
						height="225"
						width="400"
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
