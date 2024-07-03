import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { COMPLIANCEDOCUMENT_TITLE_FIELD } from "../complianceDocument/ComplianceDocumentTitle";
import { DRIVER_TITLE_FIELD } from "./DriverTitle";
import { TRUCK_TITLE_FIELD } from "../truck/TruckTitle";

export const DriverShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="currentLocation" source="currentLocation" />
        <TextField label="ID" source="id" />
        <TextField label="licenseNumber" source="licenseNumber" />
        <TextField label="name" source="name" />
        <ReferenceField label="Truck" source="truck.id" reference="Truck">
          <TextField source={TRUCK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Truck" target="driverId" label="Trucks">
          <Datagrid rowClick="show">
            <ReferenceField
              label="ComplianceDocument"
              source="compliancedocument.id"
              reference="ComplianceDocument"
            >
              <TextField source={COMPLIANCEDOCUMENT_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Driver"
              source="driver.id"
              reference="Driver"
            >
              <TextField source={DRIVER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="registrationNumber" source="registrationNumber" />
            <TextField label="truckNumber" source="truckNumber" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
