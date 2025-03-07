"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog";
import CategoryList from "@/components/users/admin/CategoryList";
import JobList from "@/components/users/admin/JobList";
import CategoryForm from "@/components/users/admin/CategoryForm";

const ClientWrapper = () => {

    const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false);
    const [isCreateJobModalOpen, setIsCreateJobModalOpen] = useState(false);

    return (
        <>
            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Categories</h2>
                        <Button
                            onClick={() => setIsCreateCategoryModalOpen(true)}
                        >
                            Create Category
                        </Button>
                    </div>
                    <CategoryList />
            </div>

            <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold mb-4">Jobs</h2>
                    <Button
                        onClick={() => setIsCreateJobModalOpen(true)}
                    >
                        Create Job
                    </Button>
                </div>
                <JobList />
            </div>

            <Dialog
                open={isCreateCategoryModalOpen}
                onOpenChange={setIsCreateCategoryModalOpen}
            >
                <CategoryForm
                    onSuccess={() => setIsCreateCategoryModalOpen(false)}
                />
            </Dialog>
        
        </>
    )
}

export default ClientWrapper