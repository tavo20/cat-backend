import { IUser } from "../interfaces/user";
import UserRepository from "../repositories/userRepository";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


class UserService {
    async login({ email, password }: { email: string, password: string }) {
        const user = await UserRepository.findByEmail(email);
        if (!user) {
            throw new Error('User not found');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid password');
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || 'hola-mundo', {
            expiresIn: '24h',
        });

        
        return { token, user: user.toObject() };
    }

    async register(userData: IUser) {
        const { name, email, password } = userData;
        let user = await UserRepository.findByEmail(email);
        if (user) {
          throw new Error('User already exists');
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await UserRepository.create({ name, email, password: hashedPassword });
        return newUser;
    }
}

export default new UserService();
