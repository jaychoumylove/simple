import React from "react";
import style from "./index.module.less";
// import "./index.module.less";

export type ILoadingOneProps = {};

const LoadingOne: React.FC<ILoadingOneProps> = ({}) => {
  return (
    // <div className="loading">
    <div className={style.loading}>
      <div className={style["loading-item"]}></div>
      <div className={style["loading-item"]}></div>
      <div className={style["loading-item"]}></div>
      <div className={style["loading-item"]}></div>
      <div className={style["loading-item"]}></div>
      {/* <div className="loading-item"></div>
      <div className="loading-item"></div>
      <div className="loading-item"></div>
      <div className="loading-item"></div>
      <div className="loading-item"></div> */}
    </div>
  );
};

export { LoadingOne };
