import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoryDto {
    @IsString()
    @IsNotEmpty()
    description: string;
}

export class UpdateCategoryDto extends PartialType(CreateCategoryDto) { }