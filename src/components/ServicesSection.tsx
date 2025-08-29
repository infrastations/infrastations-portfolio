import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cloud, Brain, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description: "We don't just write code; we build digital experiences. Clean architecture, user-centric design, and scalable performance.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    color: "text-primary",
    gradient: "from-primary/20 to-primary/5"
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "We are the architects of the digital world. Creating resilient, secure, and scalable cloud solutions from microservices to serverless architectures.",
    features: ["AWS & Azure", "Kubernetes", "DevOps & CI/CD", "Serverless Architecture"],
    color: "text-neon-cyan",
    gradient: "from-neon-cyan/20 to-neon-cyan/5"
  },
  {
    icon: Brain,
    title: "Agentic AI",
    description: "Building intelligent, self-learning systems that automate complex tasks and drive new insights for businesses.",
    features: ["Machine Learning", "Natural Language Processing", "Automation", "Predictive Analytics"],
    color: "text-secondary",
    gradient: "from-secondary/20 to-secondary/5"
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="group"
    >
      <div className={`card-neon h-full bg-gradient-to-br ${service.gradient} group-hover:scale-[1.02] transition-all duration-300`}>
        {/* Icon */}
        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <service.icon className={`w-8 h-8 ${service.color}`} />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient-primary transition-all duration-300">
          {service.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Features */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm">
              <div className={`w-2 h-2 rounded-full ${service.color} bg-current mr-2`} />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <Button 
          variant="ghost" 
          className={`group/btn w-full justify-between ${service.color} hover:bg-current/10`}
        >
          Learn More
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Button>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-primary/20 text-sm font-medium text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse-neon"></span>
            Our Core Services
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">What We </span>
            <span className="text-gradient-primary">Build</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Three core pillars of modern technology, delivered with excellence and innovation.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <Button 
            className="btn-hero"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Build Something Amazing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}