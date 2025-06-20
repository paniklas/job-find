"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Jobs, Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";
import slugify from 'slugify';


export async function createJob(formData) {
    console.log("Form data Job Form", formData);

    try {
        await connectToDatabase();

         // Extract all form fields
         const title = formData.get("title");
         const description = formData.get("description");
         const category = formData.get("category");
         const jobType = formData.get("jobType");
         const company = formData.get("company");
         const location = formData.get("location");
         const salary = formData.get("salary");
         const requirementsJSON = formData.get("requirements");
 
         // Parse requirements from JSON string
         let requirements = [];
         if (requirementsJSON) {
             try {
                 requirements = JSON.parse(requirementsJSON);
             } catch (error) {
                 console.error("Error parsing requirements:", error);
                 requirements = [];
             }
         }

        // Generate a slug from the title
        const slug = slugify(title, { lower: true });

        // Find the category by name to get its ObjectId
        const categoryDoc = await Categories.findOne({ name: category });

        if (!categoryDoc) {
            return { error: "Category not found" };
        }

        const newJob = new Jobs({
            title,
            slug,
            description,
            categories: [categoryDoc._id],
            jobType,
            company,
            location,
            salary,
            requirements
        });

        const savedJob = await newJob.save();

        return { success: "Job added successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to submit the form. Please try again." };
    }
}