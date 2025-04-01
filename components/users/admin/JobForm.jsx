"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
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
        message: "Category name must be at least 2 characters.",
      })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Category name can only contain letters and spaces.",
      })
  });

export default function JobForm({ initialCategories }) {

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        title: "",
        description: "",
    },
})

async function onSubmit(data) {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);

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
                {/* <DialogTitle>{initialData ? "Edit Category" : "Create Job"}</DialogTitle> */}
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
                                    <FormControl>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select a category" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                {initialCategories?.categories.map((category) => (
                                                    <SelectItem key={category._id} value={category.name}>
                                                        {category.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Save</Button>
                </form>
            </Form>
        </DialogContent>
    )
}