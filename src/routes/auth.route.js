import express from 'express';
import { login, register } from '../controllers/auth.controller.js';

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);

export default authRoute;
