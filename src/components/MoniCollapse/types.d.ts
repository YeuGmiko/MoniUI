import type { Ref } from "vue"


export interface MoniCollapseProps {
  accordion?: boolean
}
export interface MoniCollapseEmits {
  (e: 'change', values: NameType[]): void
}

export type NameType = string | number
export interface MoniCollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}

export interface CollapseContext {
  activeNames: Ref<NameType[]>
  handleItemClick: (item: NameType) => void
}
