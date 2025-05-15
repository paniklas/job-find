import { connectToDatabase } from './mongoose';
import { Categories, Jobs } from "@/utils/models";


// Get all categories
export const getCategories = async () => {
    try {
        console.log("Fetching categories");
        await connectToDatabase();
        const categories = await Categories.find().lean();

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
        await connectToDatabase();
        const jobs = await Jobs.find({})
            .populate('categories')
            .sort({ createdAt: -1 })
            .lean();

        return {
            jobs,
        }

    } catch (error) {
        console.error('Error fetching jobs', error);
        throw new Error("Failed to fetch jobs", error);
    }
};

// Get job by slug
export const getJobBySlug = async (slug) => {
    try {
        await connectToDatabase();
        const job = await Jobs.findOne({ slug }).lean();

        if (!job) {null}

        return {
            job,
        }

    } catch (error) {
        console.error('Error fetching job by slug', error);
        throw new Error("Failed to fetch job", error);
    }
};