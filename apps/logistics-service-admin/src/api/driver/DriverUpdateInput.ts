import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { TruckUpdateManyWithoutDriversInput } from "./TruckUpdateManyWithoutDriversInput";

export type DriverUpdateInput = {
  currentLocation?: string | null;
  licenseNumber?: string | null;
  name?: string | null;
  truck?: TruckWhereUniqueInput | null;
  trucks?: TruckUpdateManyWithoutDriversInput;
};
