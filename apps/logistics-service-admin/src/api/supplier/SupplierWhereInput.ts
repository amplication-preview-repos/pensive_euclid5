import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ContractListRelationFilter } from "../contract/ContractListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  contactInformation?: StringNullableFilter;
  contracts?: ContractListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
