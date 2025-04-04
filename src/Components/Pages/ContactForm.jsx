import { useState, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Name is required";
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Valid email is required";
    if (!subject.trim()) newErrors.subject = "Subject is required";
    if (!message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    emailjs
      .sendForm("service_ntv753q", "template_zgs2hfi", form.current, "AvQUHg7ChJTmW69o5")
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          toast.success("Email sent successfully! 🚀");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrors({});
          form.current.reset();                    // Reset form fields
        },
        (error) => {
          console.error("Email sending failed:", error.text);
          toast.error("Failed to send email. Please try again.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black px-4">
      {/* Header Section */}
      <div className="text-center pb-8">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">Get in touch</h1>
        <p className="text-base sm:text-lg text-gray-500 mt-2">
          Let&apos;s build something awesome.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-screen-md w-full bg-[#141414] rounded-xl p-6 shadow-lg border border-gray-800">
        {/* MacOS Window Header */}
        <div className="flex items-center justify-between bg-[#1a1a1a] px-4 py-2 rounded-t-xl border-b border-gray-700">
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-white text-sm text-center flex-1 absolute left-1/2 transform -translate-x-1/2">
            New message
          </p>
        </div>

        {/* Form Inputs */}
        <form ref={form} onSubmit={handleSubmit} className="space-y-4 mt-4">
          {/* Email Field */}
          <div>
            <label className="text-white">Email:</label>
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full p-3 bg-transparent text-white placeholder-gray-600 border-b border-gray-700 focus:outline-none"
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Name Field */}
          <div>
            <label className="text-white">Name:</label>
            <input
              type="text"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full p-3 bg-transparent text-white placeholder-gray-600 border-b border-gray-700 focus:outline-none"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </div>

          {/* Subject Field */}
          <div>
            <label className="text-white">Subject:</label>
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full p-3 bg-transparent text-white placeholder-gray-600 border-b border-gray-700 focus:outline-none"
            />
            {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
          </div>

          {/* Message Textarea */}
          <div>
            <label className="text-white">Message:</label>
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message here"
              rows="4"
              className="w-full p-3 bg-black text-white placeholder-gray-600 rounded-sm border-gray-700 focus:outline-none"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
          </div>

          {/* Send Button */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className="px-6 py-2   bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <ToastContainer />

      {/* Social Media Links */}
      <div className="flex space-x-6   m-5 mt-8">
        <a href="https://github.com/AvaneeshKumarPatel" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://www.linkedin.com/in/avnishpatel0" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="https://www.instagram.com/avnishpatel143" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
      </div>
    </div>
  );
};

export default ContactForm;



