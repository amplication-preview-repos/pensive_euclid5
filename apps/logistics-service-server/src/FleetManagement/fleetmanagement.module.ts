import { Module } from "@nestjs/common";
import { FleetManagementService } from "./fleetmanagement.service";
import { FleetManagementController } from "./fleetmanagement.controller";
import { FleetManagementResolver } from "./fleetmanagement.resolver";

@Module({
  controllers: [FleetManagementController],
  providers: [FleetManagementService, FleetManagementResolver],
  exports: [FleetManagementService],
})
export class FleetManagementModule {}
