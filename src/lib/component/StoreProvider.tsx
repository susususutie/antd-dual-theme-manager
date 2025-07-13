import { ConfigProvider, type ConfigProviderProps } from 'antd'
import { ThemeProvider } from 'antd-style'
import { type ConfigProviderProps as ConfigProviderProps4 } from 'antd4/es/config-provider'
import { useEffect, useMemo, useReducer, useRef } from 'react'
import { initialPrefixValue, PrefixProvider, type PrefixContextValue } from '../context/prefixContext'
import { initialSeedTokenValue, SeedTokenProvider, type SeedTokenContextValue } from '../context/seedTokenContext'
import { initialThemeModeValue, ThemeModeProvider, type ThemeModeContextValue } from '../context/themeModeContext'
import createStoreReducer from '../util/storeReducer'
import Antd4Wrapper from './Antd4Wrapper'
import { UpdaterProvider, type UpdaterContextValue } from '../context/updaterContext'

type StoreProviderProps = {
  children: React.ReactNode
  locale: ConfigProviderProps['locale']
  themeMode?: ThemeModeContextValue
  seedToken?: SeedTokenContextValue
  configProviderProps4?: ConfigProviderProps4
} & PrefixContextValue
// & Omit<ConfigProviderProps, 'prefixCls' | 'iconPrefixCls'>

export default function StoreProvider(props: StoreProviderProps) {
  const {
    children,
    themeMode = initialThemeModeValue,
    seedToken = initialSeedTokenValue,
    configProviderProps4,
    prefixCls = initialPrefixValue.prefixCls,
    iconPrefixCls = initialPrefixValue.iconPrefixCls,
    ...configProviderProps
  } = props

  const isDual = useRef(!!configProviderProps4)

  const isInitialMount = useRef(true)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
      dispatch({ type: 'update-themeMode', payload: themeMode })
      dispatch({ type: 'update-seedToken', payload: seedToken })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [storeState, dispatch] = useReducer(createStoreReducer(isDual.current), {
    prefix: { prefixCls, iconPrefixCls },
    themeMode,
    seedToken: { ...initialSeedTokenValue, ...seedToken },
  })
  const themeUpdater = useMemo<UpdaterContextValue>(
    () => ({
      updateThemeMode: payload => dispatch({ type: 'update-themeMode', payload }),
      updateSeedToken: payload => dispatch({ type: 'update-seedToken', payload }),
      updatePrefix: payload => dispatch({ type: 'update-prefix', payload }),
    }),
    []
  )

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).dispatch = dispatch
    // dispatch({ type: 'update-themeMode', payload: 'auto' })
  }, [])

  return (
    <UpdaterProvider value={themeUpdater}>
      <PrefixProvider value={storeState.prefix}>
        <SeedTokenProvider value={storeState.seedToken}>
          <ThemeModeProvider value={storeState.themeMode}>
            <ConfigProvider
              {...configProviderProps}
              prefixCls={storeState.prefix.prefixCls}
              iconPrefixCls={storeState.prefix.iconPrefixCls}
              theme={{
                // ...configProviderProps?.token,
                token: storeState.seedToken,
              }}
            >
              <ThemeProvider themeMode={storeState.themeMode}>
                {isDual.current ? (
                  <Antd4Wrapper configProviderProps4={configProviderProps4}>{children}</Antd4Wrapper>
                ) : (
                  children
                )}
              </ThemeProvider>
            </ConfigProvider>
          </ThemeModeProvider>
        </SeedTokenProvider>
      </PrefixProvider>
    </UpdaterProvider>
  )
}
