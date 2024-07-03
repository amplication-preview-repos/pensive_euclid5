import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { TruckUpdateManyWithoutComplianceDocumentsInput } from "./TruckUpdateManyWithoutComplianceDocumentsInput";

export type ComplianceDocumentUpdateInput = {
  documentName?: string | null;
  documentType?: string | null;
  truck?: TruckWhereUniqueInput | null;
  trucks?: TruckUpdateManyWithoutComplianceDocumentsInput;
  validFrom?: Date | null;
  validUntil?: Date | null;
};
