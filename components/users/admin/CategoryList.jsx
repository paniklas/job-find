// Component Category List. Showing a list of categories with edit and delete actions.

"use client";

    // TODO: Fix the full width in categories table

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// import CategoryForm from "./CategoryForm"
// import DeleteConfirmationDialog from "./DeleteConfirmationDialog"


const CategoryList = ({ initialCategories }) => {
    console.log("Category List categories", initialCategories);
  
    return (
        <div>
            <Table className="w-full">
                <TableHeader>
                    <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {initialCategories?.categories?.map((category) => (
                        <TableRow key={category._id}>
                            <TableCell>{category.name}</TableCell>
                            <TableCell>{category.description}</TableCell>
                            <TableCell>
                                <Button
                                    variant="outline"
                                    className="mr-2"
                                    // onClick={() => setEditingCategory(category)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="destructive"
                                    // onClick={() => setDeletingCategoryId(category.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
    
            {/* <Dialog open={!!editingCategory} onOpenChange={() => setEditingCategory(null)}>
                {editingCategory && (
                    <CategoryForm initialData={editingCategory} onSuccess={(updatedCategory) => handleUpdate(updatedCategory)} />
                )}
            </Dialog> */}
    
            {/* <DeleteConfirmationDialog
                isOpen={!!deletingCategoryId}
                onClose={() => setDeletingCategoryId(null)}
                onConfirm={() => deletingCategoryId && handleDelete(deletingCategoryId)}
                title="Delete Category"
                description="Are you sure you want to delete this category? This action cannot be undone."
            /> */}
        </div>
    )
  }

export default CategoryList