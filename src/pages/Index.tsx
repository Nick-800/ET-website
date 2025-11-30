import { Link } from "react-router-dom";
import { ArrowRight, Building2, Zap, Droplets, Shield, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import TeamSection from "@/components/TeamSection";
import StatsChart from "@/components/StatsChart";
import WorkGallery from "@/components/WorkGallery";
import heroImage from "@/assets/hero-engineering.jpg";

const services = [
  {
    icon: Building2,
    title: "Mechanical Systems",
    description: "HVAC design, ventilation, and climate control solutions for optimal building performance.",
  },
  {
    icon: Zap,
    title: "Electrical Engineering",
    description: "Power distribution, lighting design, and smart building integration systems.",
  },
  {
    icon: Droplets,
    title: "Plumbing Design",
    description: "Water supply, drainage systems, and sustainable plumbing solutions.",
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Fire alarm systems, sprinkler design, and life safety compliance.",
  },
];


const Index = () => {
  return (
    <>
      <Layout>
        {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed transition-none"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-background/80 transition-none" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Engineering Excellence
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Innovative MEP Solutions by ET-Group for Modern Infrastructure
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              We deliver cutting-edge Mechanical, Electrical & Plumbing engineering services that power buildings and transform spaces into efficient, sustainable environments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">What We Do</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">
              Comprehensive MEP Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to completion, we provide integrated engineering solutions tailored to your project requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow bg-background">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

        {/* Stats Chart Section */}
        <StatsChart />

        {/* Team Section */}
        <TeamSection />

        {/* Why Choose Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">
                Engineering Excellence Since 1998
              </h2>
                <p className="text-muted-foreground mb-8">
                With over two decades of experience, ET-Group has established itself as a leader in mechanical, electrical, and plumbing engineering. Our commitment to innovation and sustainability sets us apart.
              </p>
              <ul className="space-y-4">
                {[
                  "Licensed professional engineers on staff",
                  "BIM/Revit integrated design workflows",
                  "LEED and green building expertise",
                  "24/7 emergency support services",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8" asChild>
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <Building2 className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">Commercial</div>
                <p className="text-sm text-muted-foreground">Office & Retail</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 text-center mt-8">
                <Zap className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">Industrial</div>
                <p className="text-sm text-muted-foreground">Manufacturing</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <Shield className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">Healthcare</div>
                <p className="text-sm text-muted-foreground">Hospitals & Labs</p>
              </div>
              <div className="bg-primary/10 rounded-lg p-6 text-center mt-8">
                <Droplets className="w-10 h-10 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold">Residential</div>
                <p className="text-sm text-muted-foreground">Multi-family</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our engineering expertise can bring your vision to life. Contact us for a free consultation.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get a Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

        {/* Work Gallery */}
        <WorkGallery />
      </Layout>
    </>
  );
};

export default Index;
