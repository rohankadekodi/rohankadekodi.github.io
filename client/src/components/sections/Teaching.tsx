import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Teaching() {
  return (
    <section id="teaching" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-academic-dark">Teaching Experience</h3>
          <div className="space-y-6">
            {academicData.teaching.map((teaching, index) => (
              <div key={index} className="border-l-4 border-academic-blue pl-4">
                <h4 className="font-semibold text-academic-dark">{teaching.course}</h4>
                <p className="text-academic-blue font-medium">
                  {teaching.role}, {teaching.institution}
                </p>
                <p className="text-academic-gray text-sm">{teaching.period}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
