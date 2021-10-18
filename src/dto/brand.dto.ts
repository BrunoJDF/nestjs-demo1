import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBrandDto {
    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) { }