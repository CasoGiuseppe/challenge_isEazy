import { ButtonType, Sizes } from '@shared/types/definitions';

export enum ButtonVariants {
  DEFAULT = 'default',
  CIRCLE = 'circle',
  EMPTY = 'empty',
}
export interface Props {
  id?: String,
  type?: ButtonType,
  disabled: boolean,
  variant: ButtonVariants,
  size?: Sizes
}