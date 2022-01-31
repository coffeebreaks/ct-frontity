import {styled} from "frontity";
import { useState } from "react";

import Link from "@frontity/components/link";
import {
  Header,
  TheVoid,

  MainNavigation,
  SubMenu,
} from "./styledComponents";

const TopNavMid = (props) => {
  const [showSubMenu, subMenu] = useState(false);

  const NavItem = styled(Link)`
  /* margin: 0px 20px; */
  padding: 0px 0px;
  color: white;
  height: 100%;
  text-decoration:none;
  z-index: 999;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  position: relative;
  min-width: 100px;

  `
  const Logo = styled.img`
  max-height: 40px;
  width: auto;
  `



  return (
    <Header>
      <TheVoid onMouseOver={() => subMenu(false)}>
      <a href="/"><Logo src={props.logo.url} alt={props.logo.alt} width={props.logo.width} height={props.logo.height} /></a>
      </TheVoid>

      <MainNavigation>
        {props.menu.map((x,i) => (
          <div key={i}>
            <NavItem
              key={i}
              link={x.href}
              className=""
              onMouseOver={() =>
                x.subMenus ? subMenu(x.title) : subMenu(false)
              }
            >
              {x.title}{" "}
              {x.subMenus ? (
                <span style={{ fontSize: "12px", marginLeft: "5px" }}> ▽ </span>
              ) : (
                ""
              )}
            </NavItem>
          </div>
        ))}

      
      </MainNavigation>
    </Header>
  );
};

export default TopNavMid;
