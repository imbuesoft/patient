import React from 'react'
import { Button, notification,Space,Row} from 'antd';
const Alert = () => {
    const handle=(val)=>{
        let plc=undefined
        let dsc=""
        if(val==='btm')
        {
            plc='bottom'
            dsc="From Bottom Center"
        }
        else if(val==='upr')
        {
            plc='top' 
            dsc="From Top Center"
        }
        else if(val==='lft')
        {
            plc='topLeft'
            dsc="From Top Left"
        }
        else if(val==='r8')
        {
            plc='topRight'
            dsc="From Top Right"
        }
        else if(val==='lftd')
        {
            plc='bottomLeft'
            dsc="From Bottom Left"
        }
        else if(val==='r8d')
        {    
            plc='bottomRight'
            dsc="From Bottom Right"
        }
        notification.open(
            {
                message:"You've got Notification",
                description:dsc,
                placement:plc
            }
        )
    }
  return (
    <>
    <Row  justify="center"  style={{padding:"350px"}}>
        <Space>
            <Button type="primary" onClick={()=>handle('btm')}>Notification from Bottom</Button>
            <Button type="primary" onClick={()=>handle('upr')}>Notification from Top</Button>
            <Button type="primary" onClick={()=>handle('lft')}>Notification from Left(top)</Button>
            <Button type="primary" onClick={()=>handle('r8')}>Notification from Right(top)</Button>
            <Button type="primary" onClick={()=>handle('lftd')}>Notification from Left(Down)</Button>
            <Button type="primary" onClick={()=>handle('r8d')}>Notification from Right(Down)</Button>
        </Space>
    </Row>
    </>
  )
}

export default Alert
