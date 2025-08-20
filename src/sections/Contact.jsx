import { useState } from 'react';
import {
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaSearchLocation,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_2visr7w',
        'template_fd53vuf',
        formData,
        'ZPNYnulK5shweSdIE',
      )
      .then(
        (res) => {
          console.log('Form submitted:', formData);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', subject: '', message: '' });
        },
        (err) => {
          console.error('FAILED...', err);
          alert('Failed to send message. Try again later.');
        },
      );
  };

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

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl bg-white p-8 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="p-3 border rounded focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="p-3 border rounded focus:ring-2 focus:ring-purple-400"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 border rounded focus:ring-2 focus:ring-purple-400"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 border rounded h-32 resize-none focus:ring-2 focus:ring-purple-400"
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
          <FaGithub size={50} />
        </a>
        <a
          href="https://www.linkedin.com/in/irina-bojkovska-iri17/"
          target="_blank"
          className="text-purple-700 hover:text-purple-900 text-2xl"
        >
          <FaLinkedin size={50} />
        </a>
      </div>
    </section>
  );
}
