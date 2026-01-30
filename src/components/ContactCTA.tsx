const ContactCTA = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-executive">
        <div className="max-w-3xl mx-auto text-center">
          
          {/* Eyebrow */}
          <span className="text-xs font-medium tracking-widest uppercase text-primary-foreground/60 mb-4 block">
            Connect With Us
          </span>

          {/* Headline */}
          <h2 className="heading-editorial text-primary-foreground mb-6">
            Creating Events That Elevate Your Brand
          </h2>

          <div className="w-12 h-0.5 bg-primary-foreground/30 mx-auto mb-8" />

          {/* Main Copy */}
          <p className="text-lg leading-relaxed text-primary-foreground/80 mb-6">
            Renaissance Meetings & Special Events is a full-service event marketing
            firm specializing in meetings, conferences, special events, fundraising,
            and sponsorship development. For more than 25 years, we have partnered
            with organizations to create meaningful brand experiences that connect
            people, purpose, and emotion.
          </p>

          <p className="text-lg leading-relaxed text-primary-foreground/80 mb-6">
            What sets us apart is our ability to design and produce one-of-a-kind
            events that speak directly to a client’s mission. We seamlessly integrate
            business strategy, marketing initiatives, and creative execution to deliver
            experiences that heighten both brand presence and guest engagement.
          </p>

          <p className="text-lg leading-relaxed text-primary-foreground/80 mb-10">
            Whether you are launching a new product, hosting an annual association
            meeting, seeking sponsorship or exhibitor support, or planning a large-scale
            special event, our team manages every detail—from concept through execution—
            so you can remain focused on your organization’s goals.
          </p>

          {/* Contact Details */}
          <div className="space-y-4 text-primary-foreground/70">
            <p className="text-sm">
              <span className="font-medium text-primary-foreground">Email:</span>{" "}
              inquiries@meridianevents.com
            </p>
            <p className="text-sm">
              <span className="font-medium text-primary-foreground">Phone:</span>{" "}
              +1 (212) 561-8955
            </p>
            <p className="text-sm">
              <span className="font-medium text-primary-foreground">Location:</span>{" "}
              New York 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
