import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";

// API Response Types
interface ApiProject {
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  services: string[];
  images: string[];
  created_at: string;
  updated_at: string;
}

interface ApiResponse {
  success: boolean;
  data: ApiProject[];
}

// Strip HTML tags from description
const stripHtmlTags = (html: string): string => {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
};

// Transform API project to local format
const transformProject = (apiProject: ApiProject) => {
  return {
    id: apiProject.id,
    title: apiProject.name,
    year: apiProject.year.toString(),
    category: apiProject.type,
    description: stripHtmlTags(apiProject.description),
    services: apiProject.services,
    images: apiProject.images,
  };
};

const categories = ["All", "Hotel", "Commercial", "Residential", "Educational", "Religious", "City Structures", "Shopping", "Healthcare"];

interface Project {
  id: number;
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
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [availableCategories, setAvailableCategories] = useState(categories);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dashboard.etgroup.ly/api/projects");
        
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data: ApiResponse = await response.json();
        
        if (data.success && Array.isArray(data.data)) {
          // Transform API projects to local format
          const transformedProjects = data.data.map(transformProject);
          setProjects(transformedProjects);

          // Generate dynamic categories from projects
          const uniqueCategories = ["All", ...new Set(transformedProjects.map(p => p.category))];
          setAvailableCategories(uniqueCategories);
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  if (loading) {
    return (
      <Layout>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-muted-foreground">Loading projects...</p>
          </div>
        </section>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg text-destructive">Error loading projects: {error}</p>
          </div>
        </section>
      </Layout>
    );
  }

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
            {availableCategories.map((cat) => (
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
              <ProjectCard key={project.id} project={project} />
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
