import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin, Briefcase, DollarSign } from 'lucide-react'
import { sampleJobs } from "@/data/sampledata"


const JobPage = async ({ params }) => {

    const { slug } = await params;
    const job = sampleJobs.find(job => job.slug === slug);


    return (
        // <div className="min-h-[calc(100vh-25rem)] flex justify-center items-center">
        //     <div className="flex flex-col items-center gap-4">
        //         <p className="text-black text-3xl font-semibold">Jobpage: The job slug is <span className="text-red-400">{slug}</span> and</p>
        //         <p className="text-black text-3xl font-semibold">the job title is <span className="text-red-400">{job.title}</span></p>
        //     </div>
        // </div>
        <div className="p-20">
            <Card className="w-full max-w-6xl mx-auto">
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div>
                            <CardTitle className="text-2xl font-bold mb-2">{job.title}</CardTitle>
                            <p className="text-lg text-muted-foreground mb-2">{job.company}</p>
                        </div>
                        <Button
                            // onClick={onApply}
                        >
                            Apply Now
                        </Button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.jobType}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <DollarSign className="w-4 h-4" />
                            {job.salary}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center gap-1">
                            <CalendarDays className="w-4 h-4" />
                            Posted {job.postedDate}
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                            <p className="text-muted-foreground">{job.description}</p>
                        </div>
                        {job.requirements.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                                <ul className="list-disc pl-5 space-y-1">
                                    {job.requirements.map((req, index) => (
                                        <li key={index} className="text-muted-foreground">{req}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        // onClick={onApply}
                        className="w-full">Apply for this position
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default JobPage