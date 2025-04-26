import type { IconProps as IconifyProps } from '@iconify/vue'

export interface IconProps extends IconifyProps {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  color?: string
}
