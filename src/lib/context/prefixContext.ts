import { createContext } from 'react'

export const initialPrefixValue = {
  prefixCls: 'ant5',
  iconPrefixCls: 'ant5icon',
}

export const PrefixContext = createContext(initialPrefixValue)

export const PrefixProvider = PrefixContext.Provider
