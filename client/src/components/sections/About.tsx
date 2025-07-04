import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { academicData } from "@/data/academicData";

export default function About() {
  return (
    <section id="home" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-4 text-academic-dark">About</h3>
          <div className="prose prose-lg max-w-none text-academic-gray">
            {academicData.about.bio.map((paragraph, index) => (
              <p key={index} className="mb-4">
                {paragraph}
              </p>
            ))}
          </div>
          
          <div className="mt-6">
            <h4 className="text-lg font-semibold mb-3 text-academic-dark">Research Interests</h4>
            <div className="flex flex-wrap gap-2">
              {academicData.about.interests.map((interest, index) => (
                <Badge key={index} variant="secondary" className="bg-blue-50 text-academic-blue">
                  {interest}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
