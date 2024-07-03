import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ContractManagementService } from "./contractmanagement.service";
import { GetActiveContractsDto } from "../contractManagement/GetActiveContractsDto";

@swagger.ApiTags("contractManagements")
@common.Controller("contractManagements")
export class ContractManagementController {
  constructor(protected readonly service: ContractManagementService) {}

  @common.Get("/contracts/active")
  @swagger.ApiOkResponse({
    type: GetActiveContractsDto
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GetActiveContracts(
    @common.Body()
    body: string
  ): Promise<GetActiveContractsDto[]> {
        return this.service.GetActiveContracts(body);
      }
}
