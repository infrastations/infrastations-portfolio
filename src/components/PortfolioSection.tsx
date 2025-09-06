import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Import images
import hybridCloudMigrationImg from '@/assets/hybrid-cloud-migration.jpg';
import multiCloudKubernetesImg from '@/assets/multi-cloud-kubernetes.jpg';
import disasterRecoveryImg from '@/assets/disaster-recovery.jpg';
import serverlessArchitectureImg from '@/assets/serverless-architecture.jpg';
import mlopsplatformImg from '@/assets/mlops-platform.jpg';
import finopsPlatformImg from '@/assets/finops-platform.jpg';
import dataLakePlatformImg from '@/assets/data-lake-platform.jpg';
import securityComplianceImg from '@/assets/security-compliance.jpg';
import legacyModernizationImg from '@/assets/legacy-modernization.jpg';
import iotPlatformImg from '@/assets/iot-platform.jpg';
import techAbstractImg from '@/assets/tech-abstract.jpg';
import cloudInfrastructureImg from '@/assets/cloud-infrastructure.jpg';
import heroBgImg from '@/assets/hero-bg.jpg';

const projects = [
  {
    id: 1,
    title: "Hybrid Cloud Migration Platform",
    category: "Cloud Infrastructure",
    description: "Automated platform for migrating on-premises applications and data to hybrid cloud environments with comprehensive management capabilities.",
    technologies: ["Azure Stack HCI", "AWS Outposts", "Terraform", "Kubernetes", "PowerShell"],
    image: hybridCloudMigrationImg,
    results: ["75% faster migrations", "Zero downtime transitions", "50% cost optimization"],
    problem: "Enterprise needed seamless migration from on-premises to hybrid cloud while maintaining operational continuity and managing complex dependencies.",
    solution: "Developed automated discovery and dependency mapping platform with cost analysis engine, providing single pane of glass for hybrid resource management including monitoring, security, and governance.",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Multi-Cloud Kubernetes PaaS",
    category: "Cloud Infrastructure",
    description: "Custom Platform as a Service built on Kubernetes operating across multiple cloud providers with unified management.",
    technologies: ["AWS EKS", "Google GKE", "Azure AKS", "Istio", "ArgoCD", "Prometheus"],
    image: multiCloudKubernetesImg,
    results: ["90% deployment consistency", "60% faster time-to-market", "Unified multi-cloud ops"],
    problem: "Development teams struggled with inconsistent deployments across different cloud providers, lacking centralized management and standardization.",
    solution: "Created abstracted control plane that enables consistent application deployment to any cloud provider, including centralized logging, monitoring, CI/CD pipelines, and service mesh for inter-service communication.",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Automated Disaster Recovery System",
    category: "Cloud Infrastructure",
    description: "Fully automated disaster recovery solution for mission-critical applications with intelligent failover capabilities.",
    technologies: ["Terraform", "Ansible", "AWS", "Azure", "Jenkins", "Python"],
    image: disasterRecoveryImg,
    results: ["99.99% availability", "< 5 min recovery time", "Zero data loss guarantee"],
    problem: "Mission-critical applications required bulletproof disaster recovery with minimal human intervention and guaranteed business continuity.",
    solution: "Designed automated failover and failback processes using Infrastructure as Code to replicate entire production environments, with runbook automation system orchestrating recovery with minimal human intervention.",
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Enterprise Serverless Architecture",
    category: "Cloud Infrastructure",
    description: "Blueprint and reusable components for building complex, event-driven serverless applications at enterprise scale.",
    technologies: ["AWS Lambda", "Azure Functions", "API Gateway", "DynamoDB", "EventBridge"],
    image: serverlessArchitectureImg,
    results: ["80% cost reduction", "Infinite scalability", "Sub-second response times"],
    problem: "Enterprise needed scalable, cost-effective architecture for handling high-traffic applications without traditional server management overhead.",
    solution: "Developed comprehensive serverless backend blueprint using functions, data stores, messaging queues, and API gateways, creating scalable and cost-effective architecture for high-traffic applications.",
    link: "#",
    github: "#"
  },
  {
    id: 5,
    title: "AI/ML MLOps Platform",
    category: "Agentic AI",
    description: "Robust MLOps platform automating the entire machine learning lifecycle from data ingestion to model deployment and monitoring.",
    technologies: ["AWS SageMaker", "MLflow", "Kubeflow", "Docker", "Python", "TensorFlow"],
    image: mlopsplatformImg,
    results: ["10x faster model deployment", "95% model accuracy", "Automated drift detection"],
    problem: "Data science teams lacked automated pipeline for model lifecycle management, causing delays in production deployments and model performance issues.",
    solution: "Built comprehensive MLOps platform with versioning for data and models, automated training pipelines, scalable API deployment, and real-time monitoring for model performance and drift detection.",
    link: "#",
    github: "#"
  },
  {
    id: 6,
    title: "FinOps Cost Optimization Platform",
    category: "Cloud Infrastructure",
    description: "In-house FinOps platform providing deep insights and automated recommendations for comprehensive cloud cost management.",
    technologies: ["Python", "React", "AWS Cost Explorer", "Azure Cost Management", "PostgreSQL"],
    image: finopsPlatformImg,
    results: ["40% cost savings", "Real-time spend tracking", "Automated optimizations"],
    problem: "Organization struggled with escalating cloud costs, idle resources, and lack of visibility into spending patterns across multiple cloud providers.",
    solution: "Created integrated FinOps platform connecting with cloud billing APIs for spend tracking, idle resource identification, right-sizing recommendations, and automated cost-saving actions based on predefined business rules.",
    link: "#",
    github: "#"
  },
  {
    id: 7,
    title: "Secure Data Lake Analytics Platform",
    category: "Cloud Infrastructure",
    description: "Secure, scalable data lake on cloud with comprehensive analytics capabilities and enterprise-grade security model.",
    technologies: ["AWS S3", "Azure Data Lake", "Amazon Athena", "Apache Spark", "IAM", "Glue"],
    image: dataLakePlatformImg,
    results: ["Petabyte-scale processing", "Real-time analytics", "Enterprise security compliance"],
    problem: "Enterprise needed centralized, secure data repository with advanced analytics capabilities while maintaining strict compliance and access controls.",
    solution: "Designed secure data lake with automated ingestion pipelines from various sources, implemented robust security model with role-based access controls, and integrated analytics services for business intelligence and data science teams.",
    link: "#",
    github: "#"
  },
  {
    id: 8,
    title: "Cloud Security & Compliance Framework",
    category: "Cloud Infrastructure",
    description: "Comprehensive framework ensuring continuous security and compliance in cloud environments with automated remediation.",
    technologies: ["AWS Security Hub", "Azure Security Center", "Terraform", "Python", "Compliance APIs"],
    image: securityComplianceImg,
    results: ["100% compliance adherence", "Automated threat response", "Zero security incidents"],
    problem: "Organization required continuous security monitoring and compliance enforcement across multi-cloud environment with automated remediation capabilities.",
    solution: "Developed comprehensive security framework automating best practices using cloud security services, created custom policies for compliance standards (SOC 2, ISO 27001), and built automated remediation system for security vulnerabilities.",
    link: "#",
    github: "#"
  },
  {
    id: 9,
    title: "Legacy Monolith Modernization",
    category: "Cloud Infrastructure",
    description: "Complete re-architecture and migration of large monolithic application to cloud-native microservices architecture.",
    technologies: ["Docker", "Kubernetes", "Spring Boot", "PostgreSQL", "Redis", "Istio"],
    image: legacyModernizationImg,
    results: ["Zero downtime migration", "10x faster deployments", "Improved scalability"],
    problem: "Large monolithic application created deployment bottlenecks, scaling issues, and maintenance challenges requiring complete architectural transformation.",
    solution: "Led phased re-architecture breaking down monolith into microservices, containerized services using Docker, orchestrated with Kubernetes, and migrated data ensuring minimal downtime during transition.",
    link: "#",
    github: "#"
  },
  {
    id: 10,
    title: "IoT Data Processing Pipeline",
    category: "Cloud Infrastructure",
    description: "Scalable cloud-based platform for ingesting, processing, and analyzing data from thousands of IoT devices in real-time.",
    technologies: ["AWS IoT Core", "Kinesis", "Lambda", "DynamoDB", "ElasticSearch", "Grafana"],
    image: iotPlatformImg,
    results: ["Million+ devices supported", "Sub-second processing", "Real-time insights"],
    problem: "Industrial client needed scalable platform to handle massive IoT data streams from thousands of devices while providing real-time analytics and insights.",
    solution: "Built cloud-native platform using IoT services for device connectivity, serverless functions for real-time processing, stream processing for data analysis, and data lake storage for advanced analytics and machine learning.",
    link: "#",
    github: "#"
  },
  {
    id: 11,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: techAbstractImg,
    results: ["40% increase in conversion", "3x faster load times", "99.9% uptime"],
    problem: "Client needed a scalable e-commerce platform that could handle high traffic during sales events while providing personalized shopping experiences.",
    solution: "Built a microservices architecture with React frontend, Node.js backend, and implemented ML-powered recommendation engine with real-time analytics.",
    link: "#",
    github: "#"
  },
  {
    id: 12,
    title: "Cloud Migration Suite",
    category: "Cloud Infrastructure",
    description: "Complete cloud migration solution for enterprise clients moving from on-premise to AWS.",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    image: cloudInfrastructureImg,
    results: ["60% cost reduction", "Zero downtime migration", "50% faster deployments"],
    problem: "Enterprise client struggled with legacy infrastructure causing high maintenance costs and slow deployment cycles.",
    solution: "Designed containerized microservices architecture with automated CI/CD pipelines and implemented infrastructure as code for consistent deployments.",
    link: "#",
    github: "#"
  },
  {
    id: 13,
    title: "AI Analytics Dashboard",
    category: "Agentic AI",
    description: "Intelligent analytics platform that automatically generates insights and predictive models from business data.",
    technologies: ["Python", "TensorFlow", "React", "MongoDB"],
    image: heroBgImg,
    results: ["85% accuracy in predictions", "2 hours saved daily", "30% revenue increase"],
    problem: "Business needed to transform raw data into actionable insights but lacked data science expertise and resources.",
    solution: "Developed AI-powered analytics platform with automated model training, natural language insights generation, and interactive visualizations.",
    link: "#",
    github: "#"
  }
];

function ProjectCard({ project, index, onViewDetails }: { 
  project: typeof projects[0], 
  index: number,
  onViewDetails: (project: typeof projects[0]) => void 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="group hover-lift cursor-pointer"
      onClick={() => onViewDetails(project)}
    >
      <div className="card-neon h-full overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 mb-6 rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-secondary/20">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
          <div className="absolute top-4 right-4 z-20">
            <span className="px-3 py-1 bg-card/90 backdrop-blur-sm rounded-full text-xs font-medium text-primary border border-primary/20">
              {project.category}
            </span>
          </div>
          <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gradient-primary transition-all duration-300">
          {project.title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span 
              key={tech}
              className="px-2 py-1 bg-muted/50 rounded-md text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Results */}
        <div className="space-y-2 mb-6">
          {project.results.slice(0, 2).map((result, idx) => (
            <div key={idx} className="flex items-center text-sm">
              <div className="w-2 h-2 rounded-full bg-primary mr-2" />
              <span className="text-muted-foreground">{result}</span>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary-glow">
            View Details
            <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
          
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <ExternalLink className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="w-8 h-8 p-0">
              <Github className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, isOpen, onClose }: {
  project: typeof projects[0] | null,
  isOpen: boolean,
  onClose: () => void
}) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">{project.title}</h2>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                {project.category}
              </span>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="w-8 h-8 p-0">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Problem */}
          <div>
            <h3 className="text-xl font-semibold text-secondary mb-3">The Problem</h3>
            <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
          </div>

          {/* Solution */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-3">Our Solution</h3>
            <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-muted/50 rounded-md text-sm font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Results */}
          <div>
            <h3 className="text-xl font-semibold text-neon-cyan mb-3">Quantifiable Results</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {project.results.map((result, idx) => (
                <div key={idx} className="text-center p-4 card-neon">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {result.split(' ')[0]}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {result.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 pt-6 border-t border-border/50">
            <Button className="btn-hero flex-1">
              <ExternalLink className="mr-2 w-4 h-4" />
              View Live Project
            </Button>
            <Button variant="outline" className="flex-1 border-border hover:bg-muted/50">
              <Github className="mr-2 w-4 h-4" />
              View Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default function PortfolioSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="portfolio" className="py-32 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-secondary/20 text-sm font-medium text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 bg-neon-cyan rounded-full mr-2 animate-pulse-neon"></span>
            Featured Projects
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Our </span>
            <span className="text-gradient-primary">Portfolio</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Real projects, real results. See how we've helped businesses transform their digital presence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <Button 
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg border-primary/30 hover:border-primary hover:bg-primary/10"
          >
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedProject(null);
        }}
      />
    </section>
  );
}