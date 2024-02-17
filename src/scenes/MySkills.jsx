import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import img from "../assets/masud-img.jpg - Copy.jpg";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
            fames odio in at.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src={img}
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src={img} />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <ul className="timeline timeline-vertical">
        <li>
          <div className="timeline-start timeline-box text-3xl font-bold text-red">HTML & CSS</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box text-3xl font-bold text-red">Bootstrap & Tailwind</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box text-3xl font-bold text-red">JavaScript</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box text-3xl font-bold text-red">React</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box text-3xl font-bold text-red">Firebase</div>
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box text-3xl font-bold text-red">MongoDB</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-start timeline-box text-3xl font-bold text-red">Node.Js</div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-end timeline-box text-3xl font-bold text-red">Express.Js</div>
          <hr />
        </li>
      </ul>
    </section>
  );
};

export default MySkills;
