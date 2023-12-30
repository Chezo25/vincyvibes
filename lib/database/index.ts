import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

let cached = (global as any ).mongoose || { connection: null, promise: null };

export const connectToDatabase = async () => {
  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
      throw new Error("MongoDB connection string not provided");
    }

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      return mongoose;
    });
  }

  cached.connection = await cached.promise;
  return cached.connection;
};
