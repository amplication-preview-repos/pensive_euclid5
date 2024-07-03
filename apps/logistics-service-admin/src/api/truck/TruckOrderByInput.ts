import { SortOrder } from "../../util/SortOrder";

export type TruckOrderByInput = {
  complianceDocumentId?: SortOrder;
  createdAt?: SortOrder;
  driverId?: SortOrder;
  id?: SortOrder;
  registrationNumber?: SortOrder;
  truckNumber?: SortOrder;
  updatedAt?: SortOrder;
};
