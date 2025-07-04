import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Education() {
  return (
    <section id="education" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-academic-dark">Education</h3>
          <div className="space-y-6">
            {academicData.education.map((edu, index) => (
              <div key={index} className="border-l-4 border-academic-blue pl-4">
                <h4 className="font-semibold text-academic-dark">{edu.degree}</h4>
                <p className="text-academic-blue font-medium">{edu.institution}</p>
                <p className="text-academic-gray text-sm">{edu.period}</p>
                {edu.advisor && (
                  <p className="text-academic-gray text-sm mt-1">Advisor: {edu.advisor}</p>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
