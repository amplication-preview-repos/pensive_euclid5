import { Module } from "@nestjs/common";
import { ComplianceDocumentModuleBase } from "./base/complianceDocument.module.base";
import { ComplianceDocumentService } from "./complianceDocument.service";
import { ComplianceDocumentController } from "./complianceDocument.controller";
import { ComplianceDocumentResolver } from "./complianceDocument.resolver";

@Module({
  imports: [ComplianceDocumentModuleBase],
  controllers: [ComplianceDocumentController],
  providers: [ComplianceDocumentService, ComplianceDocumentResolver],
  exports: [ComplianceDocumentService],
})
export class ComplianceDocumentModule {}
