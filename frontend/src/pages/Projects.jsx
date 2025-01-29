import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

function Projects() {
  const projects = [
    {
      title: "Yelpcamp",
      subtitle: "MEN Stack",
      description:
        "A comprehensive camping experience app that helps outdoor enthusiasts discover and review campgrounds, share their camping adventures, and connect with like-minded nature lovers.",
      image:
        "https://res.cloudinary.com/dhw65qkcs/image/upload/v1709185923/Yelpcamp/gweznshj7vuudzaqxelu.png",
      link: "https://yelpcamp-5-mwiz.onrender.com",
      github: "https://github.com/ROULIK970/yelpcamp",
    },
    {
      title: "Go Food app",
      subtitle: "MERN stack",
      description:
        "An innovative food delivery app that brings your favorite cuisines right to your doorstep. Explore a variety of restaurants, order with ease, and enjoy delicious meals in the comfort of your home.",
      image:
        "https://res.cloudinary.com/dhw65qkcs/image/upload/v1709714777/Yelpcamp/i5s73kt88cnbdx2ccr2v.png",
      link: "https://go-food-mern-three.vercel.app",
      github: "https://github.com/ROULIK970/GoFood",
    },
    {
      title: "Tenzies",
      subtitle: "React and Javascript",
      description:
        " A productivity app designed to streamline your to-do lists and tasks. Tenzies helps you organize your day, set priorities, and achieve your goals efficiently, making productivity a breeze.",
      image:
        "https://res.cloudinary.com/dhw65qkcs/image/upload/v1709270286/Yelpcamp/pnabcotfdsmux1numc2x.png",
      link: "https://candid-daffodil-bc8876.netlify.app",
      github: "https://github.com/ROULIK970/Tenzies-Game",
    },
    {
      title: "Quiziccal",
      subtitle: "React and Javascript",
      description:
        "Engage your mind with Quizzical, a fun and educational quiz app. Test your knowledge on a wide range of topics, challenge your friends, and learn new facts in an interactive and entertaining way.",
      image:
        "https://res.cloudinary.com/dhw65qkcs/image/upload/v1709270624/Yelpcamp/okldla3zqcb9iclh8aci.png",
      link: "https://genuine-selkie-f7fe11.netlify.app/quiz",
      github: "https://github.com/ROULIK970/Quiziccal",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          My Projects
        </h2>
        <Swiper
          pagination={{ dynamicBullets: true }}
          navigation
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <a href={project.link} key={project.image} className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Projects;
