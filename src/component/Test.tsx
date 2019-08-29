import React, {Component, FunctionComponent} from 'react';
import { Layout, Button, Row, Col } from 'antd';
import styled from 'styled-components';

interface OwnProps {

}

const Test: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const { Header, Content, Footer } = Layout;
    const Wrap = styled.div`
        background: #00a0e9
    `;

    // return <div>
    //     <Layout>
    //         <Header>Header</Header>
    //         <Content>Content</Content>
    //         <Footer>
    //             <Button type="primary">Footer</Button>
    //         </Footer>
    //     </Layout>
    // </div>
    return <div>
        <Row>
            <Col span={12}><Wrap>col-12</Wrap></Col>
            <Col span={12}><Wrap>col-12</Wrap></Col>
        </Row>
        <Row>
            <Col span={8}><Wrap>col-8</Wrap></Col>
            <Col span={8}><Wrap>col-8</Wrap></Col>
            <Col span={8}><Wrap>col-8</Wrap></Col>
        </Row>
        <Row>
            <Col span={6}><Wrap>col-6</Wrap></Col>
            <Col span={6}><Wrap>col-6</Wrap></Col>
            <Col span={6}><Wrap>col-6</Wrap></Col>
            <Col span={6}><Wrap>col-6</Wrap></Col>
        </Row>
    </div>
};

const style = {
    col: {
        background: '#00a0e9'
    }
};

export default Test;