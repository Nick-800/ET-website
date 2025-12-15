import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

const projects = [
  {
    title: "Alkhaleej Communications Building",
    year: "2024",
    category: "Commercial",
    description: "Modern office building with cutting-edge MEP systems including precision cooling for server rooms, advanced electrical infrastructure, and intelligent building management.",
    services: ["HVAC", "Electrical", "Data Center Cooling", "Fire Protection", "Building Management System", "UPS Systems"],
    images: [
      "/src/assets/projects/7.Alkhaleej Communications Building/1.jpeg",
    ],
  },
  {
    title: "Bawabit Alrahman Mosque",
    year: "2023",
    category: "Religious",
    description: "Sacred worship facility with specialized MEP design including acoustically optimized HVAC, energy-efficient lighting, advanced sound systems, and comprehensive fire safety measures.",
    services: ["HVAC", "Electrical", "Plumbing", "Fire Protection", "Sound Systems", "Lighting Design", "Ablution Systems", "Emergency Systems"],
    images: [
      "/src/assets/projects/8.Bawabit Alrahman Mosque/1.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/2.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/3.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/4.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/5.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/6.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/7.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/8.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/9.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/10.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/11.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/12.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/13.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/14.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/15.jpeg",
      "/src/assets/projects/8.Bawabit Alrahman Mosque/16.jpeg",
    ],
  },
  {
    title: "AL-MUKHTAR Hotel",
    year: "2023",
    category: "Hotel",
    description: "Modern hospitality complex with state-of-the-art MEP infrastructure, including energy-efficient systems, advanced fire safety, and smart room controls for enhanced guest experience.",
    services: ["HVAC", "Electrical", "Plumbing", "Fire Suppression", "Smart Controls", "Lighting Design"],
    images: [
      "/src/assets/projects/2.AL-MUKHTAR Hotel/1.png",
      "/src/assets/projects/2.AL-MUKHTAR Hotel/2.png",
      "/src/assets/projects/2.AL-MUKHTAR Hotel/3.png",
      "/src/assets/projects/2.AL-MUKHTAR Hotel/4.png",
      "/src/assets/projects/2.AL-MUKHTAR Hotel/5.png",
      "/src/assets/projects/2.AL-MUKHTAR Hotel/6.png",
    ],
  },
  {
    title: "Africa Hotel",
    year: "2024",
    category: "Hotel",
    description: "Luxury hotel featuring comprehensive MEP systems including advanced climate control, high-efficiency lighting, and integrated building management systems for optimal guest comfort.",
    services: ["HVAC", "Electrical", "Plumbing", "Fire Protection", "Building Automation", "Emergency Power"],
    images: [
      "/src/assets/projects/1.Africa Hotel/1.jpg",
      "/src/assets/projects/1.Africa Hotel/2.jpg",
      "/src/assets/projects/1.Africa Hotel/3.jpg",
      "/src/assets/projects/1.Africa Hotel/4.jpg",
      "/src/assets/projects/1.Africa Hotel/5.jpg",
      "/src/assets/projects/1.Africa Hotel/6.jpg",
      "/src/assets/projects/1.Africa Hotel/7.jpg",
    ],
  },
  {
    title: "Hyper Market",
    year: "2022",
    category: "Commercial",
    description: "Large-scale retail facility with specialized refrigeration systems, high-capacity electrical distribution, comprehensive fire protection, and efficient HVAC for customer comfort.",
    services: ["HVAC", "Refrigeration Systems", "Electrical Distribution", "Fire Protection", "Emergency Lighting", "Ventilation"],
    images: [
      "/src/assets/projects/3.Hyper Market/1.png",
    ],
  },
  {
    title: "Joulyana",
    year: "2025",
    category: "City Structures",
    description: "Urban infrastructure project featuring comprehensive MEP systems including advanced electrical distribution, efficient public utilities, smart city integration, and sustainable energy solutions for modern urban development.",
    services: ["HVAC", "Electrical Distribution", "Public Utilities", "Smart City Systems", "Solar Integration", "Water Management", "Street Lighting"],
    images: [
      "/src/assets/projects/4.Joulyana/1.jpeg",
      "/src/assets/projects/4.Joulyana/2.png",
    ],
  },
  {
    title: "North GHERAN",
    year: "2023",
    category: "Residential",
    description: "Comprehensive residential complex with full MEP design including central HVAC, advanced electrical systems, efficient plumbing networks, and integrated safety systems.",
    services: ["Central HVAC", "Electrical Systems", "Plumbing Networks", "Fire Alarm Systems", "Security Integration", "Backup Power"],
    images: [
      "/src/assets/projects/5.North GHERAN/1.png",
      "/src/assets/projects/5.North GHERAN/2.png",
      "/src/assets/projects/5.North GHERAN/3.png",
      "/src/assets/projects/5.North GHERAN/4.png",
        ],
  },
  {
    title: "Garyounis University Rainwater Tank",
    year: "2022",
    category: "Educational",
    description: "Sustainable water management infrastructure for educational campus, featuring advanced rainwater harvesting, filtration systems, and automated distribution network.",
    services: ["Water Storage Systems", "Filtration", "Pumping Systems", "Distribution Network", "Monitoring Systems", "Overflow Protection"],
    images: [
      "/src/assets/projects/6.Garyounis University rainwater tank/1.png",
    ],
  },
  
];


const categories = ["All", "Hotel", "Commercial", "Residential", "Educational", "Religious", "City Structures"];

interface Project {
  title: string;
  year: string;
  category: string;
  description: string;
  services: string[];
  images: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const hasMultipleImages = project.images.length > 1;

  // Auto-play slideshow
  useEffect(() => {
    if (!hasMultipleImages || isHovered) return;

    const interval = setInterval(() => {
      nextImage();
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex, hasMultipleImages, isHovered]);

  return (
    <Card
      className="group overflow-hidden hover:shadow-lg transition-all"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section with Slideshow */}
      <div className="relative h-64 bg-muted overflow-hidden">
        <img
          src={project.images[currentImageIndex]}
          alt={`${project.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
          key={currentImageIndex}
        />

        {/* Slideshow Controls - Only show if multiple images */}
        {hasMultipleImages && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Indicators */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${index === currentImageIndex
                    ? "bg-white w-6"
                    : "bg-white/50 hover:bg-white/75"
                    }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>

            {/* Image Counter */}
            <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </>
        )}
      </div>

      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <Badge variant="secondary">{project.category}</Badge>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="w-3 h-3" /> {project.year}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.services.map((service) => (
            <span
              key={service}
              className="px-2 py-1 bg-primary/10 text-primary rounded text-xs"
            >
              {service}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

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
                variant={cat === selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(cat)}
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
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
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
