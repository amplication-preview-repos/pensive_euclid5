import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  contactInformation?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
