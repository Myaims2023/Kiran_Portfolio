import { motion } from 'framer-motion';
import { FaNetworkWired, FaServer, FaShieldAlt, FaProjectDiagram, FaWifi, FaCogs } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Networking = () => {
  const networkingSkills = [
    {
      icon: FaNetworkWired,
      title: 'Network Protocols',
      description: 'TCP/IP, DNS, DHCP, HTTP/HTTPS, FTP, SSH',
    },
    {
      icon: FaProjectDiagram,
      title: 'Network Design',
      description: 'LAN/WAN, Subnetting, VLANs, Network Topology',
    },
    {
      icon: FaServer,
      title: 'Routing & Switching',
      description: 'OSPF, BGP, RIP, Layer 2/3 Switching',
    },
    {
      icon: FaShieldAlt,
      title: 'Network Security',
      description: 'Firewalls, VPN, ACLs, Network Segmentation',
    },
    {
      icon: FaWifi,
      title: 'Wireless Networks',
      description: 'Wi-Fi Standards, Access Points, Network Coverage',
    },
    {
      icon: FaCogs,
      title: 'Network Management',
      description: 'Monitoring, Troubleshooting, Performance Optimization',
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
            <span className="gradient-text">Network Administration</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
          >
            Comprehensive networking skills including design, implementation, and security
          </motion.p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {networkingSkills.map((skill, index) => {
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
                        <div className="p-3 glass-card rounded-lg text-secondary">
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

export default Networking;
