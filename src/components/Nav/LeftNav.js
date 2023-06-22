import React from "react";
import styled from "styled-components";
import HeaderTitlewithIcon from "../headerTitlewithIcon";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineGlobal,
} from "react-icons/ai";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }
  @media (min-width: 768px) {
    display: none;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: black;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    top: 0;
    left: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    z-index: 6 !important;
    padding-top: 7em;

    li {
      color: #fff;
      a {
        color: white;
        display: flex;
        align-items: center;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
      }
    }
  }
`;

const LeftNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="/">
          Insight <AiOutlineDown size={22} style={{ marginLeft: 5 }} />
        </a>
      </li>

      <li>
        <a href="/">
          Services <AiOutlineDown size={22} style={{ marginLeft: 5 }} />
        </a>
      </li>
      <li>
        <a href="/">
          Industries <AiOutlineDown size={22} style={{ marginLeft: 5 }} />
        </a>
      </li>
      <li>
        <a href="/">
          Careers <AiOutlineDown size={22} style={{ marginLeft: 5 }} />
        </a>
      </li>
      <li>
        <a href="/">
          About <AiOutlineDown size={22} style={{ marginLeft: 5 }} />
        </a>
      </li>
      <li>
        <a href="/">
          <AiOutlineGlobal size={22} style={{ marginRight: 5 }} /> USA
          <AiOutlineDown size={22} style={{ marginLeft: 5 }} />
        </a>
      </li>
    </Ul>
  );
};

export default LeftNav;
