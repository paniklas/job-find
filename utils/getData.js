import { connectToDatabase } from './mongoose';
import { Categories, Jobs } from "@/utils/models";

// Get all categories
export const getCategories = async () => {
    try {
        console.log("Fetching categories");
        await connectToDatabase();
        const categories = await Categories.find().lean();

        // console.log("Categories", categories);

        return {
            categories,
        }

    } catch (error) {
        console.error('Error fetching categories', error);
        throw new Error("Failed to fetch categories", error);
    }
};

// Get all jobs
export const getJobs = async () => {
    try {
        console.log("Fetching jobs");
        await connectToDatabase();
        const jobs = await Jobs.find().lean();
        console.log("Jobs", jobs);

        return {
            jobs,
        }

    } catch (error) {
        console.error('Error fetching jobs', error);
        throw new Error("Failed to fetch jobs", error);
    }
};