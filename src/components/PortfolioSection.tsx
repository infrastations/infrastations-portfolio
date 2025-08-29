import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full-stack e-commerce solution with real-time inventory management and AI-powered recommendations.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "/src/assets/tech-abstract.jpg",
    results: ["40% increase in conversion", "3x faster load times", "99.9% uptime"],
    problem: "Client needed a scalable e-commerce platform that could handle high traffic during sales events while providing personalized shopping experiences.",
    solution: "Built a microservices architecture with React frontend, Node.js backend, and implemented ML-powered recommendation engine with real-time analytics.",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Cloud Migration Suite",
    category: "Cloud Infrastructure",
    description: "Complete cloud migration solution for enterprise clients moving from on-premise to AWS.",
    technologies: ["AWS", "Kubernetes", "Docker", "Terraform"],
    image: "/src/assets/cloud-infrastructure.jpg",
    results: ["60% cost reduction", "Zero downtime migration", "50% faster deployments"],
    problem: "Enterprise client struggled with legacy infrastructure causing high maintenance costs and slow deployment cycles.",
    solution: "Designed containerized microservices architecture with automated CI/CD pipelines and implemented infrastructure as code for consistent deployments.",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    category: "Agentic AI",
    description: "Intelligent analytics platform that automatically generates insights and predictive models from business data.",
    technologies: ["Python", "TensorFlow", "React", "MongoDB"],
    image: "/src/assets/hero-bg.jpg",
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