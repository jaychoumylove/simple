import React, { FunctionComponent, MouseEventHandler } from 'react'
import { Button, Icon } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps {
}

const Back: FunctionComponent<OwnProps> = (props: OwnProps) => {
    const goBack = () => {
        props.history.goBack();
    };

    return (
        <Button
            type="link"
            onClick={goBack}
        >
            <Icon type="left" />
        </Button>
    );
};

export default withRouter(Back);