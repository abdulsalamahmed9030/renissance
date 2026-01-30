import { Users, Calendar, Sparkles, HandCoins } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Meetings & Conferences",
    description:
      "Full-service planning and execution for association meetings, annual conferences, and large-scale events designed to reflect your mission and business goals.",
  },
  {
    icon: Sparkles,
    title: "Special Events & Brand Experiences",
    description:
      "One-of-a-kind special events created to connect people and emotions to unique experiences while strengthening brand identity and audience engagement.",
  },
  {
    icon: Calendar,
    title: "Event Design & Management",
    description:
      "Comprehensive event management from ideation and branding through on-site execution, ensuring every detail aligns with your overall strategy.",
  },
  {
    icon: HandCoins,
    title: "Sponsorship & Fundraising",
    description:
      "Strategic sponsorship sales, fundraising events, and on-site activation programs that support revenue goals and long-term partner relationships.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-executive">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
            What We Do
          </span>
          <h2 className="heading-editorial text-foreground mb-6">
            Our Expertise
          </h2>
          <div className="divider-accent mx-auto mb-8" />
          <p className="body-large">
            We create and produce meetings, conferences, and special events that
            integrate business strategy, marketing initiatives, and creative execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-executive group"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <service.icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-foreground transition-colors duration-300 group-hover:text-secondary"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-xl md:text-2xl font-medium text-foreground mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="body-regular">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
