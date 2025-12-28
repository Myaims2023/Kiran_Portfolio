import { motion } from 'framer-motion';
import { FaAws, FaCloud, FaServer, FaDatabase, FaShieldAlt, FaNetworkWired } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Cloud = () => {
  const cloudServices = [
    {
      icon: FaAws,
      title: 'AWS Services',
      description: 'EC2, S3, Lambda, RDS, VPC, CloudFront, Route53',
    },
    {
      icon: FaServer,
      title: 'Infrastructure',
      description: 'Auto Scaling, Load Balancers, Elastic Beanstalk',
    },
    {
      icon: FaDatabase,
      title: 'Database',
      description: 'DynamoDB, RDS, Aurora, ElastiCache',
    },
    {
      icon: FaShieldAlt,
      title: 'Security',
      description: 'IAM, Security Groups, KMS, WAF',
    },
    {
      icon: FaCloud,
      title: 'Deployment',
      description: 'CI/CD Pipelines, CodeDeploy, CloudFormation',
    },
    {
      icon: FaNetworkWired,
      title: 'Networking',
      description: 'VPC, Subnets, NAT Gateway, VPN',
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
            <span className="gradient-text">Cloud Computing</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Expertise in AWS cloud infrastructure, deployment, and management
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudServices.map((service, index) => {
              const Icon = service.icon;
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
                        <div className="p-3 glass-card rounded-lg text-primary">
                          <Icon className="text-2xl" />
                        </div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground">
                        {service.description}
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

export default Cloud;
