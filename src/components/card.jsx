import React from 'react';
import Image from 'next/image';

const Card = ({ description, title, image }) => {
	return (
		<li className="flex cursor-pointer flex-col flex-shrink-0 max-w-[300px] min-h-full px-5 py-4 bg-white rounded-lg  snap-center transition duration-200text-black">
			<div className="flex items-center mb-7">
				<div className="h-12 w-12 rounded-[50%]  overflow-hidden ml-1 border-2 border-gray-200 ">
					{image ? (
						<Image
							src={image}
							width="100"
							height="100"
							alt="user image"
							objectFit="cover"
						/>
					) : (
						<Image
							src={
								'https://i.ibb.co/BwFYj9P/download-removebg-preview.png'
							}
							width="100"
							height="100"
							alt="user image"
							objectFit="cover"
						/>
					)}
				</div>
				<div className="ml-4">
					<h3 className="text-xl  uppercase">
						{title ? title : 'Service Name'}
					</h3>
					<h4>position</h4>
				</div>
			</div>
			<div className="flex items-center basis-[70%]  border-2 shadow-lg px-4 rounded-md hover:shadow-2xl duration-200">
				<p className="text-gray-700 text-sm">
					{description
						? description
						: 'lorem ipsum dolor sit amet, consectetur adip non pro  id el   element lorem ipsum dolor sit amet, consectetur adip non pro  id el   element'}
				</p>
			</div>
		</li>
	);
};

export default Card;
