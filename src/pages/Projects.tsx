import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Calendar, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "Metro Tech Center",
    location: "New York, NY",
    year: "2023",
    category: "Commercial",
    description: "Complete MEP design for a 45-story mixed-use tower featuring LEED Platinum certification.",
    services: ["HVAC", "Electrical", "Plumbing", "Fire Protection"],
    sqft: "1.2M",
  },
  {
    title: "Regional Medical Center",
    location: "Boston, MA",
    year: "2023",
    category: "Healthcare",
    description: "Critical healthcare facility with advanced air handling, medical gas systems, and emergency power.",
    services: ["HVAC", "Medical Gas", "Emergency Power"],
    sqft: "450K",
  },
  {
    title: "Advanced Manufacturing Plant",
    location: "Detroit, MI",
    year: "2022",
    category: "Industrial",
    description: "State-of-the-art manufacturing facility with precision climate control and clean room systems.",
    services: ["Process HVAC", "Electrical", "Clean Room"],
    sqft: "800K",
  },
  {
    title: "Riverside Residences",
    location: "Miami, FL",
    year: "2022",
    category: "Residential",
    description: "Luxury waterfront condominium with high-efficiency systems and smart building integration.",
    services: ["HVAC", "Electrical", "Plumbing"],
    sqft: "650K",
  },
  {
    title: "University Research Lab",
    location: "San Francisco, CA",
    year: "2023",
    category: "Education",
    description: "Advanced research laboratory with specialized ventilation and precision temperature control.",
    services: ["Lab HVAC", "Fume Hoods", "Emergency Systems"],
    sqft: "120K",
  },
  {
    title: "Data Center Campus",
    location: "Dallas, TX",
    year: "2022",
    category: "Technology",
    description: "Enterprise data center with redundant cooling systems and Tier IV power infrastructure.",
    services: ["Cooling", "Power", "Fire Suppression"],
    sqft: "300K",
  },
];

const categories = ["All", "Commercial", "Healthcare", "Industrial", "Residential", "Education", "Technology"];

const Projects = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-card-foreground">
              Featured Projects
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore our diverse portfolio of completed projects across various sectors. Each project showcases our commitment to engineering excellence and innovative solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat}
                variant={cat === "All" ? "default" : "outline"}
                size="sm"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.title} className="group overflow-hidden hover:shadow-lg transition-all">
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{project.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {project.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1 mb-3">
                    <MapPin className="w-4 h-4" /> {project.location}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-sm font-medium">{project.sqft} sq ft</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with our engineering expertise.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Start a Conversation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
