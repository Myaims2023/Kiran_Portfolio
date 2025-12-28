import { motion } from 'framer-motion';
import { FaAws, FaShieldAlt, FaNetworkWired, FaCertificate } from 'react-icons/fa';

const Certifications = () => {
  const certifications = [
    {
      title: 'AZ900',
      issuer: 'Azure',
      icon: FaAws,
      year: '2026',
      description: 'Fundamental certification covering core Azure services, cloud concepts, and security.',
      achievements: ['Cloud Concepts','Core Azure Services','Security and Compliance']
    },
    {
      title: 'Data Visualization',
      issuer: 'Infosys Springboard',
      icon: FaCertificate,
      year: '2025',
      description: 'Certification in data visualization techniques and tools to effectively present data insights.',
      achievements: ['Data Presentation Techniques','Visualization Tools (Tableau, Power BI)','Dashboard Design Principles']
    },
    {
      title: 'Advance Excel & Power BI',
      issuer: 'Aims School Of IT',
      icon: FaCertificate,
      year: '2025',
      description: 'Certification in advanced Excel functions and Power BI for data analysis and visualization.',
      achievements: ['Advanced Excel Functions','Power BI Data Modeling','Interactive Report Creation']
    },
    {
      title: 'MCSA',
      issuer: 'Microsoft',
      icon: FaAws,
      year: '2024',
      description: 'Professional certification demonstrating expertise in designing distributed systems on AWS.',
      achievements: ['Associate Level Certification','Cloud Architecture Design','Security & Compliance Best Practices']
    },
    {
      title: 'MCSE',
      issuer: 'Microsoft',
      icon: FaShieldAlt,
      year: '2024',
      description: 'Professional certification in ethical hacking and penetration testing methodologies.',
      achievements: ['Penetration Testing Techniques','Vulnerability Analysis','Security Testing Methodologies']
    },
    {
      title: 'N+',
      issuer: 'Emind Technologies',
      icon: FaNetworkWired,
      year: '2023',
      description: 'Certification covering network fundamentals, routing, switching, and network security.',
      achievements: ['Network Configuration','Routing Protocols','Network Security Fundamentals']
    },
    
    
  ];

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="certifications" className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Professional Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications that validate my skills and knowledge in various technical domains.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 
            w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-primary 
                    rounded-full transform -translate-x-1/2 border-4 border-background z-10" />

                  {/* Content Card */}
                  <motion.div
                    className={`glass-card p-6 ml-16 md:ml-0 md:w-5/12 ${
                      index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    {/* Header */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 glass-card rounded-lg text-secondary">
                        <Icon className="text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                        <p className="text-primary font-medium mb-2">{cert.issuer}</p>
                        <p className="text-sm text-muted-foreground font-mono">{cert.year}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4 leading-relaxed">{cert.description}</p>

                    {/* Achievements */}
                    {cert.achievements && (
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Areas:</h4>
                        <ul className="space-y-1">
                          {cert.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="mt-4">
                      <span className="px-3 py-1 text-xs font-medium rounded-full border 
                        bg-secondary/10 text-secondary border-secondary/20">
                        Certification
                      </span>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
