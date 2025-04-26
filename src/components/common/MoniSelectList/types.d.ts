import type { VNode } from 'vue'
import type { MoniDropdownOptionKey } from '@/components/MoniDropdown/types'

export type MoniSelectListOptionLabel = string | VNode
export type MoniSelectListOptionKey = string | number

export interface MoniSelectListOption {
  label?: MoniSelectListOptionLabel
  key?: MoniSelectListOptionKey
  disabled?: boolean
}

export interface MoniSelectListProps {
  options: MoniSelectListOption[]
}

export interface MoniSelectListInstance {
  current: MoniSelectListOptionKey
  select(key: MoniDropdownOptionKey): boolean
}
