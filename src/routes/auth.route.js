import express from 'express';
import { login, register, refreshAccessToken, logout } from '../controllers/auth.controller.js';

const authRoute = express.Router();

authRoute.post('/login', login);
authRoute.post('/register', register);
authRoute.get('/refresh', refreshAccessToken);
authRoute.get('/logout', logout);

export default authRoute;
