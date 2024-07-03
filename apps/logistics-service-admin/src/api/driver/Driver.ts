import { Truck } from "../truck/Truck";

export type Driver = {
  createdAt: Date;
  currentLocation: string | null;
  id: string;
  licenseNumber: string | null;
  name: string | null;
  truck?: Truck | null;
  trucks?: Array<Truck>;
  updatedAt: Date;
};
