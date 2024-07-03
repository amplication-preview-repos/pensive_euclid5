import { Injectable } from "@nestjs/common";
import { DriverComplianceDocumentsDto } from "../fleetManagement/DriverComplianceDocumentsDto";
import { TruckLocationDto } from "../fleetManagement/TruckLocationDto";
import { UpdateTruckLocationDto } from "../fleetManagement/UpdateTruckLocationDto";

@Injectable()
export class FleetManagementService {
  constructor() {}
  async GetDriverComplianceDocuments(args: string): Promise<DriverComplianceDocumentsDto[]> {
    throw new Error("Not implemented");
  }
  async GetTruckLocation(args: string): Promise<TruckLocationDto> {
    throw new Error("Not implemented");
  }
  async UpdateTruckLocation(args: UpdateTruckLocationDto): Promise<TruckLocationDto> {
    throw new Error("Not implemented");
  }
}
