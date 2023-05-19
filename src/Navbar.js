import { Menu } from 'antd';
import Log from './Log';
import Alert from "./Alert";
import React from 'react'
const Navbar = () => {
  return (
    <>
    <Menu items = {[{label: 'Login',key: '/'},{label: 'Abc',key: '/'}]} mode="horizontal" />
    </>
  )
}


export default Navbar
