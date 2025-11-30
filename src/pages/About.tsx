import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Target, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We strive for the highest standards in every project, delivering solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients and project teams to ensure seamless integration and successful outcomes.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We embrace new technologies and methodologies to provide cutting-edge engineering solutions.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We design systems that minimize environmental impact while maximizing efficiency and performance.",
  },
];

const team = [
  { name: "Robert Mitchell", role: "Principal Engineer", specialty: "Mechanical" },
  { name: "Sarah Chen", role: "Director of Electrical", specialty: "Electrical" },
  { name: "Michael Rodriguez", role: "Plumbing Lead", specialty: "Plumbing" },
  { name: "Jennifer Park", role: "Fire Protection Specialist", specialty: "Fire Protection" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary font-medium">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-card-foreground">
              Engineering the Future
            </h1>
            <p className="text-lg text-muted-foreground">
              Founded in 1998, ET-Group has grown from a small engineering firm to a nationally recognized leader in mechanical, electrical, and plumbing design services.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  ET-Group was founded with a vision to transform the way buildings are engineered. Our founders believed that mechanical, electrical, and plumbing systems should not just be functional—they should be innovative, efficient, and sustainable.
                </p>
                <p>
                  Over the past 25 years, we've designed systems for over 500 projects ranging from small commercial renovations to large-scale healthcare facilities and industrial complexes. Our team has grown to include over 50 licensed professional engineers, each bringing unique expertise and passion to our work.
                </p>
                <p>
                  Today, we continue to push the boundaries of what's possible in MEP engineering, embracing new technologies like BIM, energy modeling, and smart building integration to deliver solutions that meet the challenges of tomorrow.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-80">Years in Business</div>
              </div>
              <div className="bg-card text-card-foreground rounded-lg p-8 text-center border border-border">
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="bg-card text-card-foreground rounded-lg p-8 text-center border border-border">
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Expert Engineers</div>
              </div>
              <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-sm opacity-80">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-medium">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Leadership</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our leadership team brings decades of combined experience in MEP engineering.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <Card key={member.name}>
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary/50" />
                  </div>
                  <h3 className="font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-primary mb-1">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Join Our Team
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            We're always looking for talented engineers who share our passion for excellence.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
