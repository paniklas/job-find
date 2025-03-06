import ClientWrapper from "@/components/users/admin/ClientWrapper";

const AdminPage = () => {
    return (
        <div className="min-h-screen w-full">
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
                <ClientWrapper />
            </div>
        </div>
    )
}

export default AdminPage