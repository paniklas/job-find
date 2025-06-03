import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  BriefcaseIcon,
  BuildingIcon,
  CalendarIcon,
  ClockIcon,
  DollarSignIcon,
  GlobeIcon,
  MapPinIcon,
} from "lucide-react";
import { getJobBySlug } from "@/utils/getData";

export default async function JobPage({ params }) {

    const { slug } = await params;
    const jobData = await getJobBySlug(slug);
    const job = jobData?.job;

    console.log("Job", job);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays === 1) return '1 day ago';
        if (diffDays <= 7) return `${diffDays} days ago`;
        return date.toLocaleDateString();
    };

    if (!job) {
        return (
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold">Job not found</h1>
                <p className="text-gray-500">The job you are looking for does not exist.</p>
            </div>
        )
    }

  return (
    <div className="min-h-screen container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
          <div className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-md bg-gray-100 flex items-center justify-center">
              <BuildingIcon className="h-8 w-8 text-gray-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">{job.title}</h1>
              <div className="flex items-center gap-2 text-gray-500">
                <BuildingIcon className="h-4 w-4" />
                <span>{job.company}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/dashboard/admin">
            <Button size="lg">Back</Button>
            </Link>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Apply Now</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <MapPinIcon className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="font-medium">{job.location}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <BriefcaseIcon className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Job Type</p>
                <p className="font-medium">{job.jobType}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <DollarSignIcon className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Salary</p>
                {/* <p className="font-medium">$120,000 - $150,000</p> */}
                <p className="font-medium">{job.salary}</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 flex items-center gap-3">
              <CalendarIcon className="h-5 w-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">Posted</p>
                <p className="font-medium">{formatDate(job.createdAt)}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-3">Job Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {job.description || "No description available for this job."}
                </p>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Requirements</h2>
                {job.requirements && job.requirements.length > 0 && (
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                        {job.requirements.map((requirement, index) => (
                            <li key={index}>{requirement}</li>
                        ))}
                    </ul>
                )}
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">Next.js</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">HTML</Badge>
                  <Badge variant="secondary">CSS</Badge>
                  <Badge variant="secondary">Git</Badge>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Benefits</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Competitive salary and equity package</li>
                  <li>Health, dental, and vision insurance</li>
                  <li>Flexible work hours and remote work options</li>
                  <li>Professional development budget</li>
                  <li>Generous paid time off</li>
                </ul>
              </div>

              <Separator />

              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-700">Application deadline: June 15, 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobeIcon className="h-5 w-5 text-gray-500" />
                  <a href="#" className="text-primary hover:underline">
                    Visit company website
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-center">
          <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700 w-full sm:w-auto">Apply Now</Button>
        </div>
      </div>
    </div>
  )
}
