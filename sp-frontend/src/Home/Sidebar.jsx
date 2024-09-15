import { Layout } from "antd";
import "../HomeStyles/SideBar.css"
import Logo from "./Logo";
import MenuList from "./MenuList";

const { Sider } = Layout;

export default function SideBar() {
  return (
    
      <Sider className="sidebar">
        <Logo />
        <MenuList />
      </Sider>
  );
}
