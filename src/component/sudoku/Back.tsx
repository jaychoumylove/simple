import React, { FunctionComponent, MouseEventHandler } from "react";
import { Button } from "antd";
import { withRouter, RouteComponentProps } from "react-router";
// import {} from '@ant-design/Icon';

interface OwnProps extends RouteComponentProps {}

const Back: FunctionComponent<OwnProps> = (props: OwnProps) => {
  const goBack = () => {
    props.history.goBack();
  };

  return <Button type="link" onClick={goBack}></Button>;
};

export default withRouter(Back);
