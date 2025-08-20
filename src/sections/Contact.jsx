import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaSearchLocation,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center p-8 md:p-16 bg-gray-50 min-h-screen"
    >
      <h1 className="text-4xl font-bold mb-8 text-purple-700">Contact Me</h1>

      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-64 text-center">
          <span className="text-2xl mb-2">
            <MdEmail />
          </span>
          <h2 className="font-semibold mb-1">Email</h2>
          <p>bojkovskai45@gmail.com</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-64 text-center">
          <span className="text-2xl mb-2">
            <FaPhoneAlt />
          </span>
          <h2 className="font-semibold mb-1">Phone</h2>
          <p>+389 77 637 990</p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md w-64 text-center">
          <span className="text-2xl mb-2">
            <FaSearchLocation />
          </span>
          <h2 className="font-semibold mb-1">Location</h2>
          <p>Skopje, North Macedonia</p>
        </div>
      </div>

      <form className="flex flex-col gap-4 w-full max-w-xl bg-white p-8 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          placeholder="Message"
          className="p-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400"
        ></textarea>
        <button
          type="submit"
          className="bg-purple-500 text-white py-3 rounded hover:bg-purple-600 transition-colors"
        >
          Send Message
        </button>
      </form>

      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/Irina11122"
          target="_blank"
          className="text-purple-700 hover:text-purple-900 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/irina-bojkovska-iri17/"
          target="_blank"
          className="text-purple-700 hover:text-purple-900 text-2xl"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
}
