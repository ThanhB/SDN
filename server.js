import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import authRoutes from './routes/auth.js';
import tutorsRoutes from './routes/tutor.js';
import reviewsRoutes from './routes/review.js';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/tutors', tutorsRoutes);
app.use('/api/reviews', reviewsRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));