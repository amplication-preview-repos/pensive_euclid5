import * as graphql from "@nestjs/graphql";
import { DriverComplianceDocumentsDto } from "../fleetManagement/DriverComplianceDocumentsDto";
import { TruckLocationDto } from "../fleetManagement/TruckLocationDto";
import { UpdateTruckLocationDto } from "../fleetManagement/UpdateTruckLocationDto";
import { FleetManagementService } from "./fleetmanagement.service";

export class FleetManagementResolver {
  constructor(protected readonly service: FleetManagementService) {}

  @graphql.Query(() => [DriverComplianceDocumentsDto])
  async GetDriverComplianceDocuments(
    @graphql.Args()
    args: string
  ): Promise<DriverComplianceDocumentsDto[]> {
    return this.service.GetDriverComplianceDocuments(args);
  }

  @graphql.Query(() => TruckLocationDto)
  async GetTruckLocation(
    @graphql.Args()
    args: string
  ): Promise<TruckLocationDto> {
    return this.service.GetTruckLocation(args);
  }

  @graphql.Mutation(() => TruckLocationDto)
  async UpdateTruckLocation(
    @graphql.Args()
    args: UpdateTruckLocationDto
  ): Promise<TruckLocationDto> {
    return this.service.UpdateTruckLocation(args);
  }
}
