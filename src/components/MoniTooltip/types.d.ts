import type { UseFloatingOptions } from '@floating-ui/vue'

export type MoniTooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export type MoniTooltipTrigger = 'click' | 'hover'

export interface MoniTooltipProps {
  placement?: MoniTooltipPlacement
  trigger?: MoniTooltipTrigger
  manual?: boolean
  offset?: number,
  keepInDisplay?: boolean
  openDelay?: number
  closeDelay?: number
  popperOptions?: Omit<UseFloatingOptions, 'placement' | 'middleware' | 'whileElementsMounted'>
}

export interface MoniTooltipInstance {
  open: () => void
  close: () => void
}
