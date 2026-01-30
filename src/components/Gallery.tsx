import { useState } from "react";
import galleryConference from "@/assets/gallery-conference.jpg";
import galleryReception from "@/assets/gallery-reception.jpg";
import galleryExecutive from "@/assets/gallery-executive.jpg";
import gallerySpecialEvent from "@/assets/gallery-special-event.jpg";

const galleryItems = [
  {
    image: galleryConference,
    category: "Corporate Conferences",
    title: "Global Leadership Summit",
  },
  {
    image: galleryReception,
    category: "Executive Events",
    title: "Annual Gala Reception",
  },
  {
    image: galleryExecutive,
    category: "Executive Events",
    title: "Board Strategy Session",
  },
  {
    image: gallerySpecialEvent,
    category: "Special Events",
    title: "Celebration Dinner",
  },
];

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="container-executive">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
         
          <h2 className="heading-editorial text-foreground mb-6">
            Selected Work
          </h2>
          <div className="divider-accent mx-auto" />
        </div>

        {/* Gallery Grid - Editorial Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Large Left Image */}
          <div
            className="md:row-span-2 relative overflow-hidden cursor-pointer group"
            onMouseEnter={() => setHoveredIndex(0)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="aspect-[3/4] md:aspect-auto md:h-full">
              <img
                src={galleryItems[0].image}
                alt={galleryItems[0].title}
                className={`image-cinematic transition-transform duration-700 ${
                  hoveredIndex === 0 ? "scale-105" : "scale-100"
                }`}
              />
            </div>
            <div
              className={`absolute inset-0 bg-primary/60 flex items-end p-8 transition-opacity duration-500 ${
                hoveredIndex === 0 ? "opacity-100" : "opacity-0"
              }`}
            >
              <div>
                <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70 mb-2 block">
                  {galleryItems[0].category}
                </span>
                <h3 className="font-serif text-2xl text-primary-foreground">
                  {galleryItems[0].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Two Stacked Images */}
          {galleryItems.slice(1, 3).map((item, idx) => (
            <div
              key={idx + 1}
              className="relative overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(idx + 1)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="aspect-[4/3]">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`image-cinematic transition-transform duration-700 ${
                    hoveredIndex === idx + 1 ? "scale-105" : "scale-100"
                  }`}
                />
              </div>
              <div
                className={`absolute inset-0 bg-primary/60 flex items-end p-6 transition-opacity duration-500 ${
                  hoveredIndex === idx + 1 ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70 mb-2 block">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-xl text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Wide Image */}
        <div
          className="mt-6 lg:mt-8 relative overflow-hidden cursor-pointer group"
          onMouseEnter={() => setHoveredIndex(3)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div className="aspect-[21/9]">
            <img
              src={galleryItems[3].image}
              alt={galleryItems[3].title}
              className={`image-cinematic transition-transform duration-700 ${
                hoveredIndex === 3 ? "scale-105" : "scale-100"
              }`}
            />
          </div>
          <div
            className={`absolute inset-0 bg-primary/60 flex items-end p-8 transition-opacity duration-500 ${
              hoveredIndex === 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/70 mb-2 block">
                {galleryItems[3].category}
              </span>
              <h3 className="font-serif text-2xl text-primary-foreground">
                {galleryItems[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
