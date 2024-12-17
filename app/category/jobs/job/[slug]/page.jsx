import JobGrid from '@/components/search/job-grid'
import { sampleJobs } from "@/data/sampledata";

const CategoryJobsPage = async ({ params }) => {

    const { slug } = await params;
    console.log(slug);

    const filteredJobs = sampleJobs.filter(job => job.categories.includes(slug));
    console.log(filteredJobs);

    return (
        <div className="min-h-screen">
            <div className="container mx-auto py-12 w-full">
                {filteredJobs.length > 0 ? (
                    <JobGrid jobs={filteredJobs} />
                ) : (
                    <p>No jobs found for this category.</p>
                )}
            </div>
        </div>
    )
}

export default CategoryJobsPage
