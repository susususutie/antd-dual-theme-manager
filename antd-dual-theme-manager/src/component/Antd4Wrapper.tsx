import React from 'react'
import ConfigProvider from 'antd4/es/config-provider'
import Antd4ThemeUpdater from './Antd4ThemeUpdater'
import { type ConfigProviderProps as ConfigProviderProps4 } from 'antd4/es/config-provider'

export type Antd4WrapperProps = {
  configProviderProps4?: ConfigProviderProps4
  children: React.ReactNode
}

export default function Antd4Wrapper(props: Antd4WrapperProps) {
  const { configProviderProps4, children } = props

  return (
    <ConfigProvider {...configProviderProps4}>
      <Antd4ThemeUpdater />
      {children}
    </ConfigProvider>
  )
}
