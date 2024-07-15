import express from 'express';
import { approveContent, handleComplaints, manageReviews } from '../controllers/moderatorController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/contents/approval', approveContent);
router.post('/complaints', handleComplaints);
router.get('/reviews/manage', manageReviews);

export default router;