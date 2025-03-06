"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import JobForm from "./JobForm";
// import DeleteConfirmationDialog from "./DeleteConfirmationDialog";

// Mock data for jobs
const initialJobs = [
  { id: 1, title: "Software Engineer", category: "Technology" },
  { id: 2, title: "Marketing Manager", category: "Marketing" },
  { id: 3, title: "Financial Analyst", category: "Finance" },
]

const JobList = () => {
    // const [jobs, setJobs] = useState(initialJobs);
    // const [isCreateJobModalOpen, setIsCreateJobModalOpen] = useState(false);
    // const [editingJob, setEditingJob] = useState(null);
    // const [deletingJobId, setDeletingJobId] = useState<number | null>(null)
  
    // const handleCreate = (newJob) => {
    //   setJobs([...jobs, { ...newJob, id: jobs.length + 1 }])
    //   setIsCreateJobModalOpen(false)
    // }
  
    // const handleUpdate = (updatedJob) => {
    //   setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)))
    //   setEditingJob(null)
    // }
  
    // const handleDelete = (id) => {
    //   setJobs(jobs.filter((job) => job.id !== id))
    //   setDeletingJobId(null)
    // }
  
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {initialJobs.map((job) => (
                        <TableRow key={job.id}>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.category}</TableCell>
                            <TableCell>
                            <Button variant="outline" className="mr-2" onClick={() => setEditingJob(job)}>
                                Edit
                            </Button>
                            <Button variant="destructive" onClick={() => setDeletingJobId(job.id)}>
                                Delete
                            </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    
            {/* <Dialog open={isCreateJobModalOpen} onOpenChange={setIsCreateJobModalOpen}>
                <JobForm onSuccess={handleCreate} />
            </Dialog> */}
    
            {/* <Dialog open={!!editingJob} onOpenChange={() => setEditingJob(null)}>
                {editingJob && <JobForm initialData={editingJob} onSuccess={handleUpdate} />}
            </Dialog>
    
            <DeleteConfirmationDialog
                isOpen={!!deletingJobId}
                onClose={() => setDeletingJobId(null)}
                onConfirm={() => deletingJobId && handleDelete(deletingJobId)}
                title="Delete Job"
                description="Are you sure you want to delete this job? This action cannot be undone."
            /> */}
        </>
    )
  }

export default JobList