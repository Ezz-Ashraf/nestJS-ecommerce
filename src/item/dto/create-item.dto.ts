import { IsString ,IsNumber} from "class-validator";

export class CreateItemDto {

    @IsString()
    name: string;

    @IsNumber()
    price:number
    
}
