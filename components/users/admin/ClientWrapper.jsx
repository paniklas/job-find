"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog";
import CategoryList from "@/components/users/admin/CategoryList";
import JobList from "@/components/users/admin/JobList";
import CategoryForm from "@/components/users/admin/CategoryForm";
import JobForm from "@/components/users/admin/JobForm";



const ClientWrapper = ({ initialCategories, jobs }) => {
    const [isCreateCategoryModalOpen, setIsCreateCategoryModalOpen] = useState(false)
    const [isCreateJobModalOpen, setIsCreateJobModalOpen] = useState(false)
  
    return (
      <>
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4 w-full">
            <h2 className="text-xl font-semibold">Categories</h2>
            <Button onClick={() => setIsCreateCategoryModalOpen(true)}>Create Category</Button>
          </div>
          <CategoryList initialCategories={initialCategories} />
        </div>
  
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4 w-full">
            <h2 className="text-xl font-semibold mb-4">Jobs</h2>
            <Button onClick={() => setIsCreateJobModalOpen(true)}>Create Job</Button>
          </div>
          <JobList jobs={jobs} />
        </div>
  
        <Dialog open={isCreateCategoryModalOpen} onOpenChange={setIsCreateCategoryModalOpen}>
          <CategoryForm onClick={() => setIsCreateCategoryModalOpen(false)} />
        </Dialog>
  
        <Dialog open={isCreateJobModalOpen} onOpenChange={setIsCreateJobModalOpen}>
          <JobForm onClick={() => setIsCreateJobModalOpen(false)} initialCategories={initialCategories} />
        </Dialog>
      </>
    )
  }
export default ClientWrapper