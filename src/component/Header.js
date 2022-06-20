import React from "react";
import Styles from "../styles/Layout.module.scss";

const Header = () => {
  return (
    <header>
      <ul className={Styles.location}>
        <li>Publishing-Hmall</li>
        <li className={Styles.separator}>&gt;</li>
        <li>GNB/공통/메인템플릿/기타</li>
      </ul>
      <div>
        <label>
          <input type="text" placeholder="Search" />
        </label>
      </div>
    </header>
  );
};

export default Header;
