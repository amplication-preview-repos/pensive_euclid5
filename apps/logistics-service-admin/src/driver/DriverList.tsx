import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { TRUCK_TITLE_FIELD } from "../truck/TruckTitle";

export const DriverList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Drivers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentLocation" source="currentLocation" />
        <TextField label="ID" source="id" />
        <TextField label="licenseNumber" source="licenseNumber" />
        <TextField label="name" source="name" />
        <ReferenceField label="Truck" source="truck.id" reference="Truck">
          <TextField source={TRUCK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
