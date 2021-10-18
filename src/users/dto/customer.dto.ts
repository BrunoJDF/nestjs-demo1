import { PartialType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerDto {
    @IsString()
    @IsNotEmpty()
    ruc: string;
    @IsString()
    @IsNotEmpty()
    businessName: string;
    @IsString()
    @IsNotEmpty()
    status: string;
}

export class UdpdateCustomerDto extends PartialType(CreateCustomerDto) { }