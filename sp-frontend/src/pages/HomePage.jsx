
import SideBar from "../Home/Sidebar";
import { Layout } from "antd";

const {Header} = Layout;
export default function HomePage() {
  return (
    <Layout>
      <SideBar />
      <Layout>
        <Header>Header</Header>
      </Layout>
    </Layout>
  );
}