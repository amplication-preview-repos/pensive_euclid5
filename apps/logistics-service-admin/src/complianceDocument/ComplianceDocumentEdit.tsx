import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  DateTimeInput,
} from "react-admin";

import { TruckTitle } from "../truck/TruckTitle";

export const ComplianceDocumentEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="documentName" source="documentName" />
        <TextInput label="documentType" source="documentType" />
        <ReferenceInput source="truck.id" reference="Truck" label="Truck">
          <SelectInput optionText={TruckTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="trucks"
          reference="Truck"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TruckTitle} />
        </ReferenceArrayInput>
        <DateTimeInput label="validFrom" source="validFrom" />
        <DateTimeInput label="validUntil" source="validUntil" />
      </SimpleForm>
    </Edit>
  );
};
