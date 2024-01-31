import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

// Import Custom Middleware
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

// Routes Import
import router from './routes/userRoute.js';

const app = express();
const port = process.env.PORT || 5000;

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/user', router);

// Error Handlers
app.use(notFound);
app.use(errorHandler);

const start = () => {
  app.listen(port, () => console.log(`Listening to port: ${port}`));
};

start();
