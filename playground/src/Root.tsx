import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { App } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import zhCN4 from 'antd4/es/locale/zh_CN'
import 'dayjs/locale/zh-cn' // for date-picker i18n
import { ThemeManager } from 'antd-dual-theme-manager'
import Playground from './Playground'
import moment from 'moment'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import 'moment/dist/locale/zh-cn' // 不能使用 ’moment/locale/zh-cn‘
moment.locale('zh-cn')

export default function Root() {
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
        borderRadius: 8,
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
