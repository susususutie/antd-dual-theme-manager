import { Flex } from 'antd'
import { UpdaterContext } from 'antd-dual-theme-manager'
import { useContext, useEffect } from 'react'
import Antd4Demo from './Antd4Demo'
import Antd5Demo from './Antd5Demo'

export default function Playground() {
  const themeUpdater = useContext(UpdaterContext)
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(window as any).themeUpdater = themeUpdater
  }, [themeUpdater])

  return (
    <Flex gap='middle' style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Antd4Demo />
      <Antd5Demo />
    </Flex>
  )
}
