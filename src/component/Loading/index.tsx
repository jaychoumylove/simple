import React from "react";
import "./index.less";
import { LoadingOne } from "./1";

export type ILoadingProps = {};

const Loading: React.FC<ILoadingProps> = ({}) => {
  return (
    <div className="loading-container">
      <LoadingOne />
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
