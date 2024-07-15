import express from 'express';
import { createService, getServices } from '../controllers/tutorController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

// Tạo dịch vụ mới (chỉ gia sư được phép)
router.post('/services', authMiddleware('tutor'), createService);

// Lấy danh sách dịch vụ (công khai)
router.get('/services', getServices);

export default router;