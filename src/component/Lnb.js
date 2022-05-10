import React from "react";
import Accordion from "./AccordionUI";
import styles from "./Layout.module.css";

const Lnb = () => {
  return (
    <div className={styles.drawerWrap}>
      <div className={styles.title}>
        <a href="#/">Publishing-LIST</a>
      </div>
      <Accordion />
    </div>
  );
};

export default Lnb;
