import { connectToDatabase } from './mongoose';
import { Categories } from "@/utils/models";

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