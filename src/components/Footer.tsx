const Footer = () => {
  return (
    <footer className="bg-foreground py-16">
     <div className="container-executive">
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
    
    {/* Brand */}
    <div className="lg:col-span-2">
      <span className="font-serif text-2xl font-medium text-background mb-4 block">
        Meridian Events
      </span>
      <p className="text-background/60 text-sm leading-relaxed max-w-md">
        For more than 25 years, we have created and produced one-of-a-kind
        meetings, conferences, and special events that reflect each client’s
        mission while delivering meaningful brand experiences.
      </p>
    </div>

    {/* Quick Links */}
    <div>
      <h4 className="text-xs font-medium tracking-widest uppercase text-background mb-6">
        Navigation
      </h4>
      <ul className="space-y-3">
        {["Home", "About", "Services", "Gallery", "Contact"].map((link) => (
          <li key={link}>
            <a
              href={`#${link.toLowerCase()}`}
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {/* Contact */}
    <div>
      <h4 className="text-xs font-medium tracking-widest uppercase text-background mb-6">
        Contact
      </h4>
      <ul className="space-y-3 text-sm text-background/60">
        <li>info@renaissanceevents.com</li>
        <li>+1 212-561-8955</li>
        <li className="pt-2">
          New York 
        </li>
      </ul>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-background/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-xs text-background/40">
      © {new Date().getFullYear()} renaissanceevents. All rights reserved.
    </p>
    <div className="flex gap-6">
      <a
        href="#"
        className="text-xs text-background/40 hover:text-background/60 transition-colors"
      >
        Privacy Policy
      </a>
      <a
        href="#"
        className="text-xs text-background/40 hover:text-background/60 transition-colors"
      >
        Terms of Service
      </a>
    </div>
  </div>
</div>

    </footer>
  );
};

export default Footer;
