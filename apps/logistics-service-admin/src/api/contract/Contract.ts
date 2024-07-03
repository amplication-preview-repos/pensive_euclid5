import { Customer } from "../customer/Customer";
import { Supplier } from "../supplier/Supplier";
import { Truck } from "../truck/Truck";

export type Contract = {
  contractNumber: string | null;
  createdAt: Date;
  customer?: Customer | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  status?: "Option1" | null;
  supplier?: Supplier | null;
  truck?: Truck | null;
  updatedAt: Date;
};
