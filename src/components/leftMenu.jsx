import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {Link} from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class leftMenu extends Component {
    constructor (props) {
        super(props);
        this.state = {
            collapsed: false
        }
    }
// <Link to="/detail"><span>详情</span></Link>
    render () {
        return (<div className="menu-container" style={{width: 205 }}>
            <Menu className="menu-box" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} mode="inline" theme="dark" inlineCollapsed={this.state.collapsed}>
                <Menu.Item key="1">
                    <Icon type="pie-chart"/>
                    <Link to="/index/helloword" style={{display: 'inline'}}>首页</Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="desktop"/>
                    <Link to="/index/indexaaaaa" style={{display: 'inline'}}>详情</Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Icon type="inbox"/>
                    <Link to="/index/415674897" style={{display: 'inline'}}>商品</Link>
                </Menu.Item>
                <SubMenu key="sub1" title={<span> <Icon type = "mail" /><span> Navigation One</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
                <SubMenu key="sub2" title={<span> <Icon type = "appstore" /><span> Navigation Two</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </SubMenu>
            </Menu>
        </div>);
    }
}

export default leftMenu;
