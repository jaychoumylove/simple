import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import { Layout } from 'antd';
import Back from '../component/sudoku/Back';

interface OwnProps extends RouteComponentProps {

}

class Sudoku extends Component<OwnProps> {
    constructor(props: OwnProps) {
        super(props);
        
    }

    render() {
        const { Header, Content, Footer } = Layout;

        return <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>
                <Back />
            </Footer>
        </Layout>;
    }
}


export default Sudoku;
