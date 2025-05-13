"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";
import slugify from 'slugify'; // For generating slugs


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


// Create category
export async function createCategory(formData) {

    const { name, description } = Object.fromEntries(formData);

    try {
        await connectToDatabase();

        // Generate a slug from the name
        const slug = slugify(name, { lower: true });

        const newCategory = new Categories({
            name: name,
            description: description,
            slug: slug
        });

        await newCategory.save();
        revalidatePath("/dashboard/admin");

        return { success: "Category added successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to submit the form. Please try again." };
    }
}