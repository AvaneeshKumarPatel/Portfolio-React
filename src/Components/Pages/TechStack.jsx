import { motion } from "framer-motion";

const techStack = [
    {
      "name": "HTML",
      "icon": "https://cdn.worldvectorlogo.com/logos/html-1.svg"
    },
    {
      "name": "CSS",
      "icon": "https://img.icons8.com/color/480/css3.png"
    },
    {
      "name": "JavaScript",
      "icon": "https://img.icons8.com/color/480/javascript--v1.png"
    },
    {
      "name": "Tailwind CSS",
      "icon": "https://img.icons8.com/color/480/tailwindcss.png"
    },
    {
      "name": "Bootstrap",
      "icon": "https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg"
    },
    {
      "name": "React.js",
      "icon": "https://cdn.worldvectorlogo.com/logos/react-2.svg"
    },
    {
      "name": "Redux Toolkit",
      "icon": "https://cdn.worldvectorlogo.com/logos/redux.svg"
    },
    {
      "name": "Node.js",
      "icon": "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg"
    },
    {
      "name": "MySQL",
      "icon": "https://cdn.worldvectorlogo.com/logos/mysql-logo-pure.svg"
    },
    {
      "name": "Git",
      "icon": "https://cdn.worldvectorlogo.com/logos/git-icon.svg"
    }
  ]
  
  

// Animation variants for Framer Motion
  const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TechStackSection = () => {
  return (
    <section className="py-12  text-white">
      <div className="container  flex justify-center  px-4"> 
        <h2 className="text-3xl  flex justify-center items-center p-5 font-bold  mb-8">Tech Stack</h2>

        {/* Grid Layout for Tech Stack */}

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-4  bg-[#141414] border  border-gray-700 rounded-lg shadow-lg grayscale-0 hover:grayscale  "
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Tech Logo with Gray and Hover Color */}

              <div className="w-16 h-16 mb-2 flex items-center justify-center ">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-full h-full transition-all duration-300 "
                  style={{ filter: "" }}        
                />
              </div>
              <p className="text-lg font-semibold">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;


// grayscale hover:grayscale-0