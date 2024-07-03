import { ContractUpdateManyWithoutCustomersInput } from "./ContractUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  contactInformation?: string | null;
  contracts?: ContractUpdateManyWithoutCustomersInput;
  name?: string | null;
};
