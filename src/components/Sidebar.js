import {Menu, Layout} from 'antd';
import {HomeOutlined, FormOutlined, CommentOutlined, LikeOutlined, DislikeOutlined, SettingOutlined} from '@ant-design/icons';
import React from "react";

const {Header, Content, Footer, Sider} = Layout;

export default function Sidebar() {

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider>
                <h1 style={{marginLeft: 25, marginTop: 25, marginBottom: 15, color: 'rgba(255, 255, 255, 0.65)'}}>Anonymous Blog</h1>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<HomeOutlined/>}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="2" icon={<FormOutlined/>}>
                        My Posts
                    </Menu.Item>
                    <Menu.Item key="3" icon={<CommentOutlined/>}>
                        My Comments
                    </Menu.Item>
                    <Menu.Item key="4" icon={<LikeOutlined/>}>
                        My Upvotes
                    </Menu.Item>
                    <Menu.Item key="5" icon={<DislikeOutlined/>}>
                        My Downvotes
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined/>}>
                        Preferences
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                {/*<Header className="site-layout-sub-header-background" style={{padding: 0}}>TEST</Header>*/}
                <Content style={{margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                        content
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Manulife University Cohort 8 (2021)</Footer>
            </Layout>
        </Layout>
    )
}
