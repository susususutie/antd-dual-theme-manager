import updateAntd4CssVars from './updateAntd4CssVars'
import type { PrefixContextValue } from './'
import type { SeedTokenContextValue } from './se'
import type { ThemeModeContextValue } from './themeModeContext'
import { useReducer } from 'react'

type StoreState = {
  prefix: PrefixContextValue
  themeMode: ThemeModeContextValue
  seedToken: SeedTokenContextValue
}

type StoreAction =
  | { type: 'update-prefix'; payload: PrefixContextValue }
  | { type: 'update-themeMode'; payload: ThemeModeContextValue }
  | { type: 'update-seedToken'; payload: SeedTokenContextValue }

export default function createStoreReducer(isDual?: boolean) {
  return function storeReducer(state: StoreState, action: StoreAction) {
    // 1. themeMode !== 'auto'，能确定 appearance 则直接调用 updateAntd4Theme
    // 2. themeMode === 'auto'，无法立即确定 appearance，则在 ThemeAppearance 组件中调用
    switch (action.type) {
      case 'update-prefix': {
        return {
          ...state,
          prefix: { ...state.prefix, ...action.payload },
        }
      }
      case 'update-themeMode': {
        if (action.payload !== 'auto' && isDual) {
          updateAntd4CssVars(action.payload === 'dark', state.seedToken)
        }
        return { ...state, themeMode: action.payload }
      }
      case 'update-seedToken': {
        const seedToken = { ...state.seedToken, ...action.payload }
        if (state.themeMode !== 'auto' && isDual) {
          updateAntd4CssVars(state.themeMode === 'dark', seedToken)
        }
        return { ...state, seedToken }
      }
      default: {
        return state
      }
    }
  }
}

// export function useStoreReducer(initialStoreState: StoreState, isDual?: boolean) {
//   const [state, dispatch] = useReducer(createStoreReducer(isDual), initialStoreState)
//   return [state, dispatch]
// }
