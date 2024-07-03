import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TruckWhereUniqueInput } from "../truck/TruckWhereUniqueInput";
import { TruckListRelationFilter } from "../truck/TruckListRelationFilter";

export type DriverWhereInput = {
  currentLocation?: StringNullableFilter;
  id?: StringFilter;
  licenseNumber?: StringNullableFilter;
  name?: StringNullableFilter;
  truck?: TruckWhereUniqueInput;
  trucks?: TruckListRelationFilter;
};
