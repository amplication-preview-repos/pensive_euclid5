import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { TruckCreateNestedManyWithoutDriversInput } from "./TruckCreateNestedManyWithoutDriversInput";

export type DriverCreateInput = {
  currentLocation?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  truck?: TruckWhereUniqueInput | null;
  trucks?: TruckCreateNestedManyWithoutDriversInput;
};
