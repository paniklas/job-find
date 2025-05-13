// Component Category List. Showing a list of categories with edit and delete actions.

"use client";

    // TODO: Fix the full width in categories table

    import { useState } from "react"
    import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
    import { Button } from "@/components/ui/button"
    import {
      Dialog,
      DialogContent,
      DialogDescription,
      DialogFooter,
      DialogHeader,
      DialogTitle,
    } from "@/components/ui/dialog"
    import { toast } from "sonner";
    import { deleteCategory } from "@/actions/deleteCategory";


const CategoryList = ({ initialCategories }) => {
  const [categories, setCategories] = useState(initialCategories?.categories || [])
  const [deletingCategoryId, setDeletingCategoryId] = useState(null)

  // Function to handle category deletion
  const handleDeleteCategory = async () => {
    if (!deletingCategoryId) return

    try {
      const result = await deleteCategory(deletingCategoryId)

      if (result.error) {
        toast.error(result.error)
        return
      }

      // Update state to remove the deleted category locally
      setCategories(categories.filter((category) => category._id !== deletingCategoryId))

      toast.success("Category deleted successfully")
    } catch (error) {
      console.error("Error deleting category:", error)
        toast.error("There was an error deleting the category. Please try again.")
    } finally {
      setDeletingCategoryId(null)
    }
  }

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
          {categories.map((category) => (
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
                <Button variant="destructive" onClick={() => setDeletingCategoryId(category._id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
           {categories.length === 0 && (
              <TableRow className="p-12">
                  <TableCell colSpan={4} className="text-center">
                      <span className="text-xl">No categories available</span>
                  </TableCell>
              </TableRow>
            )}
        </TableBody>
      </Table>

      <Dialog open={!!deletingCategoryId} onOpenChange={(open) => !open && setDeletingCategoryId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Category</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this category? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeletingCategoryId(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteCategory}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default CategoryList