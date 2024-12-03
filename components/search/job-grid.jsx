import JobCard from './job-card'

export default function JobGrid({ jobs }) {

    console.log(jobs);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    )
}