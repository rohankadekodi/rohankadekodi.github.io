import { Card, CardContent } from "@/components/ui/card";
import { academicData } from "@/data/academicData";

export default function Publications() {
  return (
    <section id="publications" className="mb-12">
      <Card>
        <CardContent className="p-6">
          <h3 className="text-2xl font-semibold mb-6 text-academic-dark">Publications</h3>
          
          {/* Peer-reviewed Publications */}
          <div className="mb-8">
            <h4 className="text-lg font-semibold mb-4 text-academic-dark">Peer-reviewed Publications</h4>
            <div className="space-y-6">
              {academicData.publications.map((pub, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                  <h5 className="font-medium text-academic-dark mb-2">
                    {pub.title}
                  </h5>
                  <p className="text-academic-gray text-sm">
                    {pub.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ArXiv Preprints */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-academic-dark">ArXiv Preprints</h4>
            <div className="space-y-6">
              {academicData.preprints.map((preprint, index) => (
                <div key={index} className="pb-4 border-b border-gray-100 last:border-b-0">
                  <h5 className="font-medium text-academic-dark mb-2">
                    {preprint.title}
                  </h5>
                  <p className="text-academic-gray text-sm">
                    {preprint.venue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
