import React from "react";
import Accordion from "./AccordionUI";
import Styles from "../styles/Layout.module.scss";
import { Link } from "react-router-dom";

const Lnb = () => {
  return (
    <nav className={Styles.drawerWrap}>
      <div className={Styles.title}>
        <Link to="/">Publishing-LIST</Link>
      </div>
      <Accordion />
    </nav>
  );
};

export default Lnb;
