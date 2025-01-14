import { sampleJobs } from "@/data/sampledata";
import JobGrid from "@/components/search/job-grid";

const SearchPage = async ({ searchParams }) => {

  console.log(searchParams);

  const { query } = await searchParams;
  console.log(query);

    // const { query } = await searchParams;

    // const filteredJobs = sampleJobs.filter((job) => {
    //   const searchContent = `${job.title} ${job.company} ${job.description}`.toLowerCase()
    //   return searchContent.includes(query.toLowerCase())
    // })

    return (
      <div className="container mx-auto py-8 min-h-screen">
        <h1 className="text-3xl font-bold mb-8">Job Search Results</h1>
        {/* <p className="mb-4">
          Found {filteredJobs.length} job{filteredJobs.length === 1 ? '' : 's'} for "{query}"
        </p>
        <JobGrid jobs={filteredJobs} /> */}
      </div>
    )
  }

export default SearchPage
