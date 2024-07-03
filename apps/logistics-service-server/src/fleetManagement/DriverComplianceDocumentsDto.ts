import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("DriverComplianceDocumentsDtoObject")
class DriverComplianceDocumentsDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    documentName!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    documentType!: string;

    @Field(() => Date)
    @Type(() => Date)
    validFrom!: Date;

    @Field(() => Date)
    @Type(() => Date)
    validUntil!: Date;
}

export { DriverComplianceDocumentsDto as DriverComplianceDocumentsDto };