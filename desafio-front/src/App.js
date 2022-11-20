import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import { Layout } from "antd"; 
import React, { useState } from "react";
import 'antd/dist/antd.min.css';
import CardAnt from "./Components/Cards";

function Lineups() {

    const { Header, Footer, Sider, Content } = Layout;
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsed={collapsed}>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        Relatórios
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout className="site-layout">
            <Header
              className="site-layout-background"
              style={{
                padding: 0,
              }}
            >
                {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                  className: 'trigger',
                  onClick: () => setCollapsed(!collapsed),
                })}

            </Header>
            <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
               <CardAnt />
            </Content>
          <Footer style={{ textAlign: 'center' }}>Layout ©2022 Created by Nayane Maria</Footer>

            </Layout>
        </Layout>
    )
}

export default Lineups;