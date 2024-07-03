import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { TRUCK_TITLE_FIELD } from "./TruckTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { SUPPLIER_TITLE_FIELD } from "../supplier/SupplierTitle";
import { COMPLIANCEDOCUMENT_TITLE_FIELD } from "../complianceDocument/ComplianceDocumentTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const TruckShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="ComplianceDocument"
          source="compliancedocument.id"
          reference="ComplianceDocument"
        >
          <TextField source={COMPLIANCEDOCUMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="registrationNumber" source="registrationNumber" />
        <TextField label="truckNumber" source="truckNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="ComplianceDocument"
          target="truckId"
          label="ComplianceDocuments"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Contract"
          target="truckId"
          label="Contracts"
        >
          <Datagrid rowClick="show">
            <TextField label="contractNumber" source="contractNumber" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="endDate" source="endDate" />
            <TextField label="ID" source="id" />
            <TextField label="startDate" source="startDate" />
            <TextField label="status" source="status" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Truck" source="truck.id" reference="Truck">
              <TextField source={TRUCK_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Driver" target="truckId" label="Drivers">
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
