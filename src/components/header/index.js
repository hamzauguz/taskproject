import React from "react";
import "./Styles.header.css";
import {
  AiOutlineDown,
  AiOutlineSearch,
  AiOutlineGlobal,
} from "react-icons/ai";
import HeaderTitlewithIcon from "../headerTitlewithIcon";
import Burger from "../Nav/Burger";

const Header = () => {
  return (
    <div>
      <div className="headerMain">
        <div className="headerTitle">
          <HeaderTitlewithIcon
            title={"Insights"}
            icon={<AiOutlineDown style={{ marginLeft: 10 }} size={22} />}
          />
          <HeaderTitlewithIcon
            title={"Services"}
            icon={<AiOutlineDown style={{ marginLeft: 10 }} size={22} />}
          />
          <HeaderTitlewithIcon
            title={"Industries"}
            icon={<AiOutlineDown style={{ marginLeft: 10 }} size={22} />}
          />
          <HeaderTitlewithIcon
            title={"Careers"}
            icon={<AiOutlineDown style={{ marginLeft: 10 }} size={22} />}
          />
          <HeaderTitlewithIcon
            title={"About"}
            icon={<AiOutlineDown style={{ marginLeft: 10 }} size={22} />}
          />
        </div>
        <div className="rightPlace">
          <HeaderTitlewithIcon
            firstIcon={<AiOutlineGlobal size={22} style={{ marginRight: 5 }} />}
            title={"USA"}
            icon={<AiOutlineDown style={{ marginLeft: 5 }} size={22} />}
          />
        </div>
      </div>
      <Burger />
    </div>
  );
};

export default Header;
