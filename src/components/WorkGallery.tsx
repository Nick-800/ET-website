import { useEffect, useRef } from "react";

// Placeholder images - replace with actual project images
const galleryImages = [
  { id: 1, src: "/placeholder.svg", alt: "Commercial HVAC Installation" },
  { id: 2, src: "/placeholder.svg", alt: "Industrial Electrical System" },
  { id: 3, src: "/placeholder.svg", alt: "Hospital MEP Design" },
  { id: 4, src: "/placeholder.svg", alt: "Data Center Cooling" },
  { id: 5, src: "/placeholder.svg", alt: "Office Building Plumbing" },
  { id: 6, src: "/placeholder.svg", alt: "Fire Protection System" },
  { id: 7, src: "/placeholder.svg", alt: "Residential Complex MEP" },
  { id: 8, src: "/placeholder.svg", alt: "Manufacturing Plant Systems" },
];

const WorkGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(scroll);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="py-20 bg-card overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <span className="text-primary font-medium">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">
            Project Gallery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our diverse portfolio of MEP engineering projects.
          </p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-hidden cursor-pointer"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden group"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-primary-foreground font-medium text-sm px-4 text-center">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
