import { FieldType, InputType } from '@shared/types/definitions'; 
export interface Props {
  id?: String,
  type?: FieldType,
  input?: InputType,
  required?: Boolean,
  modelValue: String,
  placeholder: String,
}