import { FieldType, InputType } from '@shared/types/definitions'; 
export interface Props {
  id?: String,
  type?: FieldType,
  input?: InputType,
  required?: Boolean,
  modelValue: String,
  placeholder: String,
}

export const FieldAllowedArray = [FieldType.INPUT, FieldType.TEXTAREA];
export const InputAllowedArray = [InputType.TEXT]