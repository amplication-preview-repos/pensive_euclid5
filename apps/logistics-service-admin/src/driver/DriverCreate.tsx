import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TruckTitle } from "../truck/TruckTitle";

export const DriverCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="currentLocation" source="currentLocation" />
        <TextInput label="licenseNumber" source="licenseNumber" />
        <TextInput label="name" source="name" />
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
      </SimpleForm>
    </Create>
  );
};
