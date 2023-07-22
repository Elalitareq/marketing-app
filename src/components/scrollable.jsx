import React from 'react';
import Card from './card';

const Scrollable = () => {
	return (
		<section className="md:pb-16 px-4 py-10  md:px-16" id="scroll-section">
			<div className="max-w-1400 mx-auto ">
				<h2 className="text-4xl mb-6 text-center ">Scrolling List</h2>
				<ul className="flex overflow-x-auto snap-x snap-mandatory h-[400px] shadow-inner border border-gray-200 py-4">
					<Card
						title="custom title"
						image={
							'https://i.ibb.co/8DcWmD7/Untitled-design-removebg-preview.png'
						}
					/>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					{/* to be mapped once data is available  */}
				</ul>
			</div>
		</section>
	);
};

export default Scrollable;
