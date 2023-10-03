import { ButtonType, ButtonVariants } from '@shared/types/definitions';

export interface Props {
  id?: String,
  type?: ButtonType,
  disabled: boolean,
  variant: ButtonVariants
}