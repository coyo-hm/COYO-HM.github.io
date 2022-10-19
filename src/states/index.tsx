import { IMenuList } from 'components/Common/Sidebar'
import { atom } from 'recoil'

export const menuListState = atom<IMenuList | null>({
  key: 'menuListState',
  default: {},
})
