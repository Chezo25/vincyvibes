import mongoose, { Schema, Document } from 'mongoose';

export interface ICategory extends Document {
  _id: string;
  name: string;
  description: string;
  createdAt: Date;
}

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  });

const Category = mongoose.model<ICategory>('Category', categorySchema);

export default Category;
