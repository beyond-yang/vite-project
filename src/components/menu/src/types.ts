export interface menuItem {
  icon: string,
  name: string,
  index: string | number,
  children: menuItem[]
}