import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import mtLogo from "@/assets/MT.png";

// Custom SVG Icons for Services
const HVACIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="8" y="12" width="48" height="40" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M16 20h32M16 28h32M16 36h32M16 44h32" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="50" cy="16" r="3" fill="currentColor" />
    <path d="M20 8v8M28 8v8M36 8v8M44 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const ElectricalIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 8L24 32h16L32 56" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="currentColor" fillOpacity="0.2" />
    <circle cx="32" cy="20" r="3" fill="currentColor" />
    <circle cx="24" cy="32" r="3" fill="currentColor" />
    <circle cx="40" cy="32" r="3" fill="currentColor" />
    <circle cx="32" cy="44" r="3" fill="currentColor" />
  </svg>
);

const PlumbingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 8v16M32 40v16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    <rect x="20" y="24" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M28 30v4M32 28v8M36 30v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <circle cx="32" cy="52" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
  </svg>
);

const FireIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M32 16v8M32 40v8M16 32h8M40 32h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="32" r="6" fill="currentColor" />
    <path d="M24 24l4 4M40 24l-4 4M24 40l4-4M40 40l-4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const EnergyIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="16" y="20" width="32" height="24" rx="2" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.1" />
    <path d="M20 24h24M20 28h24M20 32h24M20 36h24M20 40h24" stroke="currentColor" strokeWidth="1.5" />
    <path d="M32 44v8M24 52h16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="32" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.3" />
    <path d="M32 6v3M40 12h3M32 18v3M24 12h-3M37 7l2-2M37 17l2 2M27 7l-2-2M27 17l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const LightingIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="32" cy="28" r="12" stroke="currentColor" strokeWidth="2.5" fill="currentColor" fillOpacity="0.2" />
    <path d="M32 8v4M32 48v4M12 28h4M48 28h4M18 14l3 3M43 39l3 3M18 42l3-3M43 17l3-3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M28 40h8v8h-8z" stroke="currentColor" strokeWidth="2" fill="none" />
    <path d="M26 48h12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

const BIMIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M32 8L12 20v24l20 12l20-12V20L32 8z" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M32 8v48M12 20l20 12l20-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M12 44l20-12M52 44l-20-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" />
  </svg>
);

const CommissioningIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="16" y="12" width="32" height="40" rx="3" stroke="currentColor" strokeWidth="2.5" fill="none" />
    <path d="M24 24h16M24 32h16M24 40h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="24" r="2" fill="currentColor" />
    <circle cx="20" cy="32" r="2" fill="currentColor" />
    <circle cx="20" cy="40" r="2" fill="currentColor" />
    <path d="M50 44L46 48l-4-4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    icon: HVACIcon,
    title: "HVAC Systems",
    description: "Complete heating, ventilation, and air conditioning design including load calculations, equipment selection, ductwork layout, and controls integration.",
    features: ["Load Calculations", "Equipment Selection", "Ductwork Design", "Controls Integration"],
  },
  {
    icon: ElectricalIcon,
    title: "Electrical Systems",
    description: "Comprehensive electrical engineering from power distribution to lighting design, ensuring safety, efficiency, and code compliance.",
    features: ["Power Distribution", "Lighting Design", "Emergency Systems", "Low Voltage Systems"],
  },
  {
    icon: PlumbingIcon,
    title: "Plumbing Systems",
    description: "Expert plumbing design for water supply, sanitary drainage, and storm water management with sustainable solutions.",
    features: ["Water Supply", "Sanitary Systems", "Storm Drainage", "Gas Distribution"],
  },
  {
    icon: FireIcon,
    title: "Fire Protection",
    description: "Life safety systems including fire alarm design, sprinkler systems, and smoke control to protect occupants and property.",
    features: ["Fire Alarms", "Sprinkler Design", "Smoke Control", "Egress Analysis"],
  },
  {
    icon: EnergyIcon,
    title: "Energy Modeling",
    description: "Building energy simulations and analysis to optimize performance, reduce costs, and achieve sustainability certifications.",
    features: ["Energy Simulations", "Cost Analysis", "LEED Support", "Code Compliance"],
  },
  {
    icon: LightingIcon,
    title: "Lighting Design",
    description: "Innovative lighting solutions that enhance spaces while maximizing energy efficiency and occupant comfort.",
    features: ["Interior Lighting", "Exterior Lighting", "Daylighting", "Controls Design"],
  },
  {
    icon: BIMIcon,
    title: "BIM Services",
    description: "Building Information Modeling for coordinated design, clash detection, and improved project delivery.",
    features: ["3D Modeling", "Clash Detection", "Coordination", "As-Built Documentation"],
  },
  {
    icon: CommissioningIcon,
    title: "Commissioning",
    description: "Quality assurance process ensuring all building systems perform according to design intent and owner requirements.",
    features: ["Design Review", "Installation Verification", "Functional Testing", "Training"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium">Our Expertise</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-card-foreground">
              MEP Engineering Services
            </h1>
            <p className="text-lg text-muted-foreground">
              We provide comprehensive mechanical, electrical, and plumbing engineering services tailored to meet the unique needs of each project. Our integrated approach ensures efficient, sustainable, and cost-effective solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Partner Card - El Masar El Thabet */}
            <Card className="md:col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-xl transition-all">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <img src={mtLogo} alt="El Masar El Thabet Logo" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <CardTitle className="text-2xl">Elevating Services</CardTitle>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                        Partner
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-2">El Masar El Thabet</p>
                    <p className="text-muted-foreground">
                      We are proud to partner with El Masar El Thabet, a leading provider of elevator and escalator solutions.
                      Their expertise in vertical transportation systems complements our MEP services, offering comprehensive building
                      solutions. From installation and maintenance to modernization and emergency services, El Masar El Thabet ensures
                      safe, reliable, and efficient movement throughout your building.
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Elevator Installation", "Maintenance Services", "Modernization", "Emergency Support", "Escalator Systems", "Consultation"].map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button asChild className="mt-2">
                  <a href="https://mtliftgroup.ly" target="_blank" rel="noopener noreferrer">
                    Visit Partner Website
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Regular Service Cards */}
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors text-primary p-2">
                      <service.icon />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Our Approach</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">
              How We Work
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understanding your project requirements and goals" },
              { step: "02", title: "Design", desc: "Developing comprehensive MEP solutions" },
              { step: "03", title: "Coordination", desc: "Integrating with architectural and structural teams" },
              { step: "04", title: "Delivery", desc: "Construction support and commissioning" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Need Engineering Support?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our team of expert engineers is ready to help with your next project.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
