import Service from '../models/Service.js';

export const getServices = async (req, res) => {
  try {
    const services = await Service.find().populate('tutorId', 'name');
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add more functions as needed
s