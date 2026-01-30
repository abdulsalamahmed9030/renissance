import strategyImage from "@/assets/strategy-meeting.jpg";

const Legacy = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-executive">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
  {/* Large Number */}
  <div className="mb-8">
    <span className="font-serif text-7xl md:text-8xl lg:text-9xl font-medium text-primary/10">
      25+
    </span>
  </div>

  {/* Headline */}
  <h2 className="heading-editorial text-foreground mb-6">
    Years of Experience Creating Impact
  </h2>

  {/* Divider */}
  <div className="divider-accent mb-8" />

  {/* Editorial Copy */}
  <p className="body-large mb-6">
    For more than 25 years, we have connected clients to unique experiences
    through meetings, conferences, and special events designed to reflect
    their mission and goals.
  </p>

  <p className="body-regular mb-8">
    We specialize in creating and producing one-of-a-kind events that integrate
    business strategy, marketing initiatives, and creative execution, delivering
    experiences that elevate both brand and guest engagement.
  </p>

  {/* Stats */}
  <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
    <div>
      <span className="block font-serif text-3xl md:text-4xl font-medium text-foreground mb-1">
        500+
      </span>
      <span className="text-sm text-muted-foreground">
        Events Delivered
      </span>
    </div>
    <div>
      <span className="block font-serif text-3xl md:text-4xl font-medium text-foreground mb-1">
        40+
      </span>
      <span className="text-sm text-muted-foreground">
        Countries
      </span>
    </div>
    <div>
      <span className="block font-serif text-3xl md:text-4xl font-medium text-foreground mb-1">
        98%
      </span>
      <span className="text-sm text-muted-foreground">
        Client Retention
      </span>
    </div>
  </div>
</div>


          {/* Right Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={strategyImage}
                alt="Strategic planning session"
                className="image-cinematic"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-border -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Legacy;
