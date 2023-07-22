import React from 'react';
import StoryCard from './storyCard';

const Accomplishments = () => {
	return (
		<section className="min-h-screen  py-16">
			<div className="md:w-4/5 mx-auto">
				<h2 className=" text-3xl md:text-4xl  font-bold text-black mb-5 px-4 text-center">
					Hear from Our Delighted Clients
				</h2>
				<div className="flex flex-wrap justify-center gap-6">
					<StoryCard />
					<StoryCard />
					<StoryCard />
					<StoryCard />
					<StoryCard />
				</div>
			</div>
		</section>
	);
};

export default Accomplishments;
