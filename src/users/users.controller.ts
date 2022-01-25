import { Body, Controller, Get, HttpException, HttpStatus, NotFoundException, Param, ParseIntPipe, Post, Query, UnauthorizedException } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';


@ApiTags ('users')
@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {} 
   
    @ApiOkResponse({type: User, isArray: true})
    @ApiQuery({name: 'firstName', required: false})
    @Get() 
    getUsers(@Query('firstName') firstName: string): User[]
    {
        return this.usersService.findAll(firstName); 

        // if (!firstName) {
        //     throw new UnauthorizedException();
        // }

    }

    
    @ApiOkResponse({type: User, description:'Getting users by user id'})
    @ApiNotFoundResponse()
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): User {
            
            console.log('---->', typeof id)
            const user = this.usersService.findbyId(id); 
            if (!user) {
                throw new NotFoundException();
            }

            return user;
    }

    @ApiCreatedResponse({type: User})
    @ApiBadRequestResponse()
    @Post()
    createUser(@Body() body: CreateUserDto): User {
        return this.usersService.createUser(body); 
    }
}
