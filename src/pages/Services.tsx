import { Link } from "react-router-dom";
import { 
  Building2, Zap, Droplets, Shield, Wind, Gauge, 
  Lightbulb, ThermometerSun, ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Complete heating, ventilation, and air conditioning design including load calculations, equipment selection, ductwork layout, and controls integration.",
    features: ["Load Calculations", "Equipment Selection", "Ductwork Design", "Controls Integration"],
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Comprehensive electrical engineering from power distribution to lighting design, ensuring safety, efficiency, and code compliance.",
    features: ["Power Distribution", "Lighting Design", "Emergency Systems", "Low Voltage Systems"],
  },
  {
    icon: Droplets,
    title: "Plumbing Systems",
    description: "Expert plumbing design for water supply, sanitary drainage, and storm water management with sustainable solutions.",
    features: ["Water Supply", "Sanitary Systems", "Storm Drainage", "Gas Distribution"],
  },
  {
    icon: Shield,
    title: "Fire Protection",
    description: "Life safety systems including fire alarm design, sprinkler systems, and smoke control to protect occupants and property.",
    features: ["Fire Alarms", "Sprinkler Design", "Smoke Control", "Egress Analysis"],
  },
  {
    icon: ThermometerSun,
    title: "Energy Modeling",
    description: "Building energy simulations and analysis to optimize performance, reduce costs, and achieve sustainability certifications.",
    features: ["Energy Simulations", "Cost Analysis", "LEED Support", "Code Compliance"],
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Innovative lighting solutions that enhance spaces while maximizing energy efficiency and occupant comfort.",
    features: ["Interior Lighting", "Exterior Lighting", "Daylighting", "Controls Design"],
  },
  {
    icon: Building2,
    title: "BIM Services",
    description: "Building Information Modeling for coordinated design, clash detection, and improved project delivery.",
    features: ["3D Modeling", "Clash Detection", "Coordination", "As-Built Documentation"],
  },
  {
    icon: Gauge,
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
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <service.icon className="w-7 h-7 text-primary" />
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
