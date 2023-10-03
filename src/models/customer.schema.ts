import mongoose, { Document, Schema } from "mongoose";

export interface ICustomer extends Document {
  name: string;
  address: string;
  mobile: string;
  orders: mongoose.Types.ObjectId[] | [];
  profilePic: string;
}

const customerSchema = new Schema({
  name: {
    type: String,
    require: true,
    maxLength: 100,
  },
  address: {
    type: String,
    require: true,
    maxLength: 250,
  },
  mobile: {
    type: String,
    require: true,
    minLength: 10,
    maxLength: 10,
  },
  orders: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  profilePic: {
    type: String,
    require: true,
  },
});

export const Customer = mongoose.model<ICustomer>("customer", customerSchema);
