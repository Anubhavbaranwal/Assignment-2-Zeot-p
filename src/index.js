import dotenv from 'dotenv';
// import connectDB from './db/connectDb.js';
import app from './app.js';

// Configure environment variables first
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 8000;

// Start server function
const startServer = async () => {
  try {
    // await connectDB();
    // console.log("✅ Database connected successfully");
    
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("❌ MongoDB connection failed !!", error);
    process.exit(1);
  }
};

startServer();