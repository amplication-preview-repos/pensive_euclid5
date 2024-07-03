import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { ComplianceDocumentTitle } from "../complianceDocument/ComplianceDocumentTitle";
import { ContractTitle } from "../contract/ContractTitle";
import { DriverTitle } from "../driver/DriverTitle";

export const TruckEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="complianceDocument.id"
          reference="ComplianceDocument"
          label="ComplianceDocument"
        >
          <SelectInput optionText={ComplianceDocumentTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="complianceDocuments"
          reference="ComplianceDocument"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ComplianceDocumentTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="contracts"
          reference="Contract"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ContractTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="driver.id" reference="Driver" label="Driver">
          <SelectInput optionText={DriverTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="drivers"
          reference="Driver"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DriverTitle} />
        </ReferenceArrayInput>
        <TextInput label="registrationNumber" source="registrationNumber" />
        <TextInput label="truckNumber" source="truckNumber" />
      </SimpleForm>
    </Edit>
  );
};
