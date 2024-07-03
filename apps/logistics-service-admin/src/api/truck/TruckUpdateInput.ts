import { ComplianceDocumentWhereUniqueInput } from "../complianceDocument/ComplianceDocumentWhereUniqueInput";
import { ComplianceDocumentUpdateManyWithoutTrucksInput } from "./ComplianceDocumentUpdateManyWithoutTrucksInput";
import { ContractUpdateManyWithoutTrucksInput } from "./ContractUpdateManyWithoutTrucksInput";
import { DriverWhereUniqueInput } from "../driver/DriverWhereUniqueInput";
import { DriverUpdateManyWithoutTrucksInput } from "./DriverUpdateManyWithoutTrucksInput";

export type TruckUpdateInput = {
  complianceDocument?: ComplianceDocumentWhereUniqueInput | null;
  complianceDocuments?: ComplianceDocumentUpdateManyWithoutTrucksInput;
  contracts?: ContractUpdateManyWithoutTrucksInput;
  driver?: DriverWhereUniqueInput | null;
  drivers?: DriverUpdateManyWithoutTrucksInput;
  registrationNumber?: string | null;
  truckNumber?: string | null;
};
