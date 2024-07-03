import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { COMPLIANCEDOCUMENT_TITLE_FIELD } from "../complianceDocument/ComplianceDocumentTitle";
import { DRIVER_TITLE_FIELD } from "../driver/DriverTitle";

export const TruckList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Trucks"}
      perPage={50}
      pagination={<Pagination />}
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
        <ReferenceField label="Driver" source="driver.id" reference="Driver">
          <TextField source={DRIVER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="registrationNumber" source="registrationNumber" />
        <TextField label="truckNumber" source="truckNumber" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
