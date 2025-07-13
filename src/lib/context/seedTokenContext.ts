import { createContext } from 'react'
// import antdSeedToken from 'antd/es/theme/themes/seed'

export const initialSeedTokenValue = {
  colorPrimary: '#1677ff',
  colorInfo: '#1677ff',
  colorSuccess: '#52c41a',
  colorWarning: '#faad14',
  colorError: '#ff4d4f',
  borderRadius: 6,
}

export const SeedTokenContext = createContext(initialSeedTokenValue)

export const SeedTokenProvider = SeedTokenContext.Provider
