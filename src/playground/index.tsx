import ThemeManager from 'lib/index'
import { useState, type CSSProperties } from 'react'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { App } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import zhCN4 from 'antd4/es/locale/zh_CN'
import 'dayjs/locale/zh-cn' // for date-picker i18n
import Playground from './Playground'

export default function Root() {
  const [backgroundColor, setBackgroundColor] = useState<CSSProperties['backgroundColor']>()

  return (
    <ThemeManager
      locale={zhCN}
      prefixCls='asd'
      iconPrefixCls='zxc'
      seedToken={{
        colorPrimary: '#3f51b5',
        colorInfo: '#0288d1',
        colorSuccess: '#2fad35',
        colorWarning: '#ed6c02',
        colorError: '#d32f2f',
        borderRadius: 2,
      }}
      configProviderProps4={{ locale: zhCN4 }}
    >
      <StyleProvider hashPriority='high' transformers={[legacyLogicalPropertiesTransformer]}>
        <App component={false}>
          <Playground />
          <div id='portal-root'></div>
        </App>
      </StyleProvider>
    </ThemeManager>
  )
}
