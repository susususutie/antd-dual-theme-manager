import { createGlobalStyle, createStyles, css } from 'antd-style'

/**
 * 1. 静态样式。避免样式硬编码，应该动态使用token中的样式变量，特别是颜色，尺寸等明显特征
 */
export const useStaticStyles = createStyles({
  container: {
    padding: 24,
    background: 'lightslategrey',
  },
  header: css`
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    color: white;
  `,
  text: {
    color: 'lightblue',
  },
})

/**
 * 2. 动态样式，消费token；也可传入参数 props 根据参数动态设置样式
 */
export const useStyles = createStyles((utils, props) => {
  const { token, css } = utils // appearance, isDarkMode, prefixCls, iconPrefixCls 等
  const { border } = props

  const commonCard = css`
    border-radius: ${token.borderRadiusLG}px;
    padding: ${token.paddingLG}px;
  `

  // 支持对象和模版字符串两种写法
  return {
    container: {
      backgroundColor: token.colorBgLayout,
      padding: token.paddingMD,
      border: border ? `1px solid ${token.colorBorder}` : 'none',
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

/**
 * 3. 全局样式
 */
export const Global = createGlobalStyle({
  '*': {
    boxSizing: 'border-box',
  },
  body: {
    margin: 0,
    padding: 0,
  },
})

export default useStyles
