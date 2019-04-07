import React, { FunctionComponent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

interface OwnProps extends RouteComponentProps {
    initial: number
}

interface InitState {
    token: String,
    auth: Boolean
}

const Counter: FunctionComponent<OwnProps> = (initState: OwnProps)=> {
    const [clicks, setClicks] = useState(initState.initial);
    const _state:InitState = { token: 'no', auth: false };
    const [state, handelState] = useState(_state);

    function _handelState() {
        const token = state.auth ? 'yes': 'no';

        handelState(state => {
            return {
                token,
                auth: !state.auth
            }
        })
    }

    return <>
        <p>Clicks: {clicks}</p>
        <button onClick={() => setClicks(clicks+1)}>+</button>
        <button onClick={() => setClicks(clicks-1)}>-</button>
        <p>token: {state.token}</p>
        <p>auth: {state.auth ? 'true': 'false'}</p>
        <button onClick={() => _handelState()}>handleState</button>
    </>
}

export default withRouter(Counter);