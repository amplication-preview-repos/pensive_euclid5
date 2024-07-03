import * as graphql from "@nestjs/graphql";
import { GetActiveContractsDto } from "../contractManagement/GetActiveContractsDto";
import { ContractManagementService } from "./contractmanagement.service";

export class ContractManagementResolver {
  constructor(protected readonly service: ContractManagementService) {}

  @graphql.Query(() => [GetActiveContractsDto])
  async GetActiveContracts(
    @graphql.Args()
    args: string
  ): Promise<GetActiveContractsDto[]> {
    return this.service.GetActiveContracts(args);
  }
}
