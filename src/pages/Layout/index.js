import { Button } from "antd-mobile"
import { Outlet } from "react-router-dom"

const Layout = () => { 
  return (
   <div>
    <Outlet></Outlet>
      我是layout
      <Button color="primary">测试按钮</Button>
      <div >
        <Button color="primary">测试按钮</Button>
      </div>

   </div >

  )
}

export default Layout