import React, { useState, useEffect } from 'react';
import { Mail, Github, Instagram } from 'lucide-react';

const Portfolio = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [activePricing, setActivePricing] = useState('starter');
  const [isVisible, setIsVisible] = useState({});

  const fullText = "Hello, I am Koustubh, a Professional Video Editor and Web Developer";

  // Define skills array inside the component
  const skills = [
    { name: "HTML", icon: "⚛️", category: "Web Development" },
    { name: "CSS", icon: "📘", category: "Web Development" },
    { name: "JavaScript", icon: "📜", category: "Web Development" },
    { name: "Node.js", icon: "🟢", category: "Web Development" },
    { name: "React", icon: "⚛️", category: "Web Development" },
    { name: "TypeScript", icon: "🔷", category: "Web Development" },
    { name: "Premiere Pro", icon: "🎬", category: "Video Editing" },
    { name: "After Effects", icon: "✨", category: "Video Editing" },
    { name: "Photoshop", icon: "🎥", category: "Video Editing" },
    { name: "Davinci Resolve", icon: "🎞️", category: "Video Editing" }

  ];

  const projects = [
    { title: "Random Password Generator", description: "Built using HTML, CSS, JS", link: "#" },
    { title: "Task Management App", description: "MERN Stack Application", link: "#" },
    { title: "MLSA Hackolycapse Project", description: "HTML, CSS, JS", link: "https://github.com/koustubh-v/MLSA-Hackocalypse" }
  ];

  const pricingPlans = {
    starter: {
      title: "Starter",
      price: "$25",
      features: ["Basic Video Editing", "Up to 1 minutes", "2 Revisions", "1080p Quality", "Basic Color Grading"]
    },
    basic: {
      title: "Basic",
      price: "$100",
      features: ["Advanced Editing", "Up to 5 minutes", "5 Revisions", "4k Quality", "Advanced Color Grading"]
    },
    custom: {
      title: "Custom",
      price: "10$ Per Minute",
      features: ["Premium Editing", "Flexible Duration", "Unlimited Revisions", "4K Quality", "Advanced Color Grading"]
    }
  };

  useEffect(() => {
    let currentText = '';
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentText += fullText[currentIndex];
        setDisplayedText(currentText);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        setIsVisible(prev => ({ ...prev, [el.id]: isVisible }));
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 min-h-[120px]">
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
          <div className="animate-bounce">
            <a href="#skills" className="text-blue-400 hover:text-blue-300">
              Scroll Down ↓
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800 rounded-xl p-6 transform transition-all duration-500 hover:scale-110 hover:-translate-y-2"
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-20 transition-all duration-500"></div>

                {/* Glowing border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500 rounded-xl transition-all duration-500 group-hover:glow"></div>

                {/* Content with floating animation */}
                <div className="relative z-10 text-center transition-all duration-500 group-hover:transform group-hover:translate-y-[-5px]">
                  <div className="text-3xl mb-3 transform transition-all duration-500 group-hover:scale-110">
                    {skill.icon}
                  </div>
                  <div className="text-lg font-semibold group-hover:text-blue-400 transition-all duration-500">
                    {skill.name}
                  </div>
                  <div className="mt-2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    {skill.category}
                  </div>
                </div>

                {/* Animated corner accents */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
                <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-transparent group-hover:border-blue-400 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections remain the same... */}
      {/* Projects Section */}
      <section id="projects" className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Web Development Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-on-scroll bg-gray-900 rounded-lg p-6 transform transition-all duration-500 hover:scale-105 hover:bg-gray-800"
                style={{
                  opacity: isVisible[`project-${index}`] ? 1 : 0,
                  transform: `translateY(${isVisible[`project-${index}`] ? '0' : '20px'})`,
                  transition: 'all 0.5s ease-out'
                }}
                id={`project-${index}`}
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-400 hover:text-blue-300">View Project →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="video" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Video Editing Portfolio</h2>
          <div className="aspect-w-16 aspect-h-9 transform transition-all duration-500 hover:scale-105">
            <iframe
              className="w-full h-96 rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/6kYRUsXtS4s"
              title="Portfolio Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Video Editing Pricing</h2>
          <div className="flex justify-center mb-8">
            <div className="flex gap-4 bg-gray-900 p-2 rounded-lg">
              {Object.keys(pricingPlans).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setActivePricing(plan)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${activePricing === plan
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700'
                    }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-900 p-8 rounded-lg w-full max-w-md transform transition-all duration-500 hover:scale-105">
              <h3 className="text-2xl font-bold mb-4">{pricingPlans[activePricing].title}</h3>
              <p className="text-4xl font-bold mb-6">{pricingPlans[activePricing].price}</p>
              <ul className="space-y-3">
                {pricingPlans[activePricing].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400">Contact Me</h2>
          <form className="max-w-lg mx-auto space-y-6">
            <div className="transform transition-all duration-300 hover:scale-105">
              <label className="block mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <label className="block mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:outline-none"
                required
              />
            </div>
            <div className="transform transition-all duration-300 hover:scale-105">
              <label className="block mb-2">Message</label>
              <textarea
                className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-400 focus:outline-none h-32"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/koustubh-v/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform transition-all duration-300 hover:scale-125"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="mailto:hp.koustubh@gmail.com"
              className="text-gray-400 hover:text-white transform transition-all duration-300 hover:scale-125"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/koustubh._.07/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transform transition-all duration-300 hover:scale-125"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-gray-400 mt-4">© 2024 Koustubh. All rights reserved.</p>
        </div>
      </footer>


      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;