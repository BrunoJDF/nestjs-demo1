import { PartialType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  @IsNotEmpty()
  description: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) { }
