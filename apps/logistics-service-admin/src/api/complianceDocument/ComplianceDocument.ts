import { Truck } from "../truck/Truck";

export type ComplianceDocument = {
  createdAt: Date;
  documentName: string | null;
  documentType: string | null;
  id: string;
  truck?: Truck | null;
  trucks?: Array<Truck>;
  updatedAt: Date;
  validFrom: Date | null;
  validUntil: Date | null;
};
