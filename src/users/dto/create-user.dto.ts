import { ApiProperty } from "@nestjs/swagger";
import { IsAlphanumeric, MaxLength } from "class-validator";

 export class CreateUserDto{
        @ApiProperty()
        @MaxLength(10)
        @IsAlphanumeric()
        firstName: string;
        
        @ApiProperty()
        @MaxLength(10)
        @IsAlphanumeric()
        lastName: string;

        // @ApiProperty({required: false})
        // age?: number;
 };

