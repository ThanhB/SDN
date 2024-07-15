import express from 'express';
import { searchTutors, sendMessage, bookService, leaveReview } from '../controllers/studentController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/tutors/search', searchTutors);
router.post('/messages', sendMessage);
router.post('/bookings', bookService);
router.post('/reviews', leaveReview);

export default router;