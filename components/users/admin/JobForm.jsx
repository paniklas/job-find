"use client"

import { useState } from "react";
import { toast } from "sonner";
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
import { createJob } from "@/actions/createJob";

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

    const [isPending, setIsPending] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            selectCategory: "",
        },
    })

async function onSubmit() {

        setIsPending(true);
        const values = form.getValues();

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("category", values.selectCategory);

        console.log("Form data Job Form", formData);

        try {
            const result = await createJob(formData);
            setIsPending(false);
            if (result?.success) {
                console.log("Success", result);
                toast.success("Success", {
                    description: result.success,
                })

                form.reset();
            } else  {
                console.log("Error", result.error);
                toast.error(result.error);
            }
        } catch (error) {
            console.log(error);
        }
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
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        {initialCategories?.categories?.map((category) => (
                                            <SelectItem key={category._id} value={category.name}>
                                                {category.name}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button
                        type="submit"
                        disabled={isPending}
                    >
                        {isPending ? "Saving..." : "Save"}
                    </Button>
                </form>
            </Form>
        </DialogContent>
    )
}