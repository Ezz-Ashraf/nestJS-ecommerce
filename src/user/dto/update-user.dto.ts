import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {  IsString ,IsEmail } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {

    @IsString()
    firstName: string;
    
    @IsEmail()
    email:string


    @IsString()
    lastName:string;
}
