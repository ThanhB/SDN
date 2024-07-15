import express from 'express';
import { createReview } from '../controllers/studentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Đánh giá gia sư (chỉ học viên được phép)
router.post('/', authMiddleware('student'), createReview);

export default router;