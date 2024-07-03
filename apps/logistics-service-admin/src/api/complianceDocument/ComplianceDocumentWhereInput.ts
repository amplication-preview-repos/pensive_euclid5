import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { TruckListRelationFilter } from "../truck/TruckListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ComplianceDocumentWhereInput = {
  documentName?: StringNullableFilter;
  documentType?: StringNullableFilter;
  id?: StringFilter;
  truck?: TruckWhereUniqueInput;
  trucks?: TruckListRelationFilter;
  validFrom?: DateTimeNullableFilter;
  validUntil?: DateTimeNullableFilter;
};
