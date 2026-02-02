import { useEffect, useRef, useState } from "react";

// API Response Type
interface GalleryApiResponse {
  success: boolean;
  data: string[];
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
}

const WorkGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch gallery images from API
  useEffect(() => {
    const fetchGalleryImages = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://dashboard.etgroup.ly/api/images/urls");
        
        if (!response.ok) {
          throw new Error("Failed to fetch gallery images");
        }

        const data: GalleryApiResponse = await response.json();
        
        if (data.success && Array.isArray(data.data)) {
          // Transform API URLs to gallery image format
          const images = data.data.map((url, index) => ({
            id: index + 1,
            src: url,
            alt: `Project Showcase ${index + 1}`,
          }));
          setGalleryImages(images);
        } else {
          throw new Error("Invalid response structure");
        }
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  // Auto-scroll animation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || galleryImages.length === 0) return;

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
  }, [galleryImages]);

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

      {loading && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Loading gallery...</p>
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <p className="text-destructive">Error loading gallery: {error}</p>
        </div>
      )}

      {!loading && !error && galleryImages.length > 0 && (
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
            </div>
          ))}
        </div>
      )}

      {!loading && !error && galleryImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No images available</p>
        </div>
      )}
    </section>
  );
};

export default WorkGallery;
