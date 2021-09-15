import React from "react";
import "./index.less";
import { LoadingOne } from "./1";
import { LoadingTwo } from "./2";

export type ILoadingProps = {};

const Loading: React.FC<ILoadingProps> = ({}) => {
  return (
    <div className="loading-container">
      {/* <LoadingOne /> */}
      <LoadingTwo />
      {/* <div
        className="loading"
        style={{
          backgroundColor: "#ccc",
          width: "300px",
          height: "240px",
        }}
      ></div> */}
    </div>
  );
};

export default Loading;
