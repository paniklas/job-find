import { CalendarIcon, MapPinIcon, BriefcaseIcon, DollarSignIcon } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const JobCard = ({ job }) => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{job.title}</CardTitle>
          <Badge variant="secondary">{job.location}</Badge>
        </div>
        <p className="text-lg text-muted-foreground">{job.company}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{job.description}</p>
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Posted: {new Date(job.createdDate).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Expires: {new Date(job.expirationDate).toLocaleDateString()}
          </div>
          <div className="flex items-center">
            <DollarSignIcon className="mr-2 h-4 w-4" />
            {job.salary}
          </div>
          <div className="flex items-center">
            <MapPinIcon className="mr-2 h-4 w-4" />
            {job.location}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <button className="flex items-center justify-center w-full py-2 px-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
          <BriefcaseIcon className="mr-2 h-4 w-4" />
          Apply Now
        </button>
      </CardFooter>
    </Card>
  )
}

export default JobCard
