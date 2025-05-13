"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from '@/components/ui/alert-dialog';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { deleteJob } from "@/actions/deleteJob";


const JobList = ({ jobs }) => {

    const [deletingJobId, setDeletingJobId] = useState(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [editingJob, setEditingJob] = useState(null);
    
    const handleDelete = async () => {
        if (!deletingJobId) return;
        
        setIsDeleting(true);
        try {
            const result = await deleteJob(deletingJobId);
          
          if (result.success) {
                toast.success("Success", {
                    description: result.success
                });
          } else {
            toast.error(result.error);
          }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsDeleting(false);
            setDeletingJobId(null);
        }
      };
  
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Salary</TableHead>
                    <TableHead>Job Type</TableHead>
                    <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {jobs.jobs.map((job) => (
                        <TableRow key={job._id}>
                            <TableCell>{job.title}</TableCell>
                            <TableCell>{job.description}</TableCell>
                            <TableCell>
                                {job.categories?.map(category => category.name).join(", ") || "No category"}
                            </TableCell>
                            <TableCell>{job.company}</TableCell>
                            <TableCell>{job.location}</TableCell>
                            <TableCell>{job.salary ? `$${job.salary}` : "Not specified"}</TableCell>
                            <TableCell>{job.jobType}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    className="mr-2"
                                    onClick={() => setEditingJob(job)}
                                >
                                    Edit
                                </Button>
                                <Button
                                        variant="destructive"
                                        onClick={() => setDeletingJobId(job._id)}
                                    >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {jobs.jobs.length === 0 && (
                        <TableRow className="p-12">
                            <TableCell colSpan={4} className="text-center">
                                <span className="text-xl">No jobs available</span>
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>

            {/* Confirmation Dialog */}
            <AlertDialog
                open={!!deletingJobId}
                onOpenChange={(open) => !open && setDeletingJobId(null)}
                >
                <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently delete the job {deletingJobId && jobs.jobs.find(job => job._id === deletingJobId)?.title && (
                            <span className="font-medium"> "{jobs.jobs.find(job => job._id === deletingJobId).title}"</span>
                        )}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={handleDelete}
                        disabled={isDeleting}
                        className="bg-red-600 hover:bg-red-700"
                    >
                    {isDeleting ? "Deleting..." : "Delete"}
                    </AlertDialogAction>
                </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </>
    )
  }

export default JobList