import { motion } from "framer-motion";
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
const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;

  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-lexend">{title}</p>
        <p className="mt-7">This is a project</p>
      </div>
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/*Headings*/}
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
          <p className="font-lexend font-semibold text-4xl">
            My <span className="text-red">Pro</span>jects
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient />
          </div>
        </div>
        <p className="mt-10 mb-7 font-lexend">A set of demo projects.</p>
      </motion.div>
      {/*Projects*/}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {/*ROw-1 */}
          <Project title="Project 1" />
          <Project title="Project 2" />
          <Project title="Project 3" />

          {/*ROw-2 */}

          <Project title="Project 4" />
          <Project title="Project 5" />
          <Project title="Project 6" />

          {/*ROw-2 */}

          <Project title="Project 4" />
          <Project title="Project 5" />
          <Project title="Project 6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
