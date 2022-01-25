import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
     private users: User[] = [{ id:0, firstName: 'Liam', lastName:'Ava' },{ id:1, firstName: 'Olivia ',  lastName:'Noah' },{ id:2, firstName: 'Emma',  lastName:'Charlotte' }];

     findAll(firstName?: string ): User[] {
        if (firstName) {
            return this.users.filter(user => user.firstName === firstName)
        }
         return this.users;
     }

     findbyId(userId: number): User {
         return this.users.find(user => user.id === userId);
     }

      createUser(createUserDto: CreateUserDto): User {
          const newUser = { id:Date.now(), ...createUserDto };

          this.users.push(newUser);

          return newUser
      }

    // createUser{{}}
}

