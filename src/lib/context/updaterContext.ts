import { createContext } from 'react'

export const UpdaterContext = createContext({
  updateThemeMode: () => void 0,
  updateSeedToken: () => void 0,
  updatePrefix: () => void 0,
})

export const UpdaterProvider = UpdaterContext.Provider
