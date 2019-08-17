import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router';
import '../App.css';

interface ownProps extends RouteComponentProps {

}

interface State {
    first: boolean,
    second: boolean
}

enum Num {
    first = 'first',
    second = 'second'
}

type No = "first" | "second"

const Zindex = (props: ownProps): JSX.Element => {
    const initState: State = {
        first: false,
        second: false
    };

    const [state, handleState] = useState(initState);

    function toggle(key: No, value: boolean) {
        console.info(key, value);
        handleState(state => {
            return {
                ...state,
                [key]: value
            }
        })
    }

    function renderF() {
        console.info(state);
        if (state.first) return <div className="box">
            <div className="container">
                <p className="header">Hello, here is the first one.</p>
                <div className="footer">
                    <button className="left" onClick={() => toggle("second", true)}>show second</button>
                    <button className="right" onClick={() => toggle('first', false)}>hide me</button>
                </div>
            </div>
        </div>
    }

    function renderS() {
        if (state.second) return <div className="box">
            <div className="container">
                <p className="header">Hello, here is the second one.</p>
                <div className="footer">
                    <button className="right" onClick={() => toggle('second', false)}>hide me</button>
                </div>
            </div>
        </div>
    }

	return <>
        <div>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            <a
                className="App-link"
                onClick={() => toggle('first', true)}
            >
                show the first
            </a>
        </div>
        {renderF()}
        {renderS()}
    </>
};

export default Zindex;