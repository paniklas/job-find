"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";
import slugify from 'slugify'; // For generating slugs

// Create category
export async function createCategory(formData) {

    console.log("Form data from client", formData);

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

        await newCategory.save({ name, description, slug });
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