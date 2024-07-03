import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { TruckCreateNestedManyWithoutComplianceDocumentsInput } from "./TruckCreateNestedManyWithoutComplianceDocumentsInput";

export type ComplianceDocumentCreateInput = {
  documentName?: string | null;
  documentType?: string | null;
  truck?: TruckWhereUniqueInput | null;
  trucks?: TruckCreateNestedManyWithoutComplianceDocumentsInput;
  validFrom?: Date | null;
  validUntil?: Date | null;
};
