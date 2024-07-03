import * as graphql from "@nestjs/graphql";
import { ComplianceDocumentResolverBase } from "./base/complianceDocument.resolver.base";
import { ComplianceDocument } from "./base/ComplianceDocument";
import { ComplianceDocumentService } from "./complianceDocument.service";

@graphql.Resolver(() => ComplianceDocument)
export class ComplianceDocumentResolver extends ComplianceDocumentResolverBase {
  constructor(protected readonly service: ComplianceDocumentService) {
    super(service);
  }
}
