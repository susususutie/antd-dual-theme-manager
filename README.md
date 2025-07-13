# Antd Dual Theme Manager

一个用于统一管理 antd@4 与 antd@5 主题风格的方案。

## 安装

```bash
pnpm add ntd-dual-theme-manager
```

## 使用

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeManager } from 'antd-dual-theme-manager'
import { StyleProvider, legacyLogicalPropertiesTransformer } from '@ant-design/cssinjs'
import { App } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import zhCN4 from 'antd4/es/locale/zh_CN'
import 'dayjs/locale/zh-cn' // for antd@5 date-picker i18n
import { ThemeManager } from 'lib/index'
import Playground from './Playground'
import moment from 'moment'
import 'moment/dist/locale/zh-cn' // for antd@4
moment.locale('zh-cn')

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
)
```

## 更改主题

```tsx
import { UpdaterContext } from 'lib/index'

export default function App() {
  const themeUpdater = useContext(UpdaterContext)

  return (
    <div>
      <button onClick={() => themeUpdater.updateThemeMode('dark')}>暗色模式</button>
      <button onClick={() => themeUpdater.updatePrefix({ prefixCls: 'custom' })}>更改class前缀</button>
      <button onClick={() => themeUpdater.updateSeedToken({ colorPrimary: '#409EFF' })}>更改主题色</button>
    </div>
  )
}
```

## 使用 antd-style 编写样式，以使用主题变量

在大屏业务组件中，可以通过 `ResponsiveScale` 的 `context` 获取必要尺寸参数和尺寸计算方法。

```ts
// styles.ts
import { createGlobalStyle, createStyles, css } from 'antd-style'

export const useStyles = createStyles(utils => {
  const { token, css } = utils // cx, appearance, isDarkMode, prefixCls, iconPrefixCls 等

  const commonCard = css`
    border-radius: ${token.borderRadiusLG}px;
    padding: ${token.paddingLG}px;
  `

  // 支持对象和模版字符串两种写法
  return {
    container: {
      backgroundColor: token.colorBgLayout,
      padding: token.paddingMD,
      border: `1px solid ${token.colorBorder}`,
    },

    baseCard: commonCard,

    primaryCard: css`
      background: ${token.colorPrimary};
      color: ${token.colorTextLightSolid};
    `,

    defaultCard: css`
      ${commonCard};
      background: ${token.colorBgContainer};
      color: ${token.colorText};
    `,
  }
})
```

```tsx
// CustomCard.tsx
import { useStyles } from './styles'

const CustomCard: React.FC = () => {
  const { styles } = useStyles()

  return (
    <div className={styles.container}>
      <Space direction='vertical' style={{ width: '100%' }} size={16}>
        <div className={styles.defaultCard}>普通卡片</div>
        <div className={cx(styles.baseCard, styles.primaryCard)}>主要卡片</div>
      </Space>
    </div>
  )
}
```
