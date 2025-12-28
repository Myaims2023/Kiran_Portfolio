import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub, FaCode, FaTimes } from 'react-icons/fa';
import stationaryImg from "../assets/projects/stationary.png";
import fileSharingImg from "../assets/projects/File_Sharing.jpeg";
import autoVoltImg from "../assets/projects/AutoVolt.jpeg";


interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  category: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Stationary Management System',
      description: 'An e-commerce platform for managing and selling stationary products online',
      longDescription: 'A comprehensive stationary management system that allows users to browse, purchase, and manage stationary products. Features include product catalog, shopping cart, order tracking, and admin dashboard for inventory management.',
      technologies: ['Python', 'MongoDB', 'Django'],
      image: stationaryImg,
      liveUrl: 'https://aims-stationary.onrender.com/',
      githubUrl: 'https://github.com/Myaims2023/Stationary_Aims',
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'File Sharing System',
      description: 'A lightweight, privacy-focused web application designed to securely upload, encrypt, and share files with others using unique download links or QR codes. This project is ideal for learning and building real-world secure file-handling workflows.',
      longDescription: 'A powerful task management application with real-time collaboration features. Built using React, Socket.io, and Express.js. Includes team workspaces, deadline tracking, file sharing, and progress analytics.',
      technologies: ['Python', 'HTML', 'Css', 'MongoDB', 'QR-code Generation', 'AES Encyprtion'],
      image: fileSharingImg,
      liveUrl: 'https://github.com/Myaims2023/file-share-system/tree/main/shareflow-printlimit-main',
      githubUrl: 'https://github.com/Myaims2023/file-share-system/tree/main/shareflow-printlimit-main',
      category: 'frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A sleek weather dashboard providing real-time weather data and forecasts',
      longDescription: 'A responsive weather dashboard application that fetches real-time weather data from a public API. Features include current weather conditions, 7-day forecasts, and location search functionality. Built with React.js and styled with Tailwind CSS.',
      technologies: ['Node js', 'Weather API', 'React.js', 'Tailwind CSS'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      liveUrl: 'https://myaims2023.github.io/Weather_App/',
      githubUrl: 'https://github.com/Myaims2023/Weather_App',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'AutoVolt',
      description: 'AutoVolt is an automated Internet of Things (IoT)–based system designed to provide reliable, remote, and context-aware control of electrical devices. It empowers users to manage power delivery through a secure web interface, enabling seamless on/off control, scheduling, and monitoring of connected equipment.',
      longDescription: 'A complete restaurant management system with order processing, inventory tracking, staff management, and sales analytics. Built with React Native for tablet use and Node.js backend.',
      technologies: ['IoT', 'Arduino', 'Sensors', ' Embedded Systems', 'MongoDB', 'React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Granfana'],
      image: autoVoltImg,
      liveUrl: 'https://github.com/Myaims2023/AutoVolt',
      githubUrl: 'https://github.com/Myaims2023/AutoVolt',
      category: 'fullstack'
    },
    // {
    //   id: 5,
    //   title: 'Fitness Tracker API',
    //   description: 'RESTful API for fitness and workout tracking',
    //   longDescription: 'A robust RESTful API for fitness applications with user authentication, workout logging, progress tracking, and social features. Includes comprehensive documentation and rate limiting.',
    //   technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    //   image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   category: 'backend'
    // },
    // {
    //   id: 6,
    //   title: 'Portfolio Website',
    //   description: 'Responsive portfolio site with modern animations',
    //   longDescription: 'A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations, dark mode toggle, contact form integration, and optimized performance.',
    //   technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'Netlify'],
    //   image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    //   liveUrl: 'https://example.com',
    //   githubUrl: 'https://github.com',
    //   category: 'frontend'
    // }
  ];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Check out my work on GitHub
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="wait">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className="glass-card p-6 interactive-card group cursor-pointer"
                onClick={() => setSelectedProject(project)}
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4">
                    <motion.button
                      className="flex items-center space-x-2 text-primary hover:text-primary-glow transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      <FaCode />
                      <span className="font-medium">View Details</span>
                    </motion.button>

                    <div className="flex space-x-3">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass-card hover:glow-primary transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-primary" />
                      </motion.a>

                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 glass-card hover:glow-primary transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-primary" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-bold gradient-text">
                    {selectedProject.title}
                  </h3>
                  <motion.button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaTimes className="text-muted-foreground" />
                  </motion.button>
                </div>

                {/* Project Image */}
                <div className="mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Project Description */}
                <div className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedProject.longDescription}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 text-sm font-medium bg-gradient-primary text-primary-foreground rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6">
                    <motion.a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-primary text-primary-foreground rounded-lg font-semibold glow-primary hover:shadow-elevated transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaExternalLinkAlt />
                      <span>View Live Project</span>
                    </motion.a>

                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 px-6 py-3 glass-card border border-glass-border text-foreground rounded-lg font-semibold hover:glow-secondary transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      <FaGithub />
                      <span>View Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;