import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FleetManagementService } from "./fleetmanagement.service";
import { UpdateTruckLocationDto } from "../fleetManagement/UpdateTruckLocationDto";
import { DriverComplianceDocumentsDto } from "../fleetManagement/DriverComplianceDocumentsDto";
import { TruckLocationDto } from "../fleetManagement/TruckLocationDto";

@swagger.ApiTags("fleetManagements")
@common.Controller("fleetManagements")
export class FleetManagementController {
  constructor(protected readonly service: FleetManagementService) {}

  @common.Get("/drivers/:id/compliance-documents")
  @swagger.ApiOkResponse({
    type: DriverComplianceDocumentsDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetDriverComplianceDocuments(
    @common.Body()
    body: UpdateTruckLocationDto
  ): Promise<DriverComplianceDocumentsDto[]> {
        return this.service.GetDriverComplianceDocuments(body);
      }

  @common.Get("/trucks/:id/location")
  @swagger.ApiOkResponse({
    type: TruckLocationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetTruckLocation(
    @common.Body()
    body: UpdateTruckLocationDto
  ): Promise<TruckLocationDto> {
        return this.service.GetTruckLocation(body);
      }

  @common.Patch("/trucks/:id/location")
  @swagger.ApiOkResponse({
    type: TruckLocationDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UpdateTruckLocation(
    @common.Body()
    body: UpdateTruckLocationDto
  ): Promise<TruckLocationDto> {
        return this.service.UpdateTruckLocation(body);
      }
}
