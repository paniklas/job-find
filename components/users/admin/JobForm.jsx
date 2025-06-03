"use client"

import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
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
            jobType: "",
            company: "",
            location: "",
            salary: "",
            requirements: "",
        },
    })

async function onSubmit() {

        setIsPending(true);
        const values = form.getValues();

        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("description", values.description);
        formData.append("category", values.selectCategory);
        formData.append("jobType", values.jobType);
        formData.append("company", values.company);
        formData.append("location", values.location);
        formData.append("salary", values.salary);
        
        const requirementsArray = values.requirements
            ? values.requirements.split('\n').map(req => req.trim()).filter(req => req !== '')
            : [];
        formData.append("requirements", JSON.stringify(requirementsArray));

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
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
                <DialogTitle className="text-2xl mb-5">Create a job</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Row 1: Title and Job Type */}
                <div className="grid grid-cols-2 gap-4">
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

                    <FormField
                    control={form.control}
                    name="jobType"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Job Type</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter job type (e.g. Full-time, Part-time)" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                {/* Row 2: Category and Location */}
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="selectCategory"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Select Category</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
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

                    <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter location" {...field} />
                        </FormControl>
                        <FormDescription>Enter the location for the job.</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                {/* Row 3: Company and Salary */}
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Company</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormDescription>For multiple companies, separate with commas</FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />

                    <FormField
                    control={form.control}
                    name="salary"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel>Salary</FormLabel>
                        <FormControl>
                            <Input type="number" placeholder="Enter salary amount" {...field} />
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                </div>

                {/* Full width: Description */}
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Job Description</FormLabel>
                        <FormControl>
                        <Textarea rows={5} placeholder="Enter description" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                {/* Full width: Requirements */}
                <FormField
                    control={form.control}
                    name="requirements"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Job Requirements</FormLabel>
                        <FormControl>
                        <Textarea
                            placeholder="Enter each requirement on a new line&#10;Example:&#10;5+ years of experience&#10;Strong JavaScript skills&#10;Bachelor's degree required"
                            className="min-h-[120px]"
                            {...field}
                        />
                        </FormControl>
                        <FormDescription>
                        Enter each requirement on a separate line. They will be displayed as bullet points.
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                    )}
                />

                <Button
                    type="submit"
                    disabled={isPending}
                    className="w-full text-xl"
                >
                    {isPending ? "Saving..." : "Save"}
                </Button>
                </form>
            </Form>
        </DialogContent>
    )
}