"use server"

import { connectToDatabase } from "@/utils/mongoose"
import { Jobs } from "@/utils/models";
import { revalidatePath } from "next/cache";

// Delete Job
export async function deleteJob(id) {
    try {
        await connectToDatabase();

        const job = await Jobs.findByIdAndDelete(id);

        if (!job) {
            return { error: "Job not found" };
        }

        revalidatePath("/dashboard/admin");
        return { success: "Job deleted successfully" };
    } catch (error) {
        console.log(error);
        return { error: "There has been an error to delete the job. Please try again." };
    }
}