import { Request, Response } from 'express';
import UserService from '../services/userService';
// const UserService = require('../services/userService');

export const login = async (req: any, res: Response) => {
    try {
        const { email, password } = req.body;
        let { user, token } = await UserService.login({ email, password });

        delete user.password;
        res.json({ user, token, message: 'User logged in successfully', success: true});

      } catch (error: any) {
        res.status(500).json({ error: error.message, success: false});
      }
}

export const register = async (req: any, res: Response) => {
    try {

        let user = await UserService.register(req.body);
        const userObject = {
            _id: user._id,
            name: user.name,
            email: user.email,
        
        }
        res.status(201).json({ message: 'User registered successfully', user: userObject, success: true});

    } catch (error: any) {
        res.status(500).json({ error: error.message, success: false});
    }
}