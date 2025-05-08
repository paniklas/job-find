"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";

// Delete Job
export async function deleteCategory(categoryId) {
    try {
        await connectToDatabase();

        const category = await Categories.findByIdAndDelete(categoryId);

        if (!category) {
            return { error: "Category not found" };
        }

        revalidatePath("/dashboard/admin");
        return { success: "Category deleted successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to delete the category. Please try again." };
    }
}