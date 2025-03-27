import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiFramer } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <section id="Technologies" className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="my-20 text-center heading text-2xl md:text-3xl lg:text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.section
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1, delay: 1 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {/* Existing Technologies */}
        <section className="text-center">
          <motion.section
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <FaHtml5 className="text-5xl lg:text-6xl text-[#E5532D]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            HTML
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <IoLogoCss3 className="text-5xl lg:text-6xl text-[#2465F1]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 bg-neutral-900 font-medium">
            CSS
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <RiTailwindCssFill className="text-5xl lg:text-6xl text-[#38BDF8]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            Tailwind CSS
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <IoLogoJavascript className="text-5xl lg:text-6xl text-[#EFD81D]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            Javascript
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <RiReactjsLine className="text-5xl lg:text-6xl text-[#58C4DC]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            React JS
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <FaNodeJs className="text-5xl lg:text-6xl text-[#3F873F]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            Node JS
          </p>
        </section>

        {/* New Technologies */}
        <section className="text-center">
          <motion.section
            variants={iconVariants(2.2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <SiNextdotjs className="text-5xl lg:text-6xl text-neutral-100" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            Next JS
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(3.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <SiMongodb className="text-5xl lg:text-6xl text-[#47A248]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            MongoDB
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <SiExpress className="text-5xl lg:text-6xl text-neutral-100" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            Express JS
          </p>
        </section>

        <section className="text-center">
          <motion.section
            variants={iconVariants(2.8)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-[3px] border-neutral-800 p-3"
          >
            <SiFramer className="text-5xl lg:text-6xl text-[#0055FF]" />
          </motion.section>
          <p className="text-[12px] lg:text-sm py-1 rounded-md mt-2 text-teal-300 font-medium bg-neutral-900">
            Framer Motion
          </p>
        </section>
      </motion.section>
    </section>
  );
};

export default Technologies;