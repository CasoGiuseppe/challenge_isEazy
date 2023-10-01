import { FieldType, InputType } from '@shared/types'; 
export interface Props {
  id?: String,
  type?: FieldType,
  input?: InputType,
  required?: Boolean,
  modelValue: String
}

export const FieldAllowedArray = [FieldType.INPUT, FieldType.TEXTAREA];
export const InputAllowedArray = [InputType.TEXT]