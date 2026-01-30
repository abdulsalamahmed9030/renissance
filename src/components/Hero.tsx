import heroImage from "@/assets/hero-corporate-event.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Executive corporate conference"
          className="w-full h-full object-cover"
        />
        <div className="overlay-editorial" />
      </div>

      {/* Content */}
      <div className="container-executive relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8 animate-fade-up">
            <div className="w-12 h-px bg-primary-foreground/40" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/80">
              Meetings · Conferences · Special Events
            </span>
          </div>

          {/* Headline */}
          <h1
            className="heading-display text-primary-foreground mb-8 animate-fade-up"
            style={{ animationDelay: "150ms" }}
          >
            Creating One-of-a-Kind Events That Reflect Your Brand
          </h1>

          {/* Subheadline */}
          <p
            className="text-lg md:text-xl leading-relaxed text-primary-foreground/85 max-w-2xl mb-12 animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            For more than 25 years, we have designed and produced strategic
            meetings and special events that connect people, purpose,
            and unforgettable brand experiences.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-up"
            style={{ animationDelay: "450ms" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase bg-primary-foreground text-primary transition-all duration-300 hover:bg-muted rounded"
            >
              Start the Conversation
            </a>
            <a
              href="#gallery"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-widest uppercase border border-primary-foreground/50 text-primary-foreground transition-all duration-300 hover:bg-primary-foreground/10 rounded"
            >
              Explore Our Events
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      
    </section>
  );
};

export default Hero;
