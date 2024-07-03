import { ComplianceDocument as TComplianceDocument } from "../api/complianceDocument/ComplianceDocument";

export const COMPLIANCEDOCUMENT_TITLE_FIELD = "documentName";

export const ComplianceDocumentTitle = (
  record: TComplianceDocument
): string => {
  return record.documentName?.toString() || String(record.id);
};
