import React, { FunctionComponent, useState, Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps {
    initial: number
}

const Counter:FunctionComponent<OwnProps> = (initState) => {
    const [clicks, setClicks] = useState(initState.initial);

    console.log(initState);

    return <>
        <p>Clicks: {clicks}</p>
        <button onClick={() => setClicks(clicks+1)}>+</button>
        <button onClick={() => setClicks(clicks-1)}>+</button>
    </>
}

export default withRouter(Counter);