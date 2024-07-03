import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ComplianceDocumentService } from "./complianceDocument.service";
import { ComplianceDocumentControllerBase } from "./base/complianceDocument.controller.base";

@swagger.ApiTags("complianceDocuments")
@common.Controller("complianceDocuments")
export class ComplianceDocumentController extends ComplianceDocumentControllerBase {
  constructor(protected readonly service: ComplianceDocumentService) {
    super(service);
  }
}
