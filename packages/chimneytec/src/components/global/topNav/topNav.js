import styled from "frontity";
import { useState } from "react";
 import { SubMenu } from "./styledComponents";
import Link from "@frontity/components/link";
import {SubMenuLinks, PopOut, HoverElement} from "./styledComponents"

const TopNav = (props) => {
  
  const [showSubMenu, subMenu] = useState(false);

  return (
    <header className="NavHeader">

      <div className="EmptyZone" onMouseOver={() => subMenu(false)}>
        <img className="Logo" src={props.logo} />
      </div>

      <div className="MainNav">
       
        {props.menu.map((x) => (
            <HoverElement>
            
            <Link key={x.title} link={x.href} className="NavItem" onMouseOver={() => x.subMenus ? subMenu(x.title) : subMenu(false)}>
              {x.title}
              {x.subMenus ? (<span style={{ fontSize: "12px", marginLeft: "5px" }}> ▽ </span>) : ("")}
            
            </Link>

              {x.isSubMenu? 
            <PopOut>
              {x.subMenus[0].links.map(link => 
                   <Link className="SubMenuLinks" link={link.href}>{link.title}</Link>
                )}
                
        
            </PopOut> 
            :""}
                    
          </HoverElement>
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
                
                <div className="SubMenuSections">
                  {mainMenu.subMenus?.map((subMenu) => (
                    <SubMenuLinks>
                      {subMenu.links.map((link) => (
                         <Link className="SubMenuLinks"link={link.href}>{link.title}</Link>
                      ))}
                    </SubMenuLinks>
                  ))}
                </div>
              </>
            ))}
        </SubMenu> */}
       
      </div>
    </header>
  );
};

export default TopNav;