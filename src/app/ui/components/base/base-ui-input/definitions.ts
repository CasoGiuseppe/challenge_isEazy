import { Fields, Types } from '@shared/types/definitions';
export interface Props {
  id?: String;
  type?: Fields;
  input?: Types;
  required?: Boolean;
  modelValue: String;
  placeholder: String;
  disabled: Boolean;
}
