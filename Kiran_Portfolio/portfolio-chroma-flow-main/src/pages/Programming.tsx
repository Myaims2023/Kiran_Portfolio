import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaJsSquare, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Programming = () => {
  const programmingSkills = [
    {
      icon: FaJsSquare,
      title: 'JavaScript/TypeScript',
      description: 'Modern ES6+, TypeScript, Async/Await, Promises',
    },
    {
      icon: FaReact,
      title: 'React Development',
      description: 'Hooks, Context API, State Management, Component Design',
    },
    {
      icon: FaNodeJs,
      title: 'Node.js & Backend',
      description: 'Express, REST APIs, Authentication, Middleware',
    },
    {
      icon: FaPython,
      title: 'Python',
      description: 'Scripting, Automation, Data Processing',
    },
    {
      icon: FaDatabase,
      title: 'Databases',
      description: 'SQL, PostgreSQL, MongoDB, Database Design',
    },
    {
      icon: FaGitAlt,
      title: 'Version Control',
      description: 'Git, GitHub, Branching Strategies, Collaboration',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            <span className="gradient-text">Programming & Development</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Full-stack development skills with modern frameworks and technologies
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programmingSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="glass-card h-full hover:glow-primary transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="p-3 glass-card rounded-lg text-accent">
                          <Icon className="text-2xl" />
                        </div>
                        <CardTitle className="text-xl">{skill.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {skill.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programming;
