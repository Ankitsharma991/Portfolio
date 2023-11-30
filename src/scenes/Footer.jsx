import SocialMediaIcons from '../components/SocialMediaIcons';
import btn from '../assets/btn.png'
const Footer = () => {
	return (
		<footer className='h-64 bg-cyan-400 pt-10'>
			<div className='w-5/6 mx-auto'>
				<SocialMediaIcons />
				<div className='md:flex justify-center md:justify-between text-center'>
					{/* <p className='font-playfair font-semibold text-2xl text-black'>
						ANKIT SHARMA
					</p> */}
					<img src={btn} alt="Ankit Sharma" className='w-1/4 h-10' />
		 		<p className='font-playfair text-md text-black'>
						&copy; 2022. All Rights Reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
