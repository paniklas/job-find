import ClientWrapper from "@/components/users/admin/ClientWrapper";
import { getCategories, getJobs } from "@/utils/getData";


const AdminPage = async () => {

    // Fetch categories
    const initialCategoriesRaw = await getCategories();
    // Convert MongoDB documents to plain JS objects
    const initialCategories = JSON.parse(JSON.stringify(initialCategoriesRaw));
    
    // Fetch jobs
    const jobsRaw = await getJobs();
    const jobs = JSON.parse(JSON.stringify(jobsRaw));
    console.log("Jobs", jobs);

    return (
        <div className="min-h-screen w-full">
            <div className="container mx-auto md:mt-6">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <ClientWrapper
                    initialCategories={initialCategories}
                    jobs={jobs}
                />
            </div>
        </div>
    )
}

export default AdminPage