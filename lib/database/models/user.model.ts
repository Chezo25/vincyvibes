import {Schema, model, Document} from 'mongoose';

export interface IUser extends Document {
  clerkId: string;
  username: string;
  email: string;
  events: Schema.Types.ObjectId[]; // Assuming events is an array of ObjectId
}

const UserSchema = new Schema({
  clerkId: {
    type: String, // Clerk user ID
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  firstName: { 
    type: String, 
    required: true
  },
  lastName: { 
    type: String, 
    required: true
  },
  photo: { 
    type: String, 
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  events: [{ type: Schema.Types.ObjectId, ref: 'Event' }],
  orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
  clerk: {
    // Additional Clerk-related information
    publicKey: String,
    userHandle: String,
    verified: Boolean,
    // Add other Clerk-related fields as needed
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = model('User', UserSchema);

export default User;
