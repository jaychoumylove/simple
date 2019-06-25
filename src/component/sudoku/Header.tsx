import React, { SFC, Component } from 'react';
import { RouteComponentProps } from 'react-router';
import Back from './Back';
import { Layout } from 'antd';

interface OwnProps extends RouteComponentProps {
    left?: Component,
    right: Component
    title: string
}

const Header: SFC<OwnProps> = (props: OwnProps) => {
    const renderLeft = () => {
        if (props.left) return props.left;

        return <Back />;
    }

    const renderRight = () => {
        return props.right;
    }

    const { Header, Footer, Content } = Layout;

    return <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
    </Layout>;
}

export default Header;