import type { MoniTooltipTrigger } from '@/components/MoniTooltip/types'
import type {
  MoniSelectListOption,
} from '@/components/common/MoniSelectList/types'

export interface MoniDropdownProps {
  trigger?: MoniTooltipTrigger
  offset?: number
  closeAfterChoose?: boolean
  menuOptions: MoniSelectListOption[]
}
