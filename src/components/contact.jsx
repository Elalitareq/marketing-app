import React from 'react';

const Contact = () => {
	return (
		<section className="bg-slate-100 ">
			<div className="flex flex-col  flex-wrap lg:flex-row justify-center py-10 px-4 gap-6 xl:px-10">
				<div className="lg:basis-4/5 md:text-xl  grow xl:basis-[45%] ">
					<h2 className="text-2xl md:text-4xl font-bold mb-2 md:max-w-[80%] xl:max-w-[70%]">
						Looking for a excellent Tiktok Agency?
					</h2>
					<p className="lg:max-w-[70%] leading-8 tracking-wider">
						Lorem, ipsum dolor sit amet consectetur adipisicing
						elit. Nisi iusto ex dicta illo error tenetur ea totam
						ratione
						<br />
						eaque deleniti magni, laudantium ducimus. Obcaecati
						officiis, magnam sed reprehenderit quisquam ex?
					</p>
					<address className="mt-3 font-md text-sm ">
						Phone:{' '}
						<a
							className=" text-black leading-5"
							href="phone:+961321321"
						>
							+961 76 222 333
						</a>{' '}
						<br />
						Email:{' '}
						<a
							className=" text-black leading-5"
							href="mailto:email"
						>
							{' '}
							email@yourdomain.com
						</a>
					</address>
				</div>
				<form className="px-2 md:px-4 py-6 max-sm:mt-10   bg-white md:basis-4/5 xl:basis-2/5  min-h-[450px] flex flex-col  justify-center rounded-lg">
					<h2 className="uppercase text-2xl font-semibold mb-3">
						Leave a Message!{' '}
					</h2>
					<input
						type="text"
						placeholder="Name"
						className="border mb-2  leading-8 pl-2 block w-full"
					/>
					<input
						type="text"
						placeholder="Email"
						className="border mb-2  leading-8 pl-2 block w-full"
					/>
					<textarea
						type="text"
						placeholder="Message.."
						className="border mb-2  leading-8 pl-2 block w-full min-h-[150px]"
					/>
					<button
						type="submit"
						className="block py-1 ml-1 px-4 bg-blue-700 text-white text-center"
					>
						Send
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
