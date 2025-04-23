import type { Ref } from 'vue'

export type ButtonType = 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
export type ButtonSize = 'small' | 'default' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export interface ButtonProps {
  type?: ButtonType
  size?: ButtonSize
  nativeType?: NativeType
  plain?: boolean
  rounded?: boolean
  circle?: boolean
  disabled?: boolean
  autofocus?: boolean
  icon?: string
  isLoading?: boolean
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | undefined>
}
