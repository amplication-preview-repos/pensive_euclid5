import { ContractCreateNestedManyWithoutCustomersInput } from "./ContractCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  contactInformation?: string | null;
  contracts?: ContractCreateNestedManyWithoutCustomersInput;
  name?: string | null;
};
