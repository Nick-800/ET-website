import { Card, CardContent } from "@/components/ui/card";
import { User, Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Eng. Zakaria Alaraibi",
    role: "General Manager",
    isManager: true,
    mail: "zk@etgroup.ly",
    description: "Leading ET Group's MEP engineering excellence with extensive experience in project management and technical innovation.",
  },
  {
    name: "Eng. Mohammed Eljhane",
    role: "Product Manager",
    isManager: false,
    description: "Strategic product development and project coordination expertise.",
  },
  {
    name: "Eng. Hadeel Samir",
    role: "Planning and Quality Assurance",
    isManager: false,
    description: "Ensuring project excellence through comprehensive planning and quality control.",
  },
  {
    name: "Eng. Alaa Alaraibi",
    role: "Planning and Quality Assurance",
    isManager: false,
    description: "Quality assurance specialist focused on project planning and standards compliance.",
  },
];

const TeamSection = () => {
  const manager = teamMembers.find((m) => m.isManager);
  const members = teamMembers.filter((m) => !m.isManager);

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-medium">Our Team</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-card-foreground">
            Meet the Experts
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our dedicated team of engineers brings decades of combined experience to every project.
          </p>
        </div>

        {/* Manager */}
        {manager && (
          <div className="flex justify-center mb-12">
            <Card className="w-full max-w-md bg-primary/5 border-primary/20">
              <CardContent className="p-8 text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-1 text-primary">{manager.name}</h3>
                <p className="text-primary font-medium mb-3">{manager.role}</p>
                <p className="text-muted-foreground text-sm mb-4">{manager.description}</p>
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-4 h-4 text-primary" />
                  </button>
                  <button className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Team Members */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            {members.map((member) => (
              <Card key={member.name} className="group hover:shadow-lg transition-shadow bg-background">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-white">{member.name}</h3>
                  <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-xs">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
