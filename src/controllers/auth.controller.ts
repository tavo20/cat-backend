import { Request, Response } from 'express';
import User from '../models/UserM';
const UserService = require('../services/userService');

export const login = async (req: any, res: Response) => {
    try {

        const { email, password } = req.body;
        const { user, token } = await UserService.login(email, password);

        res.json({ user, token, message: 'User logged in successfully', success: true});

      } catch (error: any) {
        res.status(500).json({ error: error.message, success: false});
      }
}

export const register = async (req: any, res: Response) => {
    try {

        const user = await UserService.register(req.body);
        res.status(201).json({ message: 'User registered successfully', user, success: true});

    } catch (error: any) {
        res.status(500).json({ error: error.message, success: false});
    }
}