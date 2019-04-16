import React, { ReactNode } from "react";
import { RouteComponentProps } from "react-router";

interface ownProps extends RouteComponentProps {

}

const Test = (props: RouteComponentProps): JSX.Element => {
    function scroll(): void {
        // first test for window
        // window.scrollBy({top: 500, behavior: "smooth"}); 
        // second test for innerHtml > ul
        const box: any = document.getElementById('box');
        box.scrollBy({top: 500, behavior: "smooth"});
    }
 
    const a = [
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
        `文本文本文本文本文本文本文本文本文本文本文本文本文本`,
    ];

    return <>
        <input type="button" onClick={scroll} value="滚动" />
        <div style={style} id="box">
            <ul id="ul">
                {a.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
        </div>
    </>
}

const style = {
    'maxHeight': '300px',
    'overflow': 'auto'
}

export default Test;