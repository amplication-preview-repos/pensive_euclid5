import { ComplianceDocumentWhereUniqueInput } from "../complianceDocument/ComplianceDocumentWhereUniqueInput";
import { ComplianceDocumentCreateNestedManyWithoutTrucksInput } from "./ComplianceDocumentCreateNestedManyWithoutTrucksInput";
import { ContractCreateNestedManyWithoutTrucksInput } from "./ContractCreateNestedManyWithoutTrucksInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverCreateNestedManyWithoutTrucksInput } from "./DriverCreateNestedManyWithoutTrucksInput";

export type TruckCreateInput = {
  complianceDocument?: ComplianceDocumentWhereUniqueInput | null;
  complianceDocuments?: ComplianceDocumentCreateNestedManyWithoutTrucksInput;
  contracts?: ContractCreateNestedManyWithoutTrucksInput;
  driver?: DriverWhereUniqueInput | null;
  drivers?: DriverCreateNestedManyWithoutTrucksInput;
  registrationNumber?: string | null;
  truckNumber?: string | null;
};
