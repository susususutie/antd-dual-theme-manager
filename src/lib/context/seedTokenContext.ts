import type { AliasToken } from 'antd/es/theme/internal'
import { createContext } from 'react'
// import antdSeedToken from 'antd/es/theme/themes/seed'

export type SeedTokenContextValue = Partial<
  Pick<AliasToken, 'colorPrimary' | 'colorInfo' | 'colorSuccess' | 'colorWarning' | 'colorError' | 'borderRadius'>
>
export const initialSeedTokenValue: SeedTokenContextValue = {
  colorPrimary: '#1677ff',
  colorInfo: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  borderRadius: 6,
}

export const SeedTokenContext = createContext<SeedTokenContextValue>(initialSeedTokenValue)

export const SeedTokenProvider = SeedTokenContext.Provider
