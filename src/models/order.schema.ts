import mongoose, { Document, Schema } from "mongoose";

export interface IOrder extends Document {
  itemName: string;
  itemPrice: number;
  orderDate: Date;
  customerId?:string;
}

const orderSchema = new Schema({
  itemName: {
    type: String,
    require: true,
    maxLength: 150,
  },
  itemPrice: {
    type: Number,
    require: true,
  },
  orderDate: {
    type: String,
    require: true,
    default: Date.now,
  },
});

export const Order = mongoose.model<IOrder>("order", orderSchema);

