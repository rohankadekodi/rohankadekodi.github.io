import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Talks() {
  return (
    <section id="talks" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-academic-dark">Technical Talks</h3>
          <div className="space-y-4">
            {academicData.talks.map((talk, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                <h4 className="font-medium text-academic-dark">{talk.title}</h4>
                <p className="text-academic-gray text-sm">{talk.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
