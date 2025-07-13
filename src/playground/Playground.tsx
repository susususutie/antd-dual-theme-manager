import { Flex } from 'antd'
import Antd4Demo from './Antd4Demo'
import Antd5Demo from './Antd5Demo'

export default function Playground() {
  return (
    <Flex gap='middle' style={{ maxWidth: '100%', overflow: 'hidden' }}>
      <Antd4Demo />
      <Antd5Demo />
    </Flex>
  )
}
