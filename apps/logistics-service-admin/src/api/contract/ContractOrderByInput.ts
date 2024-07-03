import { SortOrder } from "../../util/SortOrder";

export type ContractOrderByInput = {
  contractNumber?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  supplierId?: SortOrder;
  truckId?: SortOrder;
  updatedAt?: SortOrder;
};
