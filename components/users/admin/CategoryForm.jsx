"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"


const formSchema = z.object({
    name: z.string().min(2, {
        message: "Category name must be at least 2 characters.",
    }),
})

export default function CategoryForm({ initialData, onSuccess }) {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
        name: "",
    },
})

    function onSubmit(values) {
        onSuccess(initialData ? { ...values, id: initialData.id } : values)
    }

    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>{initialData ? "Edit Category" : "Create Category"}</DialogTitle>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                <Button type="submit">Save</Button>
                </form>
            </Form>
        </DialogContent>
    )
}