import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt } from 'react-icons/fa';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  type: 'degree' | 'certification' | 'course';
  achievements?: string[];
}

const Education = () => {
  const education: EducationItem[] = [
    {
      id: 1,
      degree: 'Master of Computer Applications (MCA)',
      institution: 'Aims Institutes, Bangalore',
      duration: '2023 - 2025',
      description: 'Postgraduate program focusing on advanced computer science topics, software development, and cloud computing.',
      type: 'degree',
      achievements: [
        'AutoVolt Project',
        'Aquaponics System',
        'Stationary Management System',
        'Iot Trainer',
      ]
    },
    {
      id: 2,
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'MS Ramaiah Arts Science & Commerce College, Bangalore',
      duration: '2020 - 2023',
      description: 'Undergraduate program covering core computer science concepts, programming, and software development practices.',
      type: 'degree',
      achievements: [
        'Cyber Security Introduction',
        'Network Security Projects'
      ]
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'degree': return <FaGraduationCap className="text-2xl" />;
      case 'certification': return <FaCertificate className="text-2xl" />;
      case 'course': return <FaCalendarAlt className="text-2xl" />;
      default: return <FaGraduationCap className="text-2xl" />;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case 'degree': return 'text-primary';
      case 'certification': return 'text-secondary';
      case 'course': return 'text-accent';
      default: return 'text-primary';
    }
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="education" className="py-20 bg-background-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Academic background and certifications that have shaped my technical expertise
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
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-primary transform md:-translate-x-1/2" />

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-primary rounded-full transform -translate-x-1/2 border-4 border-background z-10" />

                <motion.div
                  className={`glass-card p-6 ml-16 md:ml-0 md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div className="flex items-start space-x-4 mb-4">
                    <div className={`p-3 glass-card rounded-lg ${getColorClass(item.type)}`}>
                      {getIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.degree}</h3>
                      <p className="text-primary font-medium mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground font-mono">{item.duration}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>

                  {item.achievements && (
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {item.achievements.map((ach, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3" /> {ach}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                      item.type === 'degree'
                        ? 'bg-primary/10 text-primary border-primary/20'
                        : item.type === 'certification'
                        ? 'bg-secondary/10 text-secondary border-secondary/20'
                        : 'bg-accent/10 text-accent border-accent/20'
                    }`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                </motion.div>

                <div className="hidden md:block md:w-5/12" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
