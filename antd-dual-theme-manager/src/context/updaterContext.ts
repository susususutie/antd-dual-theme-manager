import { createContext } from 'react'
import type { ThemeModeContextValue } from './themeModeContext'
import type { PrefixContextValue } from './prefixContext'
import type { SeedTokenContextValue } from './seedTokenContext'

export type UpdaterContextValue = {
  updateThemeMode: (themeMode: ThemeModeContextValue) => void
  updateSeedToken: (seedToken: Partial<SeedTokenContextValue>) => void
  updatePrefix: (prefix: PrefixContextValue) => void
}

export const UpdaterContext = createContext<UpdaterContextValue>({
  updateThemeMode: () => void 0,
  updateSeedToken: () => void 0,
  updatePrefix: () => void 0,
})

export const UpdaterProvider = UpdaterContext.Provider
