import React from 'react'
import { Button, notification,Space,Row} from 'antd';

const Alert2 = () => {
    const [api,contextHolder] = notification.useNotification();
  
    const handle=(val)=>{
        api[val]({
            description:`${val} Notification`,
        })
    }
  return (
    <>
        //{contextHolder}
        <Row  justify="center" style={{padding:"350px"}}>
        <Space>
        <Button onClick={() => handle('success')}>Success</Button>
        <Button onClick={() => handle('info')}>Info</Button>
        <Button onClick={() => handle('warning')}>Warning</Button>
        <Button onClick={() => handle('error')}>Error</Button>
        </Space>
        </Row>
        
    </>
  )
}

export default Alert2
