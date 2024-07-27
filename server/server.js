require('dotenv').config(); // Load environment variables
const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use PORT from environment variables or default to 5000
const cors = require("cors");


const corsOptions = {
  origin:"http://localhost:5173",
  method:"GET,POST,PUT,DELETE,PATCH,HEAD",
  Credentials:true,
}


 // let's tackle cors to handle cors policy issue
app.use(cors(corsOptions));


// middleware to parse json bodies
app.use(express.json());

const authRouter = require('./Routers/auth-router');
const contactRouter = require("./Routers/Contact-router");

// Mount the authRouter at '/api/auth' endpoint (for specific path)
app.use('/api/auth', authRouter);
app.use('/api/form',contactRouter);

// Import and call connectDb function to establish database connection
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');


app.use(errorMiddleware);




connectDb()
  .then(() => {
    // Start the Express server
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  