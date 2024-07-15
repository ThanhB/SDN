import Review from '../models/Review.js';

// Tạo đánh giá cho gia sư
export const createReview = async (req, res) => {
  const { tutorId, rating, comment } = req.body;
  try {
    const review = new Review({
      studentId: req.user._id,
      tutorId,
      rating,
      comment
    });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Các hàm khác có thể thêm vào tại đây cho các chức năng khác của học viên