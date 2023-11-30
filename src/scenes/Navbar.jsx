import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import MenuIcon from '../assets/menu-icon.svg';
import CloseIcon from '../assets/close-icon.svg';
import logo from '../assets/as.png';

const Link = ({ page, selectedPage, setSelectedPage }) => {
	const lowerCasePage = page.toLowerCase();

	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? 'text-white' : ''
			} hover:text-yellow transition duration-500`}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}
		>
			{page}
		</AnchorLink>
	);
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
	const [isMenuToggled, setIsMenuToggled] = useState(false);
	const isAboveSmallScreens = useMediaQuery('(min-width: 768px)');
	const navbarBackground = isTopOfPage ? '' : 'bg-cyan-400 text-black';

	return (
		<nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
			<div className='flex items-center justify-between mx-auto w-5/6'>
				{/* <h4 className='font-playfair text-3xl font-bold'>AS</h4> */}
				<img src={logo} alt="Ankit Sharma" className='w-1/5 h-24'/>

				{/* Desktop Nav */}
				{isAboveSmallScreens ? (
					<div className='flex justify-between gap-16 font-mono text-1xl font-bold'>
						<Link
							page='Home'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Skills'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Projects'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
						<Link
							page='Contact'
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</div>
				) : (
					<button
						className='rounded-full bg-deep-blue p-2'
						onClick={() => setIsMenuToggled(!isMenuToggled)}
					>
						<img alt='menu-icon' src={MenuIcon} />
					</button>
				)}

				{/* Mobile Menu */}

				{!isAboveSmallScreens && isMenuToggled && (
					<div className='fixed right-0 bottom-0 h-full bg-cyan-400 w-[300px]'>
						<div className='flex justify-end p-12 '>
							<button onClick={() => setIsMenuToggled(!isMenuToggled)}>
								{' '}
								<img alt='close-icon' className='bg-deep-blue' src={CloseIcon} />
							</button>
						</div>
						<div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
							<Link
								page='Home'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Skills'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Projects'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
							<Link
								page='Contact'
								selectedPage={selectedPage}
								setSelectedPage={setSelectedPage}
							/>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
