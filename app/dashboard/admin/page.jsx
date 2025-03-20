import ClientWrapper from "@/components/users/admin/ClientWrapper";
import { getCategories } from "@/utils/getData";


const AdminPage = async () => {

    const initialCategoriesRaw = await getCategories();
    // console.log("Initial categories", initialCategoriesRaw);

    // Convert MongoDB documents to plain JS objects
    const initialCategories = JSON.parse(JSON.stringify(initialCategoriesRaw));
    // console.log("Initial categories", initialCategories);

    return (
        <div className="min-h-screen w-full">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <ClientWrapper
                    initialCategories={initialCategories}
                />
            </div>
        </div>
    )
}

export default AdminPage