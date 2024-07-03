import { ContractUpdateManyWithoutSuppliersInput } from "./ContractUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  contactInformation?: string | null;
  contracts?: ContractUpdateManyWithoutSuppliersInput;
  name?: string | null;
};
