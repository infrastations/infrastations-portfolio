import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-border/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gradient-primary mb-4">Infra Stations</h3>
            <p className="text-muted-foreground mb-4">
              Building the Future, One Platform at a Time
            </p>
            <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Infra Stations</span>
              <span>•</span>
              <span>Dhaka, Bangladesh</span>
              <span>•</span>
              <a 
                href="mailto:infrastations@gmail.com" 
                className="hover:text-primary transition-colors"
              >
                infrastations@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;