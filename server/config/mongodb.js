import mongoose from "mongoose";
import chalk from "chalk";
const connectDB = async () => { 
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
     console.log(chalk.yellow(`Database Connected`));
    } catch (error) {
        console.log(error);
     
    }
}   

export default connectDB