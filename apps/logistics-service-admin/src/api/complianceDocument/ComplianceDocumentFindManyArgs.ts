import { ComplianceDocumentWhereInput } from "./ComplianceDocumentWhereInput";
import { ComplianceDocumentOrderByInput } from "./ComplianceDocumentOrderByInput";

export type ComplianceDocumentFindManyArgs = {
  where?: ComplianceDocumentWhereInput;
  orderBy?: Array<ComplianceDocumentOrderByInput>;
  skip?: number;
  take?: number;
};
