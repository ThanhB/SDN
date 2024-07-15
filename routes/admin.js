import express from 'express';
import { manageUsers, updateSystemSettings } from '../controllers/adminController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.use(authMiddleware);

router.get('/users', manageUsers);
router.post('/system/settings', updateSystemSettings);

export default router;