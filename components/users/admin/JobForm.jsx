"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
import { createCategory } from "@/actions/createCategory";

const formSchema = z.object({
    title: z.string().min(2, {
        message: "Job title must be at least 2 characters.",
    }),
    // Add description (make optional if needed with .optional())
    description: z.string().min(5, {
        message: "Description must be at least 5 characters.",
    }), // Adjust validation as needed
    selectCategory: z.string().min(1, {
        message: "Please select a category.",
    }),
});

export default function JobForm({ initialCategories }) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            selectCategory: "",
        },
    })

async function onSubmit(data) {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", data.selectCategory);

        console.log("Form data", formData);
        console.log("Success")

        // try {
        //     const result = await createCategory(formData);
        //     if (result?.error) {
        //         console.log("Error", result.error);
        //         toast.error(result.error);
        //     } else {
        //         console.log("Success", result);
        //         toast.success(result.success);   
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
}

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Initial Data</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Title */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter job title" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                        <FormItem>
                            <FormLabel>Job Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter description" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                        )}
                    />

                    {/* Select Category */}
                    <FormField
                        control={form.control}
                        name="selectCategory"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Select Category</FormLabel>
                                {/* Ensure the field.value passed to defaultValue is initially "" */}
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value} // This will be "" initially
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            {/* The placeholder shows when field.value is "" */}
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {/* Map over your actual categories */}
                                        {initialCategories?.categories?.map((category) => (
                                            // Ensure category.name is never an empty string if it's a valid category
                                            <SelectItem key={category._id} value={category.name}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage /> {/* This will show the validation error if nothing is selected */}
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </DialogContent>
    )
}