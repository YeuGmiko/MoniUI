import type { InjectionKey } from 'vue'
import type { CollapseContext } from '@/components/MoniCollapse/types'

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapse-context')
