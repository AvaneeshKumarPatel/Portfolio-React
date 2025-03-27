import { FaGithub, FaLinkedin, FaTwitter,FaInstagram } from "react-icons/fa";


const ContactForm = () => {
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
          {/* MacOS Style Buttons */}
          <div className="flex space-x-2">
            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <p className="text-white text-sm text-center flex-1 absolute left-1/2 transform -translate-x-1/2">
            New message
          </p>
          <div></div> {/* Empty div to balance flex spacing */}
        </div>

        {/* Form Inputs */}
        <div className="space-y-4 mt-4">
          {/* Email Field */}
          <div className="flex items-center space-x-2">
            <label className="text-white w-24 sm:w-32">Email:</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 p-3 bg-transparent text-white placeholder-gray-600 border-b border-gray-700 focus:outline-none"
            />
          </div>

          {/* Name Field */}
          <div className="flex items-center space-x-2">
            <label className="text-white w-24 sm:w-32">Name:</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="flex-1 p-3 bg-transparent text-white placeholder-gray-600 border-b border-gray-700 focus:outline-none"
            />
          </div>

          {/* Subject Field */}
          <div className="flex items-center space-x-2">
            <label className="text-white w-24 sm:w-32">Subject:</label>
            <input
              type="text"
              placeholder="Enter subject"
              className="flex-1 p-3 bg-transparent text-white placeholder-gray-600 border-b border-gray-700 focus:outline-none"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <textarea
              placeholder="Write your message here"
              rows="4"
              className="w-full p-3 bg-black text-white placeholder-gray-600 rounded-sm border-gray-700 focus:outline-none "
            ></textarea>
          </div>
        </div>

        {/* Send Button */}
        <div className="flex justify-end mt-4">
          <button className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition">
            Send
          </button>
        </div>
      </div>
         
      <div className="flex space-x-6 mt-8">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-white text-2xl hover:text-gray-400 transition" />
        </a>

        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-white text-2xl hover:text-gray-400 transition" />
        </a>
      </div>

    </div>
  );
};

export default ContactForm;
