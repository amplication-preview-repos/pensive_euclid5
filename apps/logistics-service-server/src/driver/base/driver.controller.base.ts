/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DriverService } from "../driver.service";
import { DriverCreateInput } from "./DriverCreateInput";
import { Driver } from "./Driver";
import { DriverFindManyArgs } from "./DriverFindManyArgs";
import { DriverWhereUniqueInput } from "./DriverWhereUniqueInput";
import { DriverUpdateInput } from "./DriverUpdateInput";
import { TruckFindManyArgs } from "../../truck/base/TruckFindManyArgs";
import { Truck } from "../../truck/base/Truck";
import { TruckWhereUniqueInput } from "../../truck/base/TruckWhereUniqueInput";

export class DriverControllerBase {
  constructor(protected readonly service: DriverService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Driver })
  async createDriver(@common.Body() data: DriverCreateInput): Promise<Driver> {
    return await this.service.createDriver({
      data: {
        ...data,

        truck: data.truck
          ? {
              connect: data.truck,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        currentLocation: true,
        id: true,
        licenseNumber: true,
        name: true,

        truck: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Driver] })
  @ApiNestedQuery(DriverFindManyArgs)
  async drivers(@common.Req() request: Request): Promise<Driver[]> {
    const args = plainToClass(DriverFindManyArgs, request.query);
    return this.service.drivers({
      ...args,
      select: {
        createdAt: true,
        currentLocation: true,
        id: true,
        licenseNumber: true,
        name: true,

        truck: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async driver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    const result = await this.service.driver({
      where: params,
      select: {
        createdAt: true,
        currentLocation: true,
        id: true,
        licenseNumber: true,
        name: true,

        truck: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDriver(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() data: DriverUpdateInput
  ): Promise<Driver | null> {
    try {
      return await this.service.updateDriver({
        where: params,
        data: {
          ...data,

          truck: data.truck
            ? {
                connect: data.truck,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          currentLocation: true,
          id: true,
          licenseNumber: true,
          name: true,

          truck: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Driver })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDriver(
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Driver | null> {
    try {
      return await this.service.deleteDriver({
        where: params,
        select: {
          createdAt: true,
          currentLocation: true,
          id: true,
          licenseNumber: true,
          name: true,

          truck: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/trucks")
  @ApiNestedQuery(TruckFindManyArgs)
  async findTrucks(
    @common.Req() request: Request,
    @common.Param() params: DriverWhereUniqueInput
  ): Promise<Truck[]> {
    const query = plainToClass(TruckFindManyArgs, request.query);
    const results = await this.service.findTrucks(params.id, {
      ...query,
      select: {
        complianceDocument: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        driver: {
          select: {
            id: true,
          },
        },

        id: true,
        registrationNumber: true,
        truckNumber: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/trucks")
  async connectTrucks(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: TruckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trucks: {
        connect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/trucks")
  async updateTrucks(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: TruckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trucks: {
        set: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/trucks")
  async disconnectTrucks(
    @common.Param() params: DriverWhereUniqueInput,
    @common.Body() body: TruckWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      trucks: {
        disconnect: body,
      },
    };
    await this.service.updateDriver({
      where: params,
      data,
      select: { id: true },
    });
  }
}
