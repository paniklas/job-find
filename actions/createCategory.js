"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";
import slugify from 'slugify'; // For generating slugs

// Create category
export async function createCategory(formData) {
    const { title } = Object.fromEntries(formData);

    try {
        await connectToDatabase();

        const newCategory = new Categories({
            title: title
        });

        // Generate a slug from the title
        const slug = slugify(title, { lower: true });

        await newCategory.save({ title, slug });
        revalidatePath("/dashboard/admin");

        return { success: "Category added successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to submit the form. Please try again." };
    }
}


export async function getAllCategories() {
    try {
        await connectToDatabase();
        const categories = await Category.find({}).sort({ createdAt: -1 });
        return { success: true, data: categories };
    } catch (error) {
        console.error('Error in getAllCategories:', error);
        return { error: error.message || 'Failed to fetch categories' };
    }
}