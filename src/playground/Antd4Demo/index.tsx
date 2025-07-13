import { Button, Space, Menu, Tag, Alert, Typography, Select, Input, Table, Pagination, Dropdown } from 'antd4'
import { theme } from 'antd'
import { useState } from 'react'
import { AppstoreOutlined, MailOutlined, UpOutlined } from '@ant-design/icons'
import { useStyles } from './styles'
import cls from './index.module.less'
import { DatePicker } from 'antd4'
import { Tabs } from 'antd4'

export default function Antd4Demo() {
  const [count, setCount] = useState(0)

  const { token } = theme.useToken()
  const inlineStyle = {
    outline: 'none',
    border: 'none',
    fontWeight: 400,
    fontSize: token.fontSize,
    height: token.controlHeight,
    padding: `${0}px ${token.paddingContentHorizontal - token.lineWidth}px`,
    borderRadius: token.borderRadius,
    color: token.colorTextLightSolid,
    backgroundColor: token.colorPrimary,
    cursor: 'pointer',
  }

  // 2. 单独样式文件 (css in js)
  const { cx, styles, theme: t } = useStyles({ border: false })

  return (
    <div style={{ width: 400 }}>
      <Typography.Title level={3}>Antd4Demo {count}</Typography.Title>

      <div style={{ marginBottom: 16 }}>
        <Tag color='success'>success</Tag>
        <Tag color='processing'>processing</Tag>
        <Tag color='error'>error</Tag>
        <Tag color='warning'>warning</Tag>
        <Tag color='default'>default</Tag>
      </div>

      <Space direction='vertical' style={{ width: '100%', marginBottom: 16 }}>
        <Alert message='Success Text' type='success' />
        <Alert message='Info Text' type='info' />
        <Alert message='Warning Text' type='warning' />
        <Alert message='Error Text' type='error' />
      </Space>

      <Select size='large' style={{ width: '100%', marginBottom: 16 }} />
      <Select size='middle' style={{ width: '100%', marginBottom: 16 }} />
      <Select size='small' style={{ width: '100%', marginBottom: 16 }} />

      <Select
        defaultValue={1}
        style={{ width: '100%', marginBottom: 16 }}
        options={Array.from({ length: 100 }).map((_, i) => ({
          value: i,
          label: `Option ${i}`,
        }))}
      />

      <Select
        mode='multiple'
        size='large'
        maxTagCount={3}
        defaultValue={[1, 2]}
        style={{ width: '100%', marginBottom: 16 }}
        options={Array.from({ length: 100 }).map((_, i) => ({
          value: i,
          label: `Option ${i}`,
        }))}
      />
      <Select
        mode='multiple'
        size='middle'
        maxTagCount={3}
        defaultValue={[1, 2]}
        style={{ width: '100%', marginBottom: 16 }}
        options={Array.from({ length: 100 }).map((_, i) => ({
          value: i,
          label: `Option ${i}`,
        }))}
      />
      <Select
        mode='multiple'
        size='small'
        maxTagCount={3}
        defaultValue={[1, 2]}
        style={{ width: '100%', marginBottom: 16 }}
        options={Array.from({ length: 100 }).map((_, i) => ({
          value: i,
          label: `Option ${i}`,
        }))}
      />

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <Button.Group>
          <Button size='large'>1</Button>
          <Button size='large'>2</Button>
        </Button.Group>
        <Button.Group>
          <Button size='middle'>1</Button>
          <Button size='middle'>2</Button>
        </Button.Group>
        <Button.Group>
          <Button size='small'>1</Button>
          <Button size='small'>2</Button>
        </Button.Group>

        <Button.Group size='large'>
          <Button>1</Button>
          <Button>2</Button>
        </Button.Group>
        <Button.Group size='middle'>
          <Button>1</Button>
          <Button>2</Button>
        </Button.Group>
        <Button.Group size='small'>
          <Button>1</Button>
          <Button>2</Button>
        </Button.Group>

        <Button icon={<UpOutlined />} size='large' shape='circle' />
        <Button icon={<UpOutlined />} size='middle' shape='circle' />
        <Button icon={<UpOutlined />} size='small' shape='circle' />

        <Button icon={<UpOutlined />} size='large' shape='default' />
        <Button icon={<UpOutlined />} size='middle' shape='default' />
        <Button icon={<UpOutlined />} size='small' shape='default' />

        <Button icon={<UpOutlined />} size='large' shape='round' />
        <Button icon={<UpOutlined />} size='middle' shape='round' />
        <Button icon={<UpOutlined />} size='small' shape='round' />

        <Button type='primary' onClick={() => setCount(c => c + 1)}>
          官方组件
        </Button>
        <button style={inlineStyle}>
          <span>自定义组件</span>
        </button>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 16 }}>
        <Input size='large' />
        <Input size='middle' />
        <Input size='small' />

        <Input addonBefore='addonBefore' addonAfter='addonAfter' size='large' />
        <Input addonBefore='addonBefore' addonAfter='addonAfter' size='middle' />
        <Input addonBefore='addonBefore' addonAfter='addonAfter' size='small' />

        <Input.Search addonBefore='addonBefore' size='large' />
        <Input.Search addonBefore='addonBefore' size='middle' />
        <Input.Search addonBefore='addonBefore' size='small' />

        <Input.Password size='large' />
        <Input.Password size='middle' />
        <Input.Password size='small' />

        <Input.TextArea size='large' />
        <Input.TextArea size='middle' />
        <Input.TextArea size='small' />

        <Input.Group compact size='large'>
          <Input style={{ width: '20%' }} />
          <Input style={{ width: '20%' }} />
          <Input style={{ width: '30%' }} />
        </Input.Group>
        <Input.Group compact size='default'>
          <Input style={{ width: '20%' }} />
          <Input style={{ width: '20%' }} />
          <Input style={{ width: '30%' }} />
        </Input.Group>
        <Input.Group compact size='small'>
          <Input style={{ width: '20%' }} />
          <Input style={{ width: '20%' }} />
          <Input style={{ width: '30%' }} />
        </Input.Group>
      </div>
      <DatePicker size='large' />
      <DatePicker size='middle' />
      <DatePicker size='small' />

      <DatePicker.TimePicker size='large' />
      <DatePicker.TimePicker size='middle' />
      <DatePicker.TimePicker size='small' />

      <Table
        bordered
        size='large'
        columns={[
          { title: 'Name', dataIndex: 'name' },
          { title: 'Age', dataIndex: 'age' },
        ]}
        dataSource={[
          { name: 'John', age: 18 },
          { name: 'Jim', age: 19 },
        ]}
      />
      <Table
        bordered
        columns={[
          { title: 'Name', dataIndex: 'name' },
          { title: 'Age', dataIndex: 'age' },
        ]}
        dataSource={[
          { name: 'John', age: 18 },
          { name: 'Jim', age: 19 },
        ]}
      />
      <Table
        bordered
        size='small'
        columns={[
          { title: 'Name', dataIndex: 'name' },
          { title: 'Age', dataIndex: 'age' },
        ]}
        dataSource={[
          { name: 'John', age: 18 },
          { name: 'Jim', age: 19 },
        ]}
      />

      <Pagination
        style={{ width: '100%', marginBottom: 16 }}
        simple
        showPrevNextJumpers
        showQuickJumper
        showSizeChanger
        defaultCurrent={1}
        total={50}
      />
      <Pagination
        style={{ width: '100%', marginBottom: 16 }}
        size='small'
        showPrevNextJumpers
        showQuickJumper
        showSizeChanger
        defaultCurrent={1}
        total={50}
      />
      <Pagination
        style={{ width: '100%', marginBottom: 16 }}
        showPrevNextJumpers
        showQuickJumper
        showSizeChanger
        defaultCurrent={1}
        total={50}
      />

      <Dropdown
        menu={{
          selectedKeys: ['1'],
          items: Array.from({ length: 5 }).map((_, i) => ({
            key: `${i}`,
            label: `Option ${i}`,
          })),
        }}
      >
        <Button>Actions</Button>
      </Dropdown>

      <Tabs
        type='card'
        items={Array.from({ length: 10 }).map((_, i) => ({
          key: `${i}`,
          label: `Tab ${i}`,
          children: `Content of Tab Pane ${i}`,
        }))}
      />

      <Menu
        theme={t.appearance}
        mode='horizontal'
        items={[
          {
            label: 'Navigation One',
            key: 'mail',
            icon: <MailOutlined />,
          },
          {
            label: 'Navigation Two',
            key: 'app',
            icon: <AppstoreOutlined />,
            disabled: true,
          },
        ]}
      />

      <div className={styles.container} style={{ marginBottom: 16 }}>
        <Space direction='vertical' style={{ width: '100%' }} size={16}>
          <div className={styles.defaultCard}>普通卡片</div>
          <div className={cx(styles.baseCard, styles.primaryCard)}>主要卡片</div>
        </Space>
      </div>

      <div className={cls.container}>
        <Space direction='vertical' style={{ width: '100%' }} size={16}>
          <div className={cls.defaultCard}>普通卡片</div>
          <div className={cx(cls.baseCard, cls.primaryCard)}>主要卡片</div>
        </Space>
      </div>
    </div>
  )
}
