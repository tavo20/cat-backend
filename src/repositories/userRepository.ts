import { IUser } from "../interfaces/user";
import User from "../models/UserM"


export class UserRepository {
  async findByEmail(email: string) {
    return User.findOne({ email });
  }

  async findById(id: string) {
    return User.findById(id);
  }

  async create(userData: IUser) {
    const user = new User(userData);
    return user.save();
  }
}

export default new UserRepository();
