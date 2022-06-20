import React, { useState } from "react";
import styled from "styled-components";
import accordion from "../db/AccordionData.json";
import { Link } from "react-router-dom";

// styled-components
const AccordionWrap = styled.div`
  padding: 0 0 0.875rem;
  &:last-child {
    padding: 0;
  }
`;

const AccordionNavTitle = styled.h3`
  margin: 0 1rem 0.5rem;
  border-radius: 0.375rem;
  background: linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232));
  a {
    font-size: 0.875rem;
    font-weight: 600;
    color: rgb(255, 255, 255);
    padding: 0.875rem 1rem;
    text-decoration: none;
    display: flex;
  }
`;

const AccordionNavList = styled.ul`
  max-height: 0;
  font-size: 0.875rem;
  margin: 0 1rem;
  padding: 0 0.875rem 0;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0, 1, 0, 1);
  &._ui-active {
    max-height: 9999px;
    transition: all 0.2s cubic-bezier(1, 0, 1, 0);
  }
  li {
    line-height: 1.5rem;
    a {
      font-size: 0.875rem;
      color: rgb(255, 255, 255);
      text-decoration: none;
      transition: 0.15s ease;
      &:hover {
        color: rgb(255, 83, 64);
      }
    }
  }
`;

const Accordion = () => {
  //const [selected, setSelected] = useState(0);
  const [value, setValue] = useState({
    selected: 0,
  });

  const { selected } = value;

  const toggleAccordion = (idx) => {
    // 같은 메뉴 클릭 시 아코디언 닫기 위한 처리
    //if (selected === idx) return setSelected(0);

    // 현재 선택한 대상의 인덱스를 useState에 저장
    setValue({
      ...value,
      selected: idx,
    });
  };

  return (
    <>
      {accordion.group.map((group, idx) => (
        <AccordionWrap key={group.id}>
          <AccordionNavTitle>
            <a
              href="#/"
              title={group.groupName}
              onClick={() => toggleAccordion(idx)}
            >
              {group.groupName}
            </a>
          </AccordionNavTitle>
          <AccordionNavList className={selected === idx ? "_ui-active" : ""}>
            {group.menuName.map((menu) => (
              <li key={menu.id}>
                <Link
                  to={
                    "pages/" +
                    group.groupName.split("-")[1].toLowerCase() +
                    "/" +
                    menu.id
                  }
                  title={menu.menu}
                >
                  {menu.menu}
                </Link>
                {/*<a href="#/" title={menu.menu}>
                  {menu.menu}
            </a>*/}
              </li>
            ))}
          </AccordionNavList>
        </AccordionWrap>
      ))}
    </>
  );
};

export default Accordion;
