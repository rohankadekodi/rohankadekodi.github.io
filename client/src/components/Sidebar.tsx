import { MapPin, Mail, Phone, GraduationCap, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Sidebar() {
  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-24">
        <CardContent className="p-6">
          {/* Profile Photo */}
          <div className="text-center mb-6">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
              alt={academicData.personal.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-gray-100"
            />
            <h2 className="text-xl font-semibold text-academic-dark">
              {academicData.personal.name}
            </h2>
            <p className="text-academic-gray font-medium">
              {academicData.personal.title}
            </p>
            <p className="text-academic-gray">
              {academicData.personal.institution}
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="h-4 w-4 text-academic-gray mt-1 flex-shrink-0" />
              <div>
                <p className="text-academic-gray">{academicData.personal.address.office}</p>
                <p className="text-academic-gray">{academicData.personal.address.street}</p>
                <p className="text-academic-gray">{academicData.personal.address.city}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Mail className="h-4 w-4 text-academic-gray flex-shrink-0" />
              <a
                href={`mailto:${academicData.personal.email}`}
                className="text-academic-blue hover:underline"
              >
                {academicData.personal.email}
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-4 w-4 text-academic-gray flex-shrink-0" />
              <span className="text-academic-gray">{academicData.personal.phone}</span>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="flex justify-center space-x-4">
              <a
                href={academicData.personal.links.googleScholar}
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-gray hover:text-academic-blue transition-colors"
                title="Google Scholar"
              >
                <GraduationCap className="h-6 w-6" />
              </a>
              <a
                href={academicData.personal.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-gray hover:text-academic-blue transition-colors"
                title="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={academicData.personal.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-academic-gray hover:text-academic-blue transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
