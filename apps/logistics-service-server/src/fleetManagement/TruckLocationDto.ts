import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("TruckLocationDtoObject")
class TruckLocationDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    latitude!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    longitude!: string;

    @Field(() => Date)
    @Type(() => Date)
    timestamp!: Date;
}

export { TruckLocationDto as TruckLocationDto };