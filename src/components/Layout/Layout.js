import React from "react";

import ToolBar from "../Toolbar/Toolbar";
import Aux from "../../hoc/Aux";
import classes from "./Layout.module.css";

const layout = (props) => (
  <Aux>
    <ToolBar></ToolBar>
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
