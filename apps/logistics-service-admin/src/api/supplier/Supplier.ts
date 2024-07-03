import { Contract } from "../contract/Contract";

export type Supplier = {
  contactInformation: string | null;
  contracts?: Array<Contract>;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
