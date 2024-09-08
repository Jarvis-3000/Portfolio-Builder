"use client";
import { motion } from "framer-motion";

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="w-[90%] max-w-[600px] my-8 mx-auto">
      <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
      <form className="w-full bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="message"
            placeholder="Your Message"
            rows={5}
          />
        </div>
        <div className="text-center">
          <motion.button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            type="submit"
            whileHover={{ scale: 1.05 }}
          >
            Send
          </motion.button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
