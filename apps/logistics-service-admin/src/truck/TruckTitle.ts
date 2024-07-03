import { Truck as TTruck } from "../api/truck/Truck";

export const TRUCK_TITLE_FIELD = "registrationNumber";

export const TruckTitle = (record: TTruck): string => {
  return record.registrationNumber?.toString() || String(record.id);
};
