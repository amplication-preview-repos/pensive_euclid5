import { SortOrder } from "../../util/SortOrder";

export type DriverOrderByInput = {
  createdAt?: SortOrder;
  currentLocation?: SortOrder;
  id?: SortOrder;
  licenseNumber?: SortOrder;
  name?: SortOrder;
  truckId?: SortOrder;
  updatedAt?: SortOrder;
};
