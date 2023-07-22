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
				<div className="flex flex-wrap justify-center gap-2 md:gap-5 mt-5 basis-full lg:basis-2/3 xl:basis-[45%] bg-white">
					<div className="xl:basis-[45%] basis-[45%] md:max-w-[250px] bg-white">
						<div className=" flex justify-center items-center  grow  h-[200px] rounded-lg bg-yellow-200 mb-2 md:mb-4">
							<CiHeadphones className="text-5xl" />
						</div>
						<div className=" flex justify-center items-center  grow  h-[200px] rounded-lg bg-red-200">
							<SlBadge className="text-5xl text-red-900" />
						</div>
					</div>
					<div className="mt-6 xl:basis-[45%] basis-[45%] md:max-w-[250px] bg-white">
						<div className=" flex gap-1 flex-col  justify-center items-center  grow max-w-[300px]  h-[200px] rounded-lg bg-violet-400 mb-2 md:mb-4">
							<div>
								<FaUser className="text-5xl text-violet-900" />
							</div>
						</div>
						<div className=" flex justify-center items-center  grow max-w-[300px]  h-[200px] rounded-lg bg-blue-500">
							<GiTrophyCup className="text-5xl text-[#0f3053]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cards;
