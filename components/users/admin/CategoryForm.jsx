"use client"

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { createCategory } from "@/actions/createCategory";


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Category name must be at least 2 characters.",
    })
      .regex(/^[a-zA-Z\s]+$/, {
        message: "Category name can only contain letters and spaces.",
    }),
    description: z.string().min(2, {
        message: "Category description is required.",
    }),
});

export default function CategoryForm() {

    const [isPending, setIsPending] = useState(false);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            description: "",
        },
    })

    const onSubmit = async () => {

        setIsPending(true);
        const values = form.getValues();

        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);

        // console.log("Form data", formData);
        // console.log("Success")

        const result = await createCategory(formData)
        setIsPending(false)

        if (result.success) {
            toast.success("Success", {
                description: result.success,
            })
            form.reset();
        }
        else {
            const errorMessage = 
                result.errors?.name?.[0] || 
                result.errors?.description?.[0] || 
                result.errors?.server?.[0] || 
                "An error occurred. Please try again."
            toast.error("Error", {
                description: errorMessage,
            })
        }
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Create Category</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category Name</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter category name" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Category Description</FormLabel>
                        <FormControl>
                            <Input placeholder="Enter category description" {...field} />
                        </FormControl>
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