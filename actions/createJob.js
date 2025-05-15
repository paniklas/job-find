"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Jobs, Categories } from "@/utils/models";
import { revalidatePath } from "next/cache";
import slugify from 'slugify';


// Create job
// export async function createJob(formData) {

//     console.log("Form data Job Form", formData);

//     const { title, description, category, jobType, company, location, salary } = Object.fromEntries(formData);

//     try {
//         await connectToDatabase();

//         // Generate a slug from the title
//         const slug = slugify(title, { lower: true });

//         // Find the category by name to get its ObjectId
//         const categoryDoc = await Categories.findOne({ name: category });

//         if (!categoryDoc) {
//             return { error: "Category not found" };
//         }

//         console.log("Form data before save", {
//             title,
//             description,
//             category,
//             jobType,
//             company,
//             location,
//             salary
//         });

//         const newJob = new Jobs({
//             title: title,
//             description: description,
//             slug: slug,
//             categories: [categoryDoc._id],
//             jobType,
//             company,
//             location,
//             salary,
//         });

//         console.log("New job", newJob);

//         await newJob.save();
//         revalidatePath("/dashboard/admin");

//         return { success: "Job added successfully" };
//     } catch (error) {
//         console.log(error);
//         return { error: "There has been an error to submit the form. Please try again." };
//     }
// }

export async function createJob(formData) {
    console.log("Form data Job Form", formData);

    const { title, description, category, jobType, company, location, salary } = Object.fromEntries(formData);

    try {
        await connectToDatabase();

        // Generate a slug from the title
        const slug = slugify(description, { lower: true });

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
            jobType,      // Added this field
            company,      // Added this field
            location,     // Added this field
            salary,       // Added this field
        });

        console.log("New job", newJob);

        const savedJob = await newJob.save();
        const verifiedJob = await Jobs.findById(savedJob._id);
        console.log("Verified job from DB:", JSON.stringify(verifiedJob, null, 2));
        revalidatePath("/dashboard/admin");

        return { success: "Job added successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to submit the form. Please try again." };
    }
}