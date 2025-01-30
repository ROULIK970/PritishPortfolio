import React from 'react'
import { Link } from 'react-router-dom';
import "@fortawesome/fontawesome-free/css/all.min.css";

function Home() {

  const ImageUrl =
    "https://res.cloudinary.com/dhw65qkcs/image/upload/v1709716235/Yelpcamp/ezmd8ggekv2ctdetdxf7.jpg";

  const ResumeUrl =
    "https://1drv.ms/w/s!ArPJMb3SPFbvlArJRDJSHtZgEIXT?e=oOPjia";


  return (
    <div>
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Namaste! I'm Pritish Bordoloi
          </h1>
          <p className="mt-4 text-xl md:text-2xl">
            Full-Stack Developer | MERN Stack Developer
          </p>
          <p className="mt-6 text-gray-400">
            I specialize in creating user-friendly, dynamic, and responsive web
            applications.
          </p>
          <div className="mt-8 flex justify-center flex-col md:flex-row items-center gap-4">
            <Link
              to="/projects"
              className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="ml-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Contact Me
            </Link>
            <Link
              to="/chat"
              className="ml-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Chat With Me!
            </Link>
            <a
              href={ResumeUrl}
              className="ml-4 px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Resume
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            About Me
          </h2>
          <p className="mt-4 text-gray-600 text-center">
            My Name is Pritish Bordoloi and I am a Web Developer by profession
            and a part-time Table Tennis Coach by passion. That being said, I am
            a self-taught Developer or precisely, being taught by the likes of
            Colt Steele, Bob Ziroll and{" "}
            <a
              className="text-blue-600 hover:underline font-medium"
              href="https://hiteshchoudhary.com/"
            >
              Hitesh Choudhary
            </a>{" "}
            over the internet.I have started coding since after my graduation
            from BHU, initially learning HTML and CSS from Freedodecamp and then
            Udemy and hence forth built some personal projects of mine that you
            can view in{" "}
            <Link
              to="/projects"
              className="text-blue-600 hover:underline font-medium"
            >
              Projects
            </Link>
            .I have worked as a Junior FrontEnd Developer with Arity
            Technologies and worked on issues like button functionality bugs,
            page responsiveness etc. If you are looking for a dynamic, curious
            and a self-starter, who is willing to keep up with evolving
            tech-stack and who has a solid foundational knowedge of Javascript,
            kindly, HIRE ME!(or reach out to me.)
          </p>
          <div className="flex justify-center mt-8">
            <img
              src={ImageUrl}
              alt="Your Name"
              className="w-64 h-64 rounded shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Skills
          </h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <i className="fab fa-react text-5xl text-blue-600"></i>
              <p className="mt-2 text-gray-700">React</p>
            </div>
            <div className="text-center">
              <i className="fab fa-node-js text-5xl text-green-600"></i>
              <p className="mt-2 text-gray-700">Node.js</p>
            </div>
            <div className="text-center">
              <i className="fas fa-database text-5xl text-orange-600"></i>
              <p className="mt-2 text-gray-700">MongoDB</p>
            </div>
            <div className="text-center">
              <i className="fab fa-js text-5xl text-yellow-500"></i>
              <p className="mt-2 text-gray-700">JavaScript</p>
            </div>
            <div className="text-center">
              <i className="fas fa-server text-5xl text-gray-700"></i>
              <p className="mt-2 text-gray-700">Express</p>
            </div>
            <div className="text-center">
              <i className="fas fa-feather text-5xl text-teal-500"></i>
              <p className="mt-2 text-gray-700">Tailwind CSS</p>
            </div>
            <div className="text-center">
              <i className="fas fa-globe text-5xl text-black"></i>
              <p className="mt-2 text-gray-700">NextJs</p>
            </div>
            <div className="text-center">
              <i className="fab fa-react text-5xl text-purple-500"></i>
              <p className="mt-2 text-gray-700">Redux</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
