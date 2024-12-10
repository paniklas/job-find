import { sampleJobs } from "@/data/sampledata";
import JobGrid from "@/components/search/job-grid";

const SearchPage = () => {
    return (
      <div className="container mx-auto py-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Job Search Results</h1>
        <JobGrid jobs={sampleJobs} />
      </div>
    )
  }

export default SearchPage
