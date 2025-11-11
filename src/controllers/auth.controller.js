import User from '../models/user.model.js';
import bcrypt from 'bcrypt';

export const register = async (req, res) => {
  try {
    const { email, username, password, confirmPassword } = req.body;

    // Validate required fields
    if (!email || !username || !password || !confirmPassword) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({ message: 'Email already used' });
    }

    // Check if password matches confirmPassword     
    if (password !== confirmPassword) {       
      return res.status(400).json({ message: 'Passwords do not match' });     
    }  

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
export const login = (req, res) => {};
