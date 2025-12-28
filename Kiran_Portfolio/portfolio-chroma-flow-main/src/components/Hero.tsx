import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';
import heroImage from '@/assets/hero-bg.jpg';
import profileImage from '@/assets/profile.jpg';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-32"
    >
      {/* 3D Background */}
      <ThreeBackground />

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Hero Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
            }}
            animate={{
              y: [null, -window.innerHeight],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-mono text-primary mb-4 text-lg"
            >
              Hello, I'm
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="gradient-text">Kiran Raj.R</span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl font-light text-muted-foreground mb-8"
            >
              MCA Graduate
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Passionate about AWS Cloud Services, Cyber Security, and Computer Networking. 
              Building secure and scalable solutions with cutting-edge technology.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-gradient-primary text-primary-foreground rounded-lg font-semibold glow-primary hover:shadow-elevated transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.button>
              
              <motion.a
                href="#contact"
                className="px-8 py-4 glass-card text-foreground rounded-lg font-semibold border border-glass-border hover:glow-secondary transition-all duration-300 text-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full overflow-hidden glass-card glow-primary animate-float"
                whileHover={{ scale: 1.05 }}
              >
                <img 
                  src={profileImage}
                  alt="Kiran Raj.R"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating Tech Icons */}
              <motion.div
                className="absolute -top-4 -left-4 p-3 glass-card rounded-lg animate-pulse-glow"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-primary font-mono">AWS</span>
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -right-4 p-3 glass-card rounded-lg animate-pulse-glow"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <span className="text-secondary font-mono">Security</span>
              </motion.div>
              
              <motion.div
                className="absolute top-1/2 -right-12 p-3 glass-card rounded-lg animate-pulse-glow"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-accent font-mono">Networking</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToProjects}
          className="flex flex-col items-center text-primary hover:text-primary-glow transition-colors duration-300"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-mono mb-2">Scroll to explore</span>
          <FaArrowDown className="text-xl" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;