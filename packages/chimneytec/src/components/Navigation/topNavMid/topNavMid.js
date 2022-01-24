import {styled} from "frontity";
import { useState } from "react";

import Link from "@frontity/components/link";
import {
  Header,
  TheVoid,
  Logo,
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
}
  `

  return (
    <Header>
      <TheVoid onMouseOver={() => subMenu(false)}>
        <Logo src={props.logo} />
      </TheVoid>

      <MainNavigation>
        {props.menu.map((x) => (
          <>
            <NavItem
              key={x.title}
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
          </>
        ))}

        {/* <SubMenu
          menuState={showSubMenu}
          onMouseLeave={() => subMenu(false)}
          onClick={() => subMenu(false)}
        >
          {props.menu
            .filter((x) => x.title === showSubMenu)
            .map((mainMenu) => (
              <>
                <h2 className="MenuHeading">{mainMenu?.subMenuTitle}</h2>
                <div className="SubMenuSections">
                  {mainMenu.subMenus?.map((subMenu) => (
                    <div className="subMenuSection">
                      <h3 className="SubMenuTitle">{subMenu.title}</h3>
                      {subMenu.links.map((link) => (
                         <Link className="SubMenuLinks"link={link.href}>{link.title}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </>
            ))}
        </SubMenu> */}
      </MainNavigation>
    </Header>
  );
};

export default TopNavMid;
