import React, { MouseEventHandler } from "react";
import { Button, Input, Space } from "antd";
import { RouteComponentProps } from "react-router-dom";
import Axios from "axios";
import { debounce, throttle } from "../util/Util";

interface OwnProps extends RouteComponentProps {
  observer: MutationObserver | null;
}

let observer: any = null,
  content: any;

class ObserveDom extends React.Component<OwnProps> {
  hhandleChangeB: Function | any;
  constructor(props: OwnProps) {
    super(props);

    this.addElement = this.addElement.bind(this);
    this.removeElement = this.removeElement.bind(this);
    // debounce && throttle
    this.removeElement = debounce(this.removeElement, 1000);
    this.addElement = throttle(this.addElement, 1000);
    console.log(props);
    this.state = {
      value: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.hhandleChangeB = debounce(this.handleChange, 2000);
    this.handleo = this.handleo.bind(this);
    // this.hhandleChangeB(1);
  }

  handleChange(e: any | Event) {
    if (!e.target) {
      console.log(e.target);
      return;
    }

    console.log(e.target.value);

    this.setState({
      value: e.target.value,
    });
  }

  handleo(e: any | Event) {
    e.persist();
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      value: e.target.value,
    });

    this.hhandleChangeB(e);
  }

  componentDidMount() {
    observer = new MutationObserver(this.observerCB);
    this.initContent();
    observer.observe(content, { childList: true });

    Axios.post("/token/user", {
      mobile: "15580099693",
      password: "1234567",
    });
  }

  componentWillUnmount() {
    observer.disconnect();
    observer = null;
  }

  observerCB(mutationsList: any, observer: any) {
    Object.keys(mutationsList).map(function (index: any) {
      const item = mutationsList[index];
      switch (item.type) {
        case "childList":
          console.info(item);
          console.info("childList has been modified");
          break;
        default:
          break;
      }
    });
  }

  initContent(): void {
    if (!(content instanceof Element))
      content = document.getElementById("content");
  }

  addElement(e: any) {
    const child = document.createElement("div");
    child.classList.add("item");
    Object.keys(itemStyle).map(function (item: any) {
      child.style[item] = itemStyle[item];
    });
    child.innerHTML = "Item";
    content.appendChild(child);
  }

  removeElement(e: any) {
    const child = document.getElementsByClassName("item");
    if (child.length) {
      let item: any = child.item(child.length - 1);
      item.remove();
    }
  }

  render() {
    return (
      <div id="content">
        <header>
          <Space>
            <Button type="primary" onClick={this.addElement}>
              Add Element
            </Button>
            <Button type="link" onClick={this.removeElement}>
              Remove Element
            </Button>

            <Input defaultValue="thr" onChange={this.handleo} />
            <Input defaultValue="deb" onChange={this.handleChange} />
          </Space>
        </header>
      </div>
    );
  }
}

const itemStyle: any = {
  width: "100px",
  height: "40px",
  "line-height": "40px",
  background: "#0dc7ff",
  borderRadius: "5px",
  marginTop: "10px",
  textAlign: "center",
};

export default ObserveDom;
