import { Injectable } from "@nestjs/common";
import { GetActiveContractsDto } from "../contractManagement/GetActiveContractsDto";

@Injectable()
export class ContractManagementService {
  constructor() {}
  async GetActiveContracts(args: string): Promise<GetActiveContractsDto[]> {
    throw new Error("Not implemented");
  }
}
