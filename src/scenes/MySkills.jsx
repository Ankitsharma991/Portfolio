import { motion } from 'framer-motion';
import useMediaQuery from '../hooks/useMediaQuery';

import SkillsImage from '../assets/skillss.png';

import LineGradient from '../components/LineGradient';

const MySkills = () => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)');
	return (
		<section id='skills' className='pt-10 pb-24'>
			<div className='md:flex md:justify-between md:gap-16 mt-32'>
				<motion.div
					className='md:w-1/3'
					initial='hidden'
		 			whileInView='visible'
		 			viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, x: -50 },
						visible: { opacity: 1, x: 0 },
					}}
				>
					<p className='font-playfair font-semibold text-4xl mb-5'>
						MY <span className='text-cyan-400'>SKILLS</span>
					</p>
					<LineGradient width='w-1/3' />
					<p className='mt-10 mb-7'>
						I am a Frontend Developer and Technical Writer. I am familiar with stacks like HTML, CSS, JavaScript, ReactJs, React-Native, Android Development(Kotlin), Firebase and Figma for Design. I have an internship experience as a role of Frontend Developer and Project Management Intern at DeepThought EduTech and Ventures.
					</p>
				</motion.div>

				<div className='mt-16 md:mt-0'>
					{isAboveMediumScreens ? (
						<div className='relative z-0 before:absolute before:-top-10 before:-left-10 before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]'>
							<img alt='skills' className='z-10' src={SkillsImage} />
						</div>
					) : (
						<img alt='skills' className='z-10' src={SkillsImage} />
					)}
				</div>
			</div>

			<div className='md:flex md:justify-between mt-16 gap-32'>
				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>01</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>
								Experience
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						I have done an internship as a role of Frontend Developer and Project Management Intern at DeepThought. I am also familiar with Open Source.
					</p>
				</motion.div>

				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>02</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>
								Innovative
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Innovative skills such as creative problem-solving, adaptability, continuous learning, collaboration, user empathy, and always ready to learn new things.
					</p>
				</motion.div>

				<motion.div
					className='md:w-1/3 mt-10'
					initial='hidden'
					whileInView='visible'
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					variants={{
						hidden: { opacity: 0, y: 50 },
						visible: { opacity: 1, y: 0 },
					}}
				>
					<div className='relative h-32'>
						<div className='z-10'>
							<p className='font-playfair font-semibold text-5xl'>03</p>
							<p className='font-playfair font-semibold text-3xl mt-3'>
								Imaginative
							</p>
						</div>
						<div className='w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]' />
					</div>
					<p className='mt-5'>
						Through the cultivation of my imaginative skills, I hope to continue pushing the boundaries of what is possible in computer science and software engineering.
					</p>
				</motion.div>
			</div>
		</section>
	);
};

export default MySkills;
