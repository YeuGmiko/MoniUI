import type { MoniAlertEffect, MoniAlertType } from '@/components/MoniAlert/types'

export const IconRecord: Record<MoniAlertType, Record<MoniAlertEffect, string>> = {
  success: {
    light: 'ion:checkmark-circle-outline',
    dark: 'ion:checkmark-circle'
  },
  warning: {
    light: 'ion:alert-circle-outline',
    dark: 'ion:alert-circle'
  },
  error: {
    light: 'ion:close-circle-outline',
    dark: 'ion:close-circle'
  },
  info: {
    light: 'ion:information-circle-outline',
    dark: 'ion:information-circle'
  }
}

export const ThemeColor: Record<MoniAlertType, string> = {
  success: 'success',
  warning: 'warning',
  error: 'danger',
  info: 'info'
}
