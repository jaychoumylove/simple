import React, { FunctionComponent, Component } from 'react';
import { RouteComponentProps } from 'react-router';
import Back from './Back';
import { Layout } from 'antd';

interface OwnProps extends RouteComponentProps {
    left?: Component,
    right: Component
    title: string
}

const Header: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const renderLeft = () => {
        if (props.left) return props.left;

        return <Back />;
    };

    const { Header, Footer, Content } = Layout;

    return null;
};

export default Header;