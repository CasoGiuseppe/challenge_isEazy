import { FieldType, InputType } from '@shared/types'; 
export interface Props {
  type?: FieldType,
  input?: InputType
}

export const FieldAllowedArray = [FieldType.INPUT, FieldType.TEXTAREA];
export const InputAllowedArray = [InputType.TEXT]