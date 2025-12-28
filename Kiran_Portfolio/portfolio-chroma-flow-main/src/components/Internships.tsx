import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const internships = [
  {
    title: "AutoVolt Intern",
    company: "Aims School of IT", 
    location: "Bengaluru, India",
    duration: "10/8/2025 - 16/11/2025",
    description: "AutoVolt is an automated Internet of Things (IoT)–based system designed to provide reliable, remote, and context-aware control of electrical devices. It empowers users to manage power delivery through a secure web interface, enabling seamless on/off control, scheduling, and monitoring of connected equipment.",
    technologies: ["IoT", "Arduino", "Sensors"," Embedded Systems","MongoDB", "React.js", "Node.js", "Express.js", "Tailwind CSS", "Granfana",]
  },
  {
    title: "Cloud Computing Intern",
    company: "Tech MindSparc Solutions Pvt Ltd",
    location: "Bengaluru, India",
    duration: "10/9/2024 - 10/12/2024",
    description: "Worked on cloud infrastructure management, deployment automation, and cost optimization strategies. Gained hands-on experience with AWS services and DevOps tools.",
    technologies: ["AWS EC2", "Virtual Machines"]
  },
  {
    title: "NLP Intern",
    company: "Infosys Springboard",
    location: "Bengaluru, India",
    duration: "25/08/2024 - 31/12/2024",
    description: "Focused on natural language processing tasks including text classification, sentiment analysis, and chatbot development. Utilized libraries such as NLTK and spaCy for various NLP projects.",
    technologies: ["Python", "NLTK", "spaCy"]
  },
  {
    title: "Web Development Intern",
    company: "CSI IT Services",
    location: "Bengaluru, India",
    duration: "13/11/2025 - 24/12/2025",
    description: "Contributed to front-end and back-end web development projects using modern frameworks. Developed responsive web applications and collaborated with cross-functional teams to enhance user experience.",
    technologies: ["React.js", "Node.js", "MongoDB"]
  }
];

const Internships = () => {
  return (
    <section id="internships" className="min-h-screen py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Internship Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional experience and hands-on learning opportunities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((internship, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-elevated transition-all duration-300 border-border/50 hover:border-primary/50">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <FaBriefcase className="text-primary text-2xl" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{internship.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-foreground">
                    {internship.company}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-muted-foreground text-sm space-x-4">
                    <div className="flex items-center space-x-2">
                      <FaCalendar className="text-primary" />
                      <span>{internship.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaMapMarkerAlt className="text-primary" />
                      <span>{internship.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {internship.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;
