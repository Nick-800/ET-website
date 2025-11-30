import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import bclogo from "@/assets/bclogo.png";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={bclogo} alt="ET-Group" className="w-10 h-10 object-contain" />
              <span className="text-xl font-bold">ET-Group</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Engineering excellence in Mechanical, Electrical & Plumbing solutions for modern infrastructure.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "Projects", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {["HVAC Systems", "Electrical Design", "Plumbing Systems", "Fire Protection", "Energy Audits"].map(
                (service) => (
                  <li key={service}>
                    <Link
                      to="/services"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {service}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                123 Engineering Drive, Tech City
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                +1 (555) 123-4567
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                info@mepsolutions.com
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ET-Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
