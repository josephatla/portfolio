import React, { useState, useEffect } from 'react';
import { ChevronDown, Code, Database, Globe, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Menu, X } from 'lucide-react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiC, SiDotnet, SiMysql, SiCucumber } from "react-icons/si";
import lordshopImage from "./assets/shop.jpg";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState({});

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const skills = [
    { name: 'HTML', icon: <FaHtml5 className="w-8 h-8 text-orange-500" /> },
    { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8 text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-yellow-400" /> },
    { name: 'React', icon: <FaReact className="w-8 h-8 text-cyan-400" /> },
    { name: 'Bootstrap', icon: <FaBootstrap className="w-8 h-8 text-purple-500" /> },
    { name: 'Python', icon: <FaPython className="w-8 h-8 text-blue-400" /> },
    { name: 'Java', icon: <FaJava className="w-8 h-8 text-red-600" /> },
    { name: 'C', icon: <SiC className="w-8 h-8 text-blue-600" /> },
    { name: '.NET', icon: <SiDotnet className="w-8 h-8 text-indigo-500" /> },
    { name: 'PHP', icon: <FaPhp className="w-8 h-8 text-indigo-400" /> },
    { name: 'MySQL', icon: <SiMysql className="w-8 h-8 text-blue-400" /> },
    { name: 'Cucumber', icon: <SiCucumber className="w-8 h-8 text-green-500" /> }
  ];

  const projects = [
    {
      title: 'FloraCare',
      description: 'FloraCare is a deep learning-powered web app that detects plant diseases from leaf images using TensorFlow, Flask, and React.',
      tech: ['React', 'Flask', 'TensorFlow', 'Python'],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=250&fit=crop',
      demo: 'https://github.com/josephatla/FloraCare/'
    },
    {
      title: 'LMS Code Refactoring',
      description: 'Improved the structure and readability of a Learning Management System through systematic code refactoring.',
      tech: ['Java', 'Refactoring', 'Clean Code'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop',
      demo: 'https://github.com/josephatla/AOL-Project-Kelompok-4'
    },
    {
      title: 'Lord Card Shop',
      description: 'A web app for managing card data, built with ASP.NET Web Forms and software design patterns for better structure.',
      tech: ['ASP.NET', 'C#', 'Web Forms', 'Design Patterns'],
      image: lordshopImage,
      demo: 'https://github.com/josephatla/Lord-Card-Shop'
    },
    {
      title: 'DiamondCut Motors',
      description: 'A premium car dealership website showcasing luxury vehicles using HTML, CSS, JS.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=250&fit=crop',
      demo: 'https://diamond-cut-motors-two.vercel.app/',
      github: 'https://github.com/josephatla/DiamondCut-Motors'
    },
    {
      title: 'Toyoda Fiberglass',
      description: 'A company website for fiberglass products, built with React to provide a modern and responsive user experience.',
      tech: ['React', 'JavaScript', 'Responsive Design', 'Corporate'],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop',
      demo: 'https://www.toyodafibreglass.com/'
    },
    {
      title: 'I-Tung Expense Tracker',
      description: 'A React-based web app for tracking income and expenses, helping users manage their personal finances with ease.',
      tech: ['React', 'JavaScript', 'Financial Management', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop',
      demo: 'https://i-tung-expense-tracker.vercel.app/',
      github: 'https://github.com/Brrendenn/I-Tung-Expense-Tracker'
    }
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              JosephatLA
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 hover:text-cyan-300 ${activeSection === section ? 'text-cyan-300 border-b-2 border-cyan-300' : ''
                    }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800 rounded-lg mt-2 p-4 animate-in slide-in-from-top duration-300">
              {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left py-2 capitalize hover:text-cyan-300 transition-colors"
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/20 to-blue-900/20"></div>
        <div className="text-center z-10 animate-in fade-in duration-1000">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent animate-in slide-in-from-bottom duration-1000 delay-300">
            Josephat Leviathan Andifa
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-in slide-in-from-bottom duration-1000 delay-500">
            Computer Science Student | Aspiring Software Engineer
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto px-4 animate-in slide-in-from-bottom duration-1000 delay-700">
            Passionate about software engineering and web development, solving problems with clean and efficient code
          </p>
          <div className="space-x-4 animate-in slide-in-from-bottom duration-1000 delay-1000">
            {/* View Work Button */}
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>

            {/* Get In Touch Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-gray-500 px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </button>

            {/* View CV Button */}
            <a
              href="/CV_Josephat Leviathan Andifa.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-400 to-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              View CV
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Hello! I'm <strong>Josephat Leviathan Andifa</strong>, a Computer Science student passionate about
                  software engineering and web development. I enjoy solving problems, creating clean and
                  efficient code, and continuously learning new technologies.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  My goal is to contribute to innovative projects that make a positive impact while growing as a
                  professional in the tech industry. I'm always eager to take on new challenges and expand my
                  knowledge in various programming languages and frameworks.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="text-2xl font-bold text-cyan-300">6+</div>
                    <div className="text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors">
                    <div className="text-2xl font-bold text-cyan-300">3+</div>
                    <div className="text-gray-400">Years Learning</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-sky-400 to-blue-600 rounded-full p-1">
                  <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
                      alt="Profile"
                      className="w-72 h-72 rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.skills ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-slate-800 p-6 rounded-lg flex items-center space-x-4 hover:bg-slate-700 transition-all duration-300 hover:scale-105 transform"
                >
                  {skill.icon}
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-slate-800 rounded-lg overflow-hidden hover:scale-105 transform transition-all duration-300 hover:shadow-xl group flex flex-col"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-sky-500/20 text-sky-300 rounded-full text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons pinned at bottom */}
                    <div className="mt-auto flex gap-2">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-gradient-to-r from-sky-400 to-blue-600 py-2 px-4 rounded-lg text-sm font-medium hover:scale-105 transform transition-all"
                        >
                          View Project
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 text-center bg-slate-700 py-2 px-4 rounded-lg text-sm font-medium hover:bg-slate-600 transition-all"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">

          {/* Left: Brand / Copyright */}
          <div>
            <h3 className="text-xl font-bold bg-gradient-to-r from-sky-400 to-blue-600 bg-clip-text text-transparent">
              JosephatLA
            </h3>
            <p className="text-gray-500 text-sm mt-2">
              © {new Date().getFullYear()} Josephat Leviathan Andifa. All rights reserved.
            </p>
            <br />
          </div>

          {/* Middle: Quick Links */}
          <div></div>

          {/* Right: Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Mail className="w-4 h-4" />
                <span>andifajose@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Phone className="w-4 h-4" />
                <span>+62 878-8394-3848</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a href="https://github.com/josephatla" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/josephat-leviathan-andifa-0476b8286/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-300 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
