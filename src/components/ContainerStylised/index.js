import React from "react";
import "./style.css";

function ContainerStylised(props) {
  console.log("props",props);
  // console.log(children);
  // console.log(children.props);
  console.log(props.outerContainerType);
  console.log(props.innerContainerType);
  // console.log(children.props.innerContainerType);
  return (
    <div className={props.outerContainerType}>
      <div className={props.innerContainerType}>
        aaa
      </div>
    </div>
  );
}

export default ContainerStylised;


