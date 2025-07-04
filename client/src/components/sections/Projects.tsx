import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-academic-dark">Research Projects</h3>
          <div className="space-y-8">
            {academicData.projects.map((project, index) => (
              <div key={index} className="border-l-4 border-academic-blue pl-6">
                <h4 className="text-lg font-semibold text-academic-dark mb-2">
                  {project.title}
                </h4>
                <p className="text-academic-gray text-sm mb-2">
                  {project.organization} {project.status && `(${project.status})`}
                  {project.venue && ` (${project.venue})`}
                </p>
                <p className="text-academic-gray mb-3">
                  {project.description}
                </p>
                {project.details && (
                  <p className="text-academic-gray text-sm">
                    {project.details}
                  </p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
