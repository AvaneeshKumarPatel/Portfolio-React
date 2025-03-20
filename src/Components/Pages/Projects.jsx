// import { FaArrowRight } from "react-icons/fa";
// import Project_1_image from "/src/assets/freepik__upload__8902.png";

// function Project() {
//   return (
//     <div className="w-full max-md:w-[80%] max-sm:w-full flex flex-col items-center text-cyan-50 py-10">
//       <h1 className="text-3xl font-bold mb-8">Projects</h1>

//       {/* Projects Container */}
//       <div className="flex flex-col gap-8 w-full max-w-5xl px-4">
//         {/* Project 1 */}
//         <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-gray-800 p-6 rounded-sm shadow-lg">
//           <img
//             src={Project_1_image}
//             alt="Project 1"
//             className="w-[224px] h-auto md:w-[300px] lg:w-[350px] rounded-lg"
//           />

//           <div className="flex flex-col justify-center max-w-lg">
//             <h2 className="text-2xl font-semibold">Project 1 Name</h2>
//             <p className="text-gray-300 mt-2">
//               Subbi is a side project that I’ve built to help me keep track of how much
//               I spend on subscriptions and prevent the “accidental” bill after a trial ends.
//               It tracks bills like Netflix, Spotify, Xbox Game Pass, and more.
//             </p>

//             {/* Button */}
//             <div className="mt-4">
//               <button className="flex items-center border gap-2 border-gray-600 text-white rounded-lg hover:bg-gray-700 px-5 py-2 rounded-lg transition">
//                 Go To Live
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Additional Projects Can Be Added Here */}


//         <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-gray-800 p-6 rounded-sm shadow-lg">
//           <img
//             src={Project_1_image}
//             alt="Project 1"
//             className="w-[224px] h-auto md:w-[300px] lg:w-[350px] rounded-lg"
//           />

//           <div className="flex flex-col justify-center max-w-lg">
//             <h2 className="text-2xl font-semibold">Project 1 Name</h2>
//             <p className="text-gray-300 mt-2">
//               Subbi is a side project that I’ve built to help me keep track of how much
//               I spend on subscriptions and prevent the “accidental” bill after a trial ends.
//               It tracks bills like Netflix, Spotify, Xbox Game Pass, and more.
//             </p>

//             {/* Button */}
//             <div className="mt-4">
//               <button className="flex items-center border gap-2 border-gray-600 text-white rounded-lg hover:bg-gray-700 px-5 py-2 rounded-lg transition">
//                 Go To Live
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>


//         <div className="flex flex-col md:flex-row-reverse items-center gap-6 bg-gray-800 p-6 rounded-sm shadow-lg">
//           <img
//             src={Project_1_image}
//             alt="Project 1"
//             className="w-[224px] h-auto md:w-[300px] lg:w-[350px] rounded-lg"
//           />

//           <div className="flex flex-col justify-center max-w-lg">
//             <h2 className="text-2xl font-semibold">Project 1 Name</h2>
//             <p className="text-gray-300 mt-2">
//               Subbi is a side project that I’ve built to help me keep track of how much
//               I spend on subscriptions and prevent the “accidental” bill after a trial ends.
//               It tracks bills like Netflix, Spotify, Xbox Game Pass, and more.
//             </p>

//             {/* Button */}
//             <div className="mt-4">
//               <button className="flex items-center border gap-2 border-gray-600 text-white rounded-lg hover:bg-gray-700 px-5 py-2 rounded-lg transition">
//                 Go To Live
//                 <FaArrowRight />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Project;



import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import your project images
import Project_1_image from "/src/assets/freepik__upload__8902.png";

// Project Data Array
const projects = [
  {
    id: 1,
    name: "Subbi - Subscription Manager",
    description:
      "Subbi is a side project that helps track subscription expenses and prevent accidental charges after trials end.",
    image: Project_1_image,
    link: "#"
  },
  {
    id: 2,
    name: "Another Project",
    description:
      "This is another project that showcases my expertise in front-end development with React and animations.",
    image: Project_1_image,
    link: "#"
  },
  {
    id: 3,
    name: "Portfolio Website",
    description:
      "A sleek portfolio website built using React, Tailwind CSS, and Framer Motion animations.",
    image: Project_1_image,
    link: "#"
  },
  {
    id: 4,
    name: "Portfolio Website",
    description:
      "A sleek portfolio website built using React, Tailwind CSS, and Framer Motion animations.",
    image: Project_1_image,
    link: "#"
  },
  {
    id: 5,
    name: "Portfolio Website",
    description:
      "A sleek portfolio website built using React, Tailwind CSS, and Framer Motion animations.",
    image: Project_1_image,
    link: "#"
  },
  {
    id: 6,
    name: "Portfolio Website",
    description:
      "A sleek portfolio website built using React, Tailwind CSS, and Framer Motion animations.",
    image: Project_1_image,
    link: "#"
  }
];

export default function ProjectSlider() {
  return (
    <div className="w-full flex flex-col items-center text-cyan-50 py-10 bg-black">
      <h1 className="text-4xl font-bold mb-6">Projects</h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-5xl"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center">
            <div className="flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg max-w-sm text-center">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 flex items-center gap-2 border border-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Go To Live <FaArrowRight />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

