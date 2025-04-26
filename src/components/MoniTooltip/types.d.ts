import type { UseFloatingOptions } from '@floating-ui/vue'

export type MoniToolTipSide = 'top' | 'bottom' | 'left' | 'right'
export type MoniToolAlignment = 'start' | 'end'
export type MoniToolAlignedPlacement = `${MoniToolTipSide}-${MoniToolAlignment}`

export type MoniTooltipPlacement = MoniToolTipSide | MoniToolAlignedPlacement
export type MoniTooltipTrigger = 'click' | 'hover'

export interface MoniTooltipProps {
  placement?: MoniTooltipPlacement
  trigger?: MoniTooltipTrigger
  arrow?: boolean
  arrowWidth?: number
  manual?: boolean
  offset?: number,
  keepInDisplay?: boolean
  openDelay?: number
  closeDelay?: number
  paddingX?: number
  paddingY?: number
  popperOptions?: Omit<UseFloatingOptions, 'placement' | 'middleware' | 'whileElementsMounted'>
}

export interface MoniTooltipInstance {
  open: () => void
  close: () => void
}
