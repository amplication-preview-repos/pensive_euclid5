import { SortOrder } from "../../util/SortOrder";

export type ComplianceDocumentOrderByInput = {
  createdAt?: SortOrder;
  documentName?: SortOrder;
  documentType?: SortOrder;
  id?: SortOrder;
  truckId?: SortOrder;
  updatedAt?: SortOrder;
  validFrom?: SortOrder;
  validUntil?: SortOrder;
};
