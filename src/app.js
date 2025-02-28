import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
import chatbotRoutes from './routes/chatbot.routes.js';
import healthcheckRoutes from './routes/healthcheckrutes.js';
import { ApiError } from './utils/ApiError.js';

app.use('/api/v1/healthcheck', healthcheckRoutes);
app.use('/api/v1/chatbot', chatbotRoutes);

  
app.use((req, res, next) => {
    next(new ApiError(404, "Route not found"));
});



export default app;

