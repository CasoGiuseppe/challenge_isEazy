import { Roles, Sizes } from '@shared/types/definitions';

export enum ButtonVariants {
  DEFAULT = 'default',
  CIRCLE = 'circle',
  EMPTY = 'empty',
}
export interface Props {
  id?: String,
  role?: Roles,
  disabled: boolean,
  variant: ButtonVariants,
  size?: Sizes,
  label?: String,
}