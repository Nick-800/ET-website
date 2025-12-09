import { useEffect, useRef } from "react";

// Project showcase images from Show case folder
const galleryImages = [
  { id: 1, src: "/src/assets/Show case/1.png", alt: "Project Showcase 1" },
  { id: 2, src: "/src/assets/Show case/2.png", alt: "Project Showcase 2" },
  { id: 3, src: "/src/assets/Show case/3.png", alt: "Project Showcase 3" },
  { id: 4, src: "/src/assets/Show case/4.png", alt: "Project Showcase 4" },
  { id: 5, src: "/src/assets/Show case/5.png", alt: "Project Showcase 5" },
  { id: 6, src: "/src/assets/Show case/6.png", alt: "Project Showcase 6" },
  { id: 7, src: "/src/assets/Show case/7.png", alt: "Project Showcase 7" },
  { id: 8, src: "/src/assets/Show case/8.png", alt: "Project Showcase 8" },
  { id: 9, src: "/src/assets/Show case/9.jpeg", alt: "Project Showcase 9" },
  { id: 10, src: "/src/assets/Show case/10.jpeg", alt: "Project Showcase 10" },
  { id: 11, src: "/src/assets/Show case/11.jpeg", alt: "Project Showcase 11" },
  { id: 12, src: "/src/assets/Show case/12.jpeg", alt: "Project Showcase 12" },
  { id: 13, src: "/src/assets/Show case/13.jpeg", alt: "Project Showcase 13" },
  { id: 14, src: "/src/assets/Show case/14.jpeg", alt: "Project Showcase 14" },
  { id: 15, src: "/src/assets/Show case/15.jpeg", alt: "Project Showcase 15" },
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

    // Always animate (do not pause on hover)
    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
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
        className="flex gap-4 overflow-x-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="flex-shrink-0 w-72 h-48 rounded-lg overflow-hidden relative"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* remove hover overlay; keep static caption accessible to screen readers if needed */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
