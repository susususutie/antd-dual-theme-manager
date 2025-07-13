import { createContext } from 'react'

export type PrefixContextValue = {
  prefixCls?: string
  iconPrefixCls?: string
}

export const initialPrefixValue: PrefixContextValue = {
  prefixCls: 'ant5',
  iconPrefixCls: 'ant5icon',
}

export const PrefixContext = createContext<PrefixContextValue>(initialPrefixValue)

export const PrefixProvider = PrefixContext.Provider
