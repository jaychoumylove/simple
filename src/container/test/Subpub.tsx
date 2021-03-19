import { Button } from "antd";
import React, { useState } from "react";
import { getRandStr } from "../../util/signature";
import { default as SubPubC } from "../../util/SubPub";
// import Loading from "../component/Loading";
// import "./Juejin.less";

interface ownProps {}

const afterChange = (data?: any) => {
  console.log(data);
  console.log("from subscribe");
};

let Uid = 0;

const Pub = (props: ownProps): JSX.Element => {
  const [state, setstate] = useState("");

  const changeName = () => {
    const newName = getRandStr(8);

    SubPubC.publish("change", newName);
    setstate(newName);
  };

  const disChangeAnymore = () => {
    SubPubC.unsubscribe("change", Uid);
  };

  return (
    <div>
      <h2>Pub</h2>
      <form>
        <label>
          name:
          {state}
        </label>
        <label>
          <Button type="primary" onClick={changeName}>
            change
          </Button>
        </label>
        <label>
          <Button type="primary" onClick={disChangeAnymore}>
            disChangeAnymore
          </Button>
        </label>
      </form>
    </div>
  );
};

const Sub = (props: ownProps): JSX.Element => {
  Uid = SubPubC.subscribe("change", afterChange);

  const [state, setState] = useState("");

  const afterChange2 = (data?: any) => {
    console.log(data);
    console.log("from subscribe2");
    setState(data);
  };
  SubPubC.subscribe("change", afterChange2);
  return <div>Sub {state} </div>;
};

const Subpub = (props: ownProps): JSX.Element => {
  return (
    <>
      <Sub />
      <Pub />
    </>
  );
};

export default Subpub;
