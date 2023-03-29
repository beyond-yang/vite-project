export interface menuItem {
  icon: string,
  name: string,
  index: string | number,
  children: menuItem[]
}

export interface dataProps {
  name?: string,
  icon?: string,
  index?: string,
  children?: string
}