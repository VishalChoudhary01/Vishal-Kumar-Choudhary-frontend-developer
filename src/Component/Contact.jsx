import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IoSend } from "react-icons/io5";
import "./CSS/Contact.css";
const Contact = () => {
  const { register } = useForm();
  const URL = import.meta.env.VITE_URL;
  const KEY = import.meta.env.VITE_KEY;
  return (
    <section id="Contact" className="border-b border-neutral-900 pb-5">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="text-center heading text-2xl md:text-3xl lg:text-4xl"
      >
        Get In Touch
      </motion.h1>
      <form action={URL} method="POST">
        <input type="hidden" name="access_key" value={KEY} />
        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1 }}
          className="inputFieldBox"
        >
          <input
            type="text"
            id="fullName"
            required="required"
            {...register("fullName", { required: "Full Name is required" })}
            className="fullName"
          />
          <label htmlFor="fullName">Full Name</label>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1, delay: 1 }}
          className="inputFieldBox"
        >
          <input
            type="email"
            id="email"
            required="required"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address",
              },
            })}
            className="emailInput"
          />
          <label htmlFor="email">E-mail</label>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1, delay: 1 }}
          className="inputFieldBox"
        >
          <textarea
  id="message"
  required // Add HTML5 required attribute
  {...register("message", { required: true })}
  className="w-full bg-transparent border border-teal-600 pt-2"
/>
          <label htmlFor="message">Type Your Message Here ....</label>
        </motion.section>

        <motion.section
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="inputFieldBox submitButton"
        >
          <button className="hueButtonHover" type="submit">
            Send Message {<IoSend />}
          </button>
        </motion.section>
      </form>
    </section>
  );
};

export default Contact;
