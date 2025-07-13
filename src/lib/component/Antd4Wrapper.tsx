import { ConfigProvider } from 'antd4'
import Antd4ThemeUpdater from './Antd4ThemeUpdater'

export default function Antd4Wrapper({ configProviderProps4, children }) {
  return (
    <ConfigProvider {...configProviderProps4}>
      <Antd4ThemeUpdater />
      {children}
    </ConfigProvider>
  )
}
