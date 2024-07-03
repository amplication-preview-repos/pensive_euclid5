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

export const ComplianceDocumentList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ComplianceDocuments"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
