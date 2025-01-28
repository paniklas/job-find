import { connectToDatabase } from './mongoose';
import { Categories } from "@/utils/models";

// Get all categories
export const getCategories = async () => {
    try {
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