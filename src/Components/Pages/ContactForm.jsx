import { motion } from 'framer-motion';
import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', form);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <motion.div 
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-2xl font-bold mb-4 text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        />
        <motion.input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <motion.textarea 
          name="message" 
          rows="4" 
          placeholder="Your Message" 
          value={form.message} 
          onChange={handleChange} 
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          whileFocus={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        ></motion.textarea>
        <motion.button 
          type="submit" 
          className="w-full p-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
