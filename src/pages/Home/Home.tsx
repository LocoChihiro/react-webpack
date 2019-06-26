import React, { Component } from "react";
import MySider from "@/components/Menu/Menu";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;
import './Home.less';

export default class Home extends Component {
  public render() {
    return (
      // <Layout>
      //   <Sider />
      //   <Layout>
      //     <Header>Header</Header>
      //     <Content>
      //       <h2>Home1231312</h2>
      //     </Content>
      //   </Layout>
      // </Layout>
      <Layout>
        <Sider
          style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            background: "#fff"
          }}
        >
          <div className="logo" />
          <MySider />
        </Sider>
        <Layout style={{ background: "#fff", marginLeft: 200 }}>
          <Content
            style={{
              margin: "24px 16px 0",
              overflow: "initial"
            }}
          >
            <h2>Home1231312</h2>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
