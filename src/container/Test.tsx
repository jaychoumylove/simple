import React from "react";
import { RouteComponentProps } from "react-router";

interface ownProps extends RouteComponentProps {}

const Test = (props: ownProps): JSX.Element => {
  function scroll(): void {
    // first test for window
    // window.scrollBy({top: 500, behavior: "smooth"});
    // second test for innerHtml > ul
    const box: any = document.getElementById("box");
    box.scrollBy({ top: 500, behavior: "smooth" });
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

  // return <>
  //       <input type="button" onClick={scroll} value="滚动" />
  //       <div style={style} id="box">
  //       	<ul id="ul">
  //       		{a.map((item, index) => {
  //       			return <li key={index}>{item}</li>;
  //       		})}
  //       	</ul>
  //       </div>
  //   </>;
  return (
    <>
      <div className="contanier" style={contanierStyle}>
        <div style={style} className="left">
          <img src="" alt="" />
        </div>
        <div className="right">
          <div
            className="line"
            style={{ backgroundColor: "blue", width: "100%" }}
          ></div>
        </div>
      </div>
    </>
  );
};

const style = {
  maxHeight: "300px",
  overflow: "auto",
};

const contanierStyle = {
  width: "300px",
  height: "200px",
  display: "flex",
  backgroundColor: "#f9f9f9",
  margin: "auto",
};

export default Test;
