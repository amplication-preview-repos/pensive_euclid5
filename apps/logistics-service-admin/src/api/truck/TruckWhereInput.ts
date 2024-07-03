import { ComplianceDocumentWhereUniqueInput } from "../complianceDocument/ComplianceDocumentWhereUniqueInput";
import { ComplianceDocumentListRelationFilter } from "../complianceDocument/ComplianceDocumentListRelationFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverListRelationFilter } from "../driver/DriverListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TruckWhereInput = {
  complianceDocument?: ComplianceDocumentWhereUniqueInput;
  complianceDocuments?: ComplianceDocumentListRelationFilter;
  contracts?: ContractListRelationFilter;
  driver?: DriverWhereUniqueInput;
  drivers?: DriverListRelationFilter;
  id?: StringFilter;
  registrationNumber?: StringNullableFilter;
  truckNumber?: StringNullableFilter;
};
