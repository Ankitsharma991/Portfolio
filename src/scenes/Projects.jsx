import { motion } from "framer-motion";

import Project1Image from "../assets/project-1.jpeg";
import Project2Image from "../assets/project-2.jpeg";
import Project3Image from "../assets/project-3.jpeg";
import Project4Image from "../assets/project-4.jpeg";
import Project5Image from "../assets/project-5.jpeg";
import Project6Image from "../assets/project-6.jpeg";
import Project7Image from "../assets/project-7.jpeg";

import LineGradient from "../components/LineGradient";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, image }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:bg-cyan-200 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{subtitle}</p>
      </div>
      <img alt={projectTitle} src={image} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            MY <span className="text-cyan-400">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          perferendis recusandae quisquam incidunt sint. Quod praesentium quidem
          consequatur iure obcaecati!
        </p>
      </motion.div>

      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center hover:bg-deep-blue hover:text-white text-black items-center p-10 bg-cyan-400 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>

          <Project
            title="Project 1"
            subtitle="I am Project 1"
            image={Project1Image}
          />
          <Project
            title="Project 2"
            subtitle="I am Project 2"
            image={Project2Image}
          />

          <Project
            title="Project 3"
            subtitle="I am Project 3"
            image={Project3Image}
          />
          <Project
            title="Project 4"
            subtitle="I am Project 4"
            image={Project4Image}
          />
          <Project
            title="Project 5"
            subtitle="I am Project 5"
            image={Project5Image}
          />

          <Project
            title="Project 6"
            subtitle="I am Project 6"
            image={Project6Image}
          />
          <Project
            title="Project 7"
            subtitle="I am Project 7"
            image={Project7Image}
          />
          <div className="flex justify-center text-center items-center p-10 hover:bg-deep-blue hover:text-white  bg-cyan-400 max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-black">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
