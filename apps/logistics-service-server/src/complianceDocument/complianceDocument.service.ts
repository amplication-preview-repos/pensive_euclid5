import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ComplianceDocumentServiceBase } from "./base/complianceDocument.service.base";

@Injectable()
export class ComplianceDocumentService extends ComplianceDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
