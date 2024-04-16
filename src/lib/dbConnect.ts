import mongoose from "mongoose";

// Define a type for the connection object
type ConnectionObject = {
  isConnected?: number; // Indicates if the connection is established
};

// Initialize an empty connection object
const connection: ConnectionObject = {};

// Function to establish database connection
async function dbConnection(): Promise<void> {
  // Check if already connected to the database
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }

  try {
    // Connect to the MongoDB database using the provided URI
    const db = await mongoose.connect(process.env.MONGO_URI || "");
    
    // Update the connection status
    connection.isConnected = db.connections[0].readyState;
    
    // Log successful database connection
    console.log("DB connected successfully");
  } catch (error) {
    // Log error if database connection fails
    console.log("Database connection failed: ", error);
    
    // Exit the process with failure status
    process.exit(1);
  }
}

export default dbConnection;
