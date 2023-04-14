import { IsString ,IsEmail} from "class-validator";

export class CreateUserDto {
    @IsString()
    firstName: string;
    
    @IsEmail()
    email:string

    @IsString()
    lastName:string;
}
