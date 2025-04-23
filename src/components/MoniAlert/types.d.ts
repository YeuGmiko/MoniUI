export type MoniAlertType = 'success' | 'warning' | 'error' | 'info'
export type MoniAlertEffect = 'light' | 'dark'
export interface MoniAlertProps {
  title?: string
  description?: string
  type?: MoniAlertType
  closable?: boolean
  showIcon?: boolean
  effect?: MoniAlertEffect
}

export interface MoniAlertExpose {
  close: () => void
}
