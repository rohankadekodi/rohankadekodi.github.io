import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Experience() {
  return (
    <section id="experience" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-academic-dark">Work Experience</h3>
          <div className="space-y-6">
            {academicData.experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-academic-blue pl-4">
                <h4 className="font-semibold text-academic-dark">{exp.title}</h4>
                <p className="text-academic-blue font-medium">{exp.organization}</p>
                <p className="text-academic-gray text-sm">{exp.period}</p>
                {exp.mentor && (
                  <p className="text-academic-gray text-sm mt-1">Mentor: {exp.mentor}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
