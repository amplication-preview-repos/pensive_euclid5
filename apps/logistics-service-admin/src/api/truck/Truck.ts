import { ComplianceDocument } from "../complianceDocument/ComplianceDocument";
import { Contract } from "../contract/Contract";
import { Driver } from "../driver/Driver";

export type Truck = {
  complianceDocument?: ComplianceDocument | null;
  complianceDocuments?: Array<ComplianceDocument>;
  contracts?: Array<Contract>;
  createdAt: Date;
  driver?: Driver | null;
  drivers?: Array<Driver>;
  id: string;
  registrationNumber: string | null;
  truckNumber: string | null;
  updatedAt: Date;
};
