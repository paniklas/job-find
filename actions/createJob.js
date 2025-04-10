"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Jobs, Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";
import slugify from 'slugify';


// Create job
export async function createJob(formData) {

    const { title, description, category } = Object.fromEntries(formData);

    try {
        await connectToDatabase();

        // Generate a slug from the title
        const slug = slugify(title, { lower: true });

        // Find the category by name to get its ObjectId
        const categoryDoc = await Categories.findOne({ name: category });

        if (!categoryDoc) {
            return { error: "Category not found" };
        }

        const newJob = new Jobs({
            title: title,
            description: description,
            slug: slug,
            categories: [categoryDoc._id]
        });

        await newJob.save();
        revalidatePath("/dashboard/admin");

        return { success: "Job added successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to submit the form. Please try again." };
    }
}