import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  externals: [
    'react',
    'react-dom',
    'antd-style',
    '@ant-design/colors',
    '@ctrl/tinycolor',
    '@ant-design/cssinjs',
    'antd4',
    'antd5',
  ],
  entries: ['src/index'],
  declaration: 'node16',
  clean: true,
  failOnWarn: false,
})
