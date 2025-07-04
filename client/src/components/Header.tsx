import { useState } from "react";
import { FileText, GraduationCap, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { academicData } from "@/data/academicData";

interface HeaderProps {
  activeSection: string;
}

export default function Header({ activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#publications", label: "Publications" },
    { href: "#projects", label: "Projects" },
    { href: "#teaching", label: "Teaching" },
    { href: "#talks", label: "Talks" }
  ];

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Name/Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold text-academic-dark">
              {academicData.personal.name}
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={`transition-colors ${
                  activeSection === item.href.substring(1)
                    ? "text-academic-blue font-medium"
                    : "text-academic-gray hover:text-academic-blue"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Header Icons */}
          <div className="flex items-center space-x-3">
            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-academic-gray hover:text-academic-blue transition-colors"
              title="Download CV"
            >
              <FileText className="h-5 w-5" />
            </a>
            <a
              href={academicData.personal.links.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="text-academic-gray hover:text-academic-blue transition-colors"
              title="Google Scholar"
            >
              <GraduationCap className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${academicData.personal.email}`}
              className="text-academic-gray hover:text-academic-blue transition-colors"
              title="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden text-academic-gray hover:text-academic-blue"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className={`block px-3 py-2 transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "text-academic-blue font-medium"
                      : "text-academic-gray hover:text-academic-blue"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
