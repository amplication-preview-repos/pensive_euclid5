import { Module } from "@nestjs/common";
import { ContractManagementService } from "./contractmanagement.service";
import { ContractManagementController } from "./contractmanagement.controller";
import { ContractManagementResolver } from "./contractmanagement.resolver";

@Module({
  controllers: [ContractManagementController],
  providers: [ContractManagementService, ContractManagementResolver],
  exports: [ContractManagementService],
})
export class ContractManagementModule {}
