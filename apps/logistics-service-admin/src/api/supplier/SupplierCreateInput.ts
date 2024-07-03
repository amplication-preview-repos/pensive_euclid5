import { ContractCreateNestedManyWithoutSuppliersInput } from "./ContractCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  contactInformation?: string | null;
  contracts?: ContractCreateNestedManyWithoutSuppliersInput;
  name?: string | null;
};
