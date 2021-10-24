import {Menu, Layout} from 'antd'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import {
    HomeOutlined,
    FormOutlined,
    CommentOutlined,
    LikeOutlined,
    DislikeOutlined,
    SettingOutlined
} from '@ant-design/icons'
import React, {useState} from "react"
import Posts from "./Posts"

const {Header, Content, Footer, Sider} = Layout

export default function Sidebar() {

    const [headerText, setHeaderText] = useState('News Feed')

    return (
        <div>
            <Router>
                <Layout style={{minHeight: '100vh'}}>
                    <Sider>
                        <h1 style={{
                            marginLeft: 25,
                            marginTop: 20,
                            marginBottom: 15,
                            color: 'rgba(255, 255, 255, 0.65)'
                        }}>Anonymous Blog</h1>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1" icon={<HomeOutlined/>}>
                                <Link to="/" onClick={() => setHeaderText('News Feed')}>Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<FormOutlined/>}>
                                <Link to="/posts" onClick={() => setHeaderText('Posts')}>My Posts</Link>
                            </Menu.Item>
                            <Menu.Item key="3" icon={<CommentOutlined/>}>
                                <Link to="/comments" onClick={() => setHeaderText('Comments')}>My Comments</Link>
                            </Menu.Item>
                            <Menu.Item key="4" icon={<LikeOutlined/>}>
                                <Link to="/upvotes" onClick={() => setHeaderText('Upvotes')}>My Upvotes</Link>
                            </Menu.Item>
                            <Menu.Item key="5" icon={<DislikeOutlined/>}>
                                <Link to="/downvotes" onClick={() => setHeaderText('Downvotes')}>My Downvotes</Link>
                            </Menu.Item>
                            <Menu.Item key="6" icon={<SettingOutlined/>}>
                                <Link to="/preferences" onClick={() => setHeaderText('Preferences')}>Preferences</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header className="site-layout-sub-header-background"
                                style={{
                                    height: 64,
                                    textAlign: 'center',
                                    color: "white",
                                    fontSize: 20
                                }}>{headerText}</Header>
                        <Switch>
                            <Route exact path="/">
                                <Content style={{margin: '24px 16px 0', minHeight: '88vh'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        <Posts/>
                                    </div>
                                </Content>
                            </Route>

                            <Route exact path="/posts">
                                <Content style={{margin: '24px 16px 0', minHeight: '88vh'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        SAMPLE POSTS
                                    </div>
                                </Content>
                            </Route>

                            <Route exact path="/comments">
                                <Content style={{margin: '24px 16px 0', minHeight: '88vh'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        SAMPLE COMMENTS
                                    </div>
                                </Content>
                            </Route>

                            <Route exact path="/upvotes">
                                <Content style={{margin: '24px 16px 0', minHeight: '88vh'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        SAMPLE UPVOTES
                                    </div>
                                </Content>
                            </Route>

                            <Route exact path="/downvotes">
                                <Content style={{margin: '24px 16px 0', minHeight: '88vh'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        SAMPLE DOWNVOTES
                                    </div>
                                </Content>
                            </Route>

                            <Route exact path="/preferences">
                                <Content style={{margin: '24px 16px 0', minHeight: '88vh'}}>
                                    <div className="site-layout-background" style={{padding: 24, minHeight: 360}}>
                                        SAMPLE PREFERENCES
                                    </div>
                                </Content>
                            </Route>
                        </Switch>
                        <Footer style={{textAlign: 'center', padding: 0}}>Manulife University Cohort 8 (2021)</Footer>
                    </Layout>
                </Layout>
            </Router>
        </div>
    )
}
