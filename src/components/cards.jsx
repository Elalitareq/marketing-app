import React from 'react';
import { CiHeadphones } from 'react-icons/ci';
import { SlBadge } from 'react-icons/sl';
import { FaUser } from 'react-icons/fa';
import { GiTrophyCup } from 'react-icons/gi';

const Cards = () => {
	return (
		<section className="md:flex md:justify-around  py-4">
			<div className="flex flex-wrap  gap-5 sm:px-4  md:px10 lg:px-6 justify-center xl:justify-between">
				<div className="md:basis-full px-4  xl:basis-[45%]  mt-4">
					<div className="sm:w-full mt-5">
						<h2 className="text-3xl md:text-4xl  font-bold text-black">
							Welcome to our Agency!
						</h2>
						<p className="text-gray-600">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Animi, libero. Aliquam rem consectetur
							reiciendis fuga qui aut delectus et quibusdam
						</p>
					</div>

					<div className="lg:basis-2/3 mt-5 font-medium">
						<h3 className="text-2xl text-black">
							Welcome to our Agency!
						</h3>
						<p className="text-gray-600">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Animi, libero. Aliquam rem consectetur
							reiciendis fuga qui aut delectus et quibusdam lorem
						</p>
					</div>

					<div className="lg:basis-2/3  mt-5 font-medium">
						<h3 className="text-2xl text-black">
							Welcome to our Agency!
						</h3>
						<p className="text-gray-600">
							Lorem ipsum, dolor sit amet consectetur adipisicing
							elit. Animi, libero. Aliquam rem consectetur
							reiciendis fuga qui aut delectus et quibusdam
						</p>
					</div>
				</div>
			
			</div>
		</section>
	);
};

export default Cards;
