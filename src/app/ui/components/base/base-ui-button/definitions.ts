import { ButtonType } from '@shared/types/definitions';

export interface Props {
  id?: String,
  type?: ButtonType
}

export const ButtonAllowedArray = [ButtonType.BUTTON, ButtonType.FILE, ButtonType.SUBMIT];