import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";

export type ContractUpdateInput = {
  contractNumber?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  endDate?: Date | null;
  startDate?: Date | null;
  status?: "Option1" | null;
  supplier?: SupplierWhereUniqueInput | null;
  truck?: TruckWhereUniqueInput | null;
};
