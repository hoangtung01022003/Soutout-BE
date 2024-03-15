import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      retryWrites: true, w: 'majority', dbName: 'soutout'
    });

    mongoose.set('strictQuery', true)

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;


