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
    <div className="w-full flex flex-col items-center text-white py-10 ">
      <h1 className="text-5xl font-bold mb-6">Projects</h1>

      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          360: { slidesPerView: 1 },
          641: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }}
        centeredSlides={false}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: false,
        el: '.custom-pagination', 
         }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-5xl "
      >

        {/* <div className="custom-pagination   bg-[#181818]  flex felx-row  justify-center justify-items-center "></div>  */}
        
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center">
            <div className="flex flex-col items-center    bg-[#141414] border border-gray-700 p-6 rounded-xl shadow-lg max-w-sm text-center">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-semibold mt-4">{project.name}</h2>
              <p className="text-gray-300 mt-2">{project.description}</p>
              <a
                href={project.link}
                className="mt-4 flex items-center gap-2 border-solid border border-[#383737] text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
              >
                Visit Site <FaArrowRight />
              </a>
              
             
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

//gray-800 