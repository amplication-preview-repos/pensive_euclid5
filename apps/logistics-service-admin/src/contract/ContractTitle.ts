import { Contract as TContract } from "../api/contract/Contract";

export const CONTRACT_TITLE_FIELD = "contractNumber";

export const ContractTitle = (record: TContract): string => {
  return record.contractNumber?.toString() || String(record.id);
};
