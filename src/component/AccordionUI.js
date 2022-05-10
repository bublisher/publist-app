import React from "react";
import styled from "styled-components";
import accordion from "../db/AccordionData.json";

const AccordionNavTitle = styled.h3`
  margin: 0 1rem;
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
  font-size: 0.875rem;
  margin: 0 1rem;
  padding: 0.5rem 0.875rem 0.875rem;
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
  return (
    <>
      {accordion.group.map((group) => (
        <React.Fragment key={group.id}>
          <AccordionNavTitle>
            <a href="#/">{group.groupName}</a>
          </AccordionNavTitle>
          <AccordionNavList>
            {group.menuName.map((menu) => (
              <li key={menu.id}>
                <a href="#/">{menu.menu}</a>
              </li>
            ))}
          </AccordionNavList>
        </React.Fragment>
      ))}
    </>
  );
};

export default Accordion;
