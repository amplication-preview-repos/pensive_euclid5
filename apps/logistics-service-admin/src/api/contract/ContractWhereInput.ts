import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";

export type ContractWhereInput = {
  contractNumber?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  supplier?: SupplierWhereUniqueInput;
  truck?: TruckWhereUniqueInput;
};
