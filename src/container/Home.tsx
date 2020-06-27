import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Layout, Row, Col, BackTop } from 'antd';
import styled from 'styled-components';
import '../app.less';
import Header from '../component/header';

// 响应式
const siderLayout = { xxl: 4, xl: 5, lg: 5, sm: 0, xs: 0 }
const contentLayout = { xxl: 20, xl: 19, lg: 19, sm: 24, xs: 24 }

type GetTop = () => HTMLElement | Window | null;

class App extends Component<RouteComponentProps> {
	getTop: GetTop = () => {
		return document.getElementById('id');
	}
	

	render() {
		const { Sider, Content, Footer } = Layout;

		return  <Layout className='app-container'>
			<Header />
				<Row className='app-wrapper'>
					<Col {...siderLayout}>
						{/* <SideBar /> */}
					</Col>
					<Col {...contentLayout}>
						{/* <AppMain {...props} /> */}
					</Col>
				</Row>
			{/*<BackTop target={this.getTop || null} />*/}
	  </Layout>
	}
}

export default App;
