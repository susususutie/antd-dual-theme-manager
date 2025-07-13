import { createContext } from 'react'

/**
 * 主题模式有三种，最终显示的主题效果(appearance)只有两种，dark和light
 * 注意：在 auto 模式下，因为初始 appearance 为 light，页面会先显示 light 再切换至 dark。这个切换的过程暂时无法消除，antd-style 官网也有这个问题
 * dark | light | auto
 */
export const initialThemeModeValue = 'light'

export const ThemeModeContext = createContext(initialThemeModeValue)

export const ThemeModeProvider = ThemeModeContext.Provider
