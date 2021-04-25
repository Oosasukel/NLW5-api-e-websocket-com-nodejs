import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getRepository(User);
  }

  async create(email: string) {
    const user = await this.usersRepository.findOne({
      email,
    });

    if (user) {
      return user;
    }

    const newUser = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(newUser);

    return newUser;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({
      email,
    });

    return user;
  }
}

export { UsersService };
