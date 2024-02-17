import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import img1 from "../assets/person-4.png";
import img2 from "../assets/mobile-896ef2f5.png";
import img3 from "../assets/backend-565fc01f.png";

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus.
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8">
        <motion.div
          className="mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="avatar">
            <div className="w-24 rounded-full"> <img alt="skills" src={img1} />
            </div>
          </div>
          <p className="font-playfair text-5xl">“Full Stack Developer</p>
          {/* <p className="text-center text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p> */}
        </motion.div>

        <motion.div
          className="mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <div className="avatar">
            <div className="w-24 rounded-full"> <img alt="skills" src={img2} />
            </div>
          </div>
          <p className="font-playfair text-5xl">“Frontend Developer</p>
          {/* <p className="text-center text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p> */}
        </motion.div>

        <motion.div
          className="mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        > 
        
          <div className="avatar">
            <div className="w-24 rounded-full"> <img alt="skills" src={img3} />
            </div>
          </div>
          <p className="font-playfair text-5xl">“Backend Developer</p>
          <p className="text-center text-xl">
          
            {/* Fames odio in at. At magna ornare dictum lectus. */}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
