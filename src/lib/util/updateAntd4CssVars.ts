import { updateCSS } from 'rc-util/lib/Dom/dynamicCSS'
import { generate } from '@ant-design/colors'
import { TinyColor } from '@ctrl/tinycolor'
import { theme } from 'antd'

function getStyle(prefixCls, isDarkMode, seedToken) {
  const token = theme.getDesignToken(
    isDarkMode ? { algorithm: theme.darkAlgorithm, token: seedToken } : { token: seedToken }
  )
  console.log(`colorPrimary:${token.colorPrimary}, borderRadius:${token.borderRadius};`)
  const variables = {}

  const formatColor = (color, updater) => {
    let clone = color.clone()
    clone = updater?.(clone) || clone
    return clone.toRgbString()
  }

  const fillColor = type => {
    const upperType = type.charAt(0).toUpperCase() + type.slice(1)
    const baseColor = new TinyColor(token[`color${upperType}`])

    variables[`${type}-color`] = token[`color${upperType}`]
    variables[`${type}-color-disabled`] = token[`color${upperType}BgHover`]
    variables[`${type}-color-hover`] = token[`color${upperType}TextHover`]
    variables[`${type}-color-active`] = token[`color${upperType}Active`]
    variables[`${type}-color-outline`] = baseColor.clone().setAlpha(0.2).toRgbString() // 用在 box-shadow 中
    variables[`${type}-color-deprecated-bg`] = token[`color${upperType}Bg`]
    variables[`${type}-color-deprecated-border`] = token[`color${upperType}Border`]
  }

  // ================ Primary Color ================
  if (seedToken.colorPrimary) {
    fillColor('primary')

    const colorPrimary = new TinyColor(seedToken.colorPrimary)
    const colorPrimaryList = generate(colorPrimary.toRgbString())

    // Legacy - We should use semantic naming standard
    colorPrimaryList.forEach((color, index) => {
      variables[`primary-${index + 1}`] = color
    })
    // Deprecated
    variables['primary-color-deprecated-l-35'] = formatColor(colorPrimary, c => c.lighten(35))
    variables['primary-color-deprecated-l-20'] = formatColor(colorPrimary, c => c.lighten(20))
    variables['primary-color-deprecated-t-20'] = formatColor(colorPrimary, c => c.tint(20))
    variables['primary-color-deprecated-t-50'] = formatColor(colorPrimary, c => c.tint(50))
    variables['primary-color-deprecated-f-12'] = formatColor(colorPrimary, c => c.setAlpha(c.getAlpha() * 0.12))

    const primaryActiveColor = new TinyColor(colorPrimaryList[0])
    variables['primary-color-active-deprecated-f-30'] = formatColor(primaryActiveColor, c =>
      c.setAlpha(c.getAlpha() * 0.3)
    )
    variables['primary-color-active-deprecated-d-02'] = formatColor(primaryActiveColor, c => c.darken(2))
  }

  // ================ Success Color ================
  if (seedToken.colorSuccess) {
    fillColor('success')
  }

  // ================ Warning Color ================
  if (seedToken.colorWarning) {
    fillColor('warning')
  }

  // ================= Error Color =================
  if (seedToken.colorError) {
    fillColor('error')
  }

  // ================= Info Color ==================
  if (seedToken.colorInfo) {
    fillColor('info')
  }

  // ================= Info Color ==================
  if (seedToken.borderRadius) {
    variables['border-radius'] = `${token.borderRadius}px`
    variables['border-radius-xs'] = `${token.borderRadiusXS}px`
    variables['border-radius-sm'] = `${token.borderRadiusSM}px`
    variables['border-radius-lg'] = `${token.borderRadiusLG}px`
    variables['border-radius-outer'] = `${token.borderRadiusOuter}px`
  }

  // Convert to css variables
  const cssList = Object.keys(variables).map(key => `--${prefixCls}-${key}: ${variables[key]};`)

  return `
  :root {
    ${cssList.join('\n')}
  }
  `.trim()
}

const _result = `:root {
    --ant-primary-color: #3f51b5;
--ant-primary-color-disabled: #dadee8;
--ant-primary-color-hover: #6374c2;
--ant-primary-color-active: #2b378f;
--ant-primary-color-outline: rgba(63, 81, 181, 0.2);
--ant-primary-color-deprecated-bg: #e6ebf5;
--ant-primary-color-deprecated-border: #b6bfdb;
--ant-primary-1: #e6ebf5;
--ant-primary-2: #dadee8;
--ant-primary-3: #b6bfdb;
--ant-primary-4: #8a99cf;
--ant-primary-5: #6374c2;
--ant-primary-6: #3f51b5;
--ant-primary-7: #2b378f;
--ant-primary-8: #1a2169;
--ant-primary-9: #0d1042;
--ant-primary-10: #05061c;
--ant-primary-color-deprecated-l-35: rgb(190, 197, 232);
--ant-primary-color-deprecated-l-20: rgb(133, 145, 213);
--ant-primary-color-deprecated-t-20: rgb(101, 116, 196);
--ant-primary-color-deprecated-t-50: rgb(159, 168, 218);
--ant-primary-color-deprecated-f-12: rgba(63, 81, 181, 0.12);
--ant-primary-color-active-deprecated-f-30: rgba(230, 235, 245, 0.3);
--ant-primary-color-active-deprecated-d-02: rgb(223, 229, 242);
--ant-success-color: #2fad35;
--ant-success-color-disabled: #cee0cc;
--ant-success-color-hover: #50ba52;
--ant-success-color-active: #1e8727;
--ant-success-color-outline: rgba(47, 173, 53, 0.2);
--ant-success-color-deprecated-bg: #e1eddf;
--ant-success-color-deprecated-border: #a1d49f;
--ant-warning-color: #ed6c02;
--ant-warning-color-disabled: #ffdaa6;
--ant-warning-color-hover: #fa8f2a;
--ant-warning-color-active: #c75300;
--ant-warning-color-outline: rgba(237, 108, 2, 0.2);
--ant-warning-color-deprecated-bg: #fff5e6;
--ant-warning-color-deprecated-border: #ffc47d;
--ant-error-color: #d32f2f;
--ant-error-color-disabled: #ffe0db;
--ant-error-color-hover: #e05a55;
--ant-error-color-active: #ad1d22;
--ant-error-color-outline: rgba(211, 47, 47, 0.2);
--ant-error-color-deprecated-bg: #fff2f0;
--ant-error-color-deprecated-border: #fab6af;
--ant-info-color: #0288d1;
--ant-info-color-disabled: #a6ecff;
--ant-info-color-hover: #26a4de;
--ant-info-color-active: #0069ab;
--ant-info-color-outline: rgba(2, 136, 209, 0.2);
--ant-info-color-deprecated-bg: #e6faff;
--ant-info-color-deprecated-border: #79d8f7;
  }`

function genUpdateFun() {
  const dynamicStyleMark = `-ant-${Date.now()}-${Math.random()}`
  let latestArgsKey = ''

  return (isDarkMode, seedToken) => {
    // console.log('updateAntd4CssVars 检查是否需要更新样式文件')

    if (latestArgsKey) {
      if (latestArgsKey === JSON.stringify([isDarkMode, seedToken])) {
        return
      }
    }
    latestArgsKey = JSON.stringify([isDarkMode, seedToken])
    console.log('更新样式文件')
    const style = getStyle('ant', isDarkMode, seedToken)
    updateCSS(style, `${dynamicStyleMark}-dynamic-theme`)
  }
}

/**
 * 替换官方的 ConfigProvider4.config 方法
 * ConfigProvider4.config 的本质是根据传入主题生成一系列 CSS 变量，然后将 CSS 变量写入到 DOM 中
 * 但官方方法支持的变量较少，自定义方法中扩充了部分 antd5 的变量
 */
const updateAntd4CssVars = genUpdateFun()

export default updateAntd4CssVars
