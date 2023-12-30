import {Schema, model, Document} from 'mongoose';

export interface IEvent extends Document {
    _id: string;
    title: string;
    description: string;
    location: string;
    organizer: {_id: string, firstname: string, lastname: string} // Reference to the User model for the organizer
    startDateTime: Date;
    endDateTime: Date;
    createdAt: Date;
    imageUrl: string;
    updatedAt: Date;
    price: string;
    isFree: boolean;
    url?: string;
    category?: {_id: string, name: string} // Reference to the Category model
  }

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model for the organizer
    required: true,
  },
  startDateTime: { 
    type: Date, 
    default: Date.now
  },
  endDateTime: { 
    type: Date, 
    default: Date.now
 },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  imageUrl: { 
    type: String, 
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  price: {type: String, required: true},
  isFree: {type: Boolean, default: false},
  url: {type:String},
  category:{type: Schema.Types.ObjectId, ref: 'Category'},
});

const Event = model('Event', eventSchema);

export default Event;
