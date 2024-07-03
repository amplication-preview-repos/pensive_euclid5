/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TruckWhereUniqueInput } from "../../truck/base/TruckWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TruckUpdateManyWithoutComplianceDocumentsInput {
  @Field(() => [TruckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TruckWhereUniqueInput],
  })
  connect?: Array<TruckWhereUniqueInput>;

  @Field(() => [TruckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TruckWhereUniqueInput],
  })
  disconnect?: Array<TruckWhereUniqueInput>;

  @Field(() => [TruckWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TruckWhereUniqueInput],
  })
  set?: Array<TruckWhereUniqueInput>;
}

export { TruckUpdateManyWithoutComplianceDocumentsInput as TruckUpdateManyWithoutComplianceDocumentsInput };
