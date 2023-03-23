import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    }).then(() => console.log('MongoDB connected'))
        .catch((err) => console.log(err));
}




mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });



export default connectDB;