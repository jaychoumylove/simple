import React from "react";
import { default as Item3Style } from "./Item3.module.less";

interface ownProps {}

const style = {
  outer: {
    border: "1px solid #ccc",
    background: "#fc9",
    color: "#fff",
    margin: "50px auto",
    padding: "50px",
  },
  floatBox: {
    width: "80px",
    height: "80px",
    float: "left",
    textAlign: "center",
    lineHeight: "80px",
  },
  red: {
    background: "red",
  },
  blue: {
    background: "blue",
  },
  green: {
    background: "green",
  },
  clear: {
    clear: "both",
    height: "0",
    lineHeight: "0",
    fontSize: "0",
  },
  overflow: {
    overflow: "auto",
    zoom: 1, // 处理兼容性-解决在IE6下清除浮动
  },
};

const mergeStyles = (styles: Object[]) => {
  return Object.assign({}, ...styles) as React.CSSProperties;
};

const Item = (props: ownProps): JSX.Element => {
  return (
    <div style={style.outer}>
      <div style={mergeStyles([style.floatBox, style.red])}>red</div>
      <div style={mergeStyles([style.floatBox, style.blue])}>blue</div>
      <div style={mergeStyles([style.floatBox, style.green])}>green</div>
    </div>
  );
};

const Item1 = (props: ownProps): JSX.Element => {
  return (
    <div style={style.outer}>
      <div style={mergeStyles([style.floatBox, style.red])}>red</div>
      <div style={mergeStyles([style.floatBox, style.blue])}>blue</div>
      <div style={mergeStyles([style.floatBox, style.green])}>green</div>
      <div style={style.clear as React.CSSProperties}></div>
    </div>
  );
};

const Item2 = (props: ownProps): JSX.Element => {
  return (
    <div style={mergeStyles([style.outer, style.overflow])}>
      <div style={mergeStyles([style.floatBox, style.red])}>red</div>
      <div style={mergeStyles([style.floatBox, style.blue])}>blue</div>
      <div style={mergeStyles([style.floatBox, style.green])}>green</div>
    </div>
  );
};

const Item3 = (props: ownProps): JSX.Element => {
  return (
    <div className={Item3Style.outer}>
      <div style={mergeStyles([style.floatBox, style.red])}>red</div>
      <div style={mergeStyles([style.floatBox, style.blue])}>blue</div>
      <div style={mergeStyles([style.floatBox, style.green])}>green</div>
    </div>
  );
};

const ClearFloat = (props: ownProps): JSX.Element => {
  return (
    <>
      <Item />
      <Item1 />
      <Item2 />
      <Item3 />
    </>
  );
};

export default ClearFloat;
