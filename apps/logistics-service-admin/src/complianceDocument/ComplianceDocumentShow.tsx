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

import { COMPLIANCEDOCUMENT_TITLE_FIELD } from "./ComplianceDocumentTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";
import { TRUCK_TITLE_FIELD } from "../truck/TruckTitle";

export const ComplianceDocumentShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="documentName" source="documentName" />
        <TextField label="documentType" source="documentType" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Truck" source="truck.id" reference="Truck">
          <TextField source={TRUCK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="validFrom" source="validFrom" />
        <TextField label="validUntil" source="validUntil" />
        <ReferenceManyField
          reference="Truck"
          target="complianceDocumentId"
          label="Trucks"
        >
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
