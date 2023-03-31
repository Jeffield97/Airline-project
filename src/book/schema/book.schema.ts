import mongoose from 'mongoose';

export const BookScheme = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

BookScheme.index({ name: 1 }, { unique: true });
