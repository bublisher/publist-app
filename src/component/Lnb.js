import React from "react";
import Accordion from "./AccordionUI";
import styles from "./Layout.module.scss";

const Lnb = () => {
  return (
    <nav className={styles.drawerWrap}>
      <div className={styles.title}>
        <a href="#/">Publishing-LIST</a>
      </div>
      <Accordion />
    </nav>
  );
};

export default Lnb;
