import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram} from 'lucide-react';

const Portfolio = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [activePricing, setActivePricing] = useState('starter');
  const [isVisible, setIsVisible] = useState({});

  const fullText = "Hello, I am Koustubh, a Professional Video Editor and Web Developer";

  // Skills array
  const skills = [
    { name: "Premiere Pro", icon: "🎬", category: "Video Editing", color: "from-purple-600 to-pink-500" },
    { name: "After Effects", icon: "✨", category: "Video Editing", color: "from-blue-500 to-purple-500" },
    { name: "DaVinci Resolve", icon: "🎥", category: "Video Editing", color: "from-pink-500 to-red-500" },
    { name: "React", icon: "⚛️", category: "Web Development", color: "from-blue-500 to-cyan-500" },
    { name: "Node.js", icon: "🟢", category: "Web Development", color: "from-green-500 to-emerald-500" },
    { name: "MongoDB", icon: "🍃", category: "Web Development", color: "from-emerald-500 to-green-500" }
  ];

  const projects = [
    { title: "Random Password Generator", description: "Built using HTML, CSS, JS", link: "#" },
    { title: "Task Management App", description: "MERN Stack Application", link: "#" },
    { title: "MLSA Hackolycapse Project", description: "HTML, CSS, JS", link: "https://github.com/koustubh-v/MLSA-Hackocalypse" }
  ];

  // Added pricingPlans definition
  const pricingPlans = {
    starter: {
      title: "Basic Package",
      price: "₹2000",
      features: [
        "Basic Video Editing", "Up to 1 minutes", "2 Revisions", "1080p Quality", "Basic Color Grading"
      ]
    },
    basic: {
      title: "Pro Package",
      price: "₹8000",
      features: [
        "Advanced Editing", "Up to 5 minutes", "5 Revisions", "4k Quality", "Advanced Color Grading"
      ]
    },
    custom: {
      title: "Premium Package",
      price: "Contact for Details",
      features: [
        "Premium Editing", "Flexible Duration", "Unlimited Revisions", "4K Quality", "Advanced Color Grading"
      ]
    }
  };

  // Smooth scroll function
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
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
        <div className="text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 min-h-[120px]">
            {displayedText}
            <span className="animate-blink">|</span>
          </h1>
          <button
            onClick={scrollToContact}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-semibold
                     transform transition-all duration-500 hover:scale-110 hover:shadow-lg
                     hover:shadow-blue-500/50 animate-pulse hover:animate-none"
          >
            Let's Work Together
          </button>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden bg-gray-800 rounded-xl p-4 transform 
                         transition-all duration-500 hover:scale-105 hover:-translate-y-1"
              >
                {/* Animated gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 
                              group-hover:opacity-20 transition-all duration-500`}></div>

                <div className="relative z-10 flex items-center space-x-3">
                  <div className="text-3xl group-hover:scale-110 transition-all duration-500">
                    {skill.icon}
                  </div>
                  <div>
                    <div className="font-semibold group-hover:text-blue-400 transition-all duration-300">
                      {skill.name}
                    </div>
                    <div className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 
                                  transition-all duration-300 absolute">
                      {skill.category}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Portfolio Section */}
      <section id="video" className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Video Editing Portfolio</h2>
          <div className="group aspect-w-16 aspect-h-9 transform transition-all duration-500 hover:scale-105">
            <iframe
              className="w-full h-96 rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/6kYRUsXtS4s"
              title="Portfolio Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 
                          group-hover:opacity-50 transition-all duration-500"></div>
          </div>
        </div>
      </section>






      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Video Editing Pricing</h2>
          <div className="flex justify-center mb-8">
            <div className="flex gap-4 bg-gray-800 p-2 rounded-full">
              {Object.keys(pricingPlans).map((plan) => (
                <button
                  key={plan}
                  onClick={() => setActivePricing(plan)}
                  className={`px-6 py-2 rounded-full transition-all duration-500 
                            transform hover:scale-105 ${activePricing === plan
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                      : 'bg-gray-700 hover:bg-gray-600'
                    }`}
                >
                  {plan.charAt(0).toUpperCase() + plan.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-gray-800 p-8 rounded-lg w-full max-w-md transform transition-all duration-500 
                          hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
              <h3 className="text-2xl font-bold mb-4">{pricingPlans[activePricing].title}</h3>
              <p className="text-4xl font-bold mb-6 text-blue-400">{pricingPlans[activePricing].price}</p>
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

      {/* Projects Section */}
      <section id="projects" className="py-16 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Web Development Projects</h2>
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

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold mb-8 text-blue-400 text-center">Connect with Me</h2>
    <p className="text-lg text-white text-center mb-8">Mail Us at: <a href="mailto:codesalpha92@gmail.com" className="text-yellow-400">codesalpha92@gmail.com</a></p>
    <div className="flex flex-wrap justify-center gap-6">
      {[
        {
          name: "Github",
          href: "https://github.com/koustubh-v",
          logo: <Github className="w-12 h-12 text-white" />, // Replace with your actual GitHub icon component
        },
        {
          name: "LinkedIn",
          href: "https://www.linkedin.com/in/koustubh-verma/",
          logo: <Linkedin className="w-12 h-12 text-blue-500" />, // Replace with your actual LinkedIn icon component
        },
        {
          name: "Instagram",
          href: "https://www.instagram.com/koustubh._.07/",
          logo: <Instagram className="w-12 h-12 text-pink-500" />, // Replace with your actual Instagram icon component
        },
      ].map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-4 bg-gray-800 rounded-lg transform transition-all duration-300 hover:scale-105 shadow-md hover:shadow-blue-500/50 flex items-center space-x-4"
        >
          <div>{social.logo}</div>
          <span className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
            {social.name}
          </span>
        </a>
      ))}
    </div>
  </div>
</section>





      {/* Footer */}
      <footer className="bg-black py-8">
  <div className="max-w-6xl mx-auto px-6">
    <p className="text-center text-gray-400">© 2024 Koustubh. All rights reserved.</p>
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
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;