import { motion } from 'framer-motion';

interface Skill {
  name: string;
  category: string;
}

const Skills = () => {
  const skills: Skill[] = [
    // Technical Skills
    { name: 'Azure Fundamentals', category: 'Technical' },
    { name: 'Computer Networking', category: 'Technical' },
    { name: 'N8N Automation', category: 'Technical' },
    { name: 'Docker', category: 'Technical' },
    { name: 'CI/CD', category: 'Technical' },
    { name: 'Git', category: 'Technical' },
    { name: 'GitHub', category: 'Technical' },
    { name: 'Linux', category: 'Technical' },
    { name: 'Prompt Engineering', category: 'Technical' },
    { name: 'DevOps', category: 'Technical' },
    { name: 'Rag & LLMs', category: 'Technical' },

    // Non-Technical Skills
    { name: 'Project Management', category: 'Non-Technical' },
    { name: 'Team Collaboration', category: 'Non-Technical' },
    { name: 'Problem Solving', category: 'Non-Technical' },
    { name: 'Communication', category: 'Non-Technical' },
    { name: 'Documentation', category: 'Non-Technical' },
    { name: 'Time Management', category: 'Non-Technical' },
  ];

  const categories = ['Technical', 'Non-Technical'];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills across various domains
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category}
                </h3>
                
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {categorySkills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="px-4 py-3 bg-background/50 rounded-lg border border-border hover:border-primary transition-colors"
                    >
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;