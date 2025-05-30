import mongoose from "mongoose";

const categoriesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String
    },
}, { 
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
    }
);


const jobsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    categories: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categories',
        required: true
    }],
    jobType: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: false
    },
    requirements: [{
        type: String,
        required: false
    }],
}, {
    timestamps: true, toJSON: { virtuals: true },
    toObject: { virtuals: true } 
    }
);

export const Categories = mongoose.models.Categories || mongoose.model("Categories", categoriesSchema);
export const Jobs = mongoose.models.Jobs || mongoose.model("Jobs", jobsSchema);
