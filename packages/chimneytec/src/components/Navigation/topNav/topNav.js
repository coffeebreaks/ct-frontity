import {styled} from "frontity";
import { useState } from "react";
import Link from "@frontity/components/link";

const TopNav = (props) => {
  
  const [showSubMenu, subMenu] = useState(false);

  const SubMenu = styled.div`
    transition: 0.5s;
    top: 80px;
    padding: 0px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => (props.menuState ? "#000000d9" : "#00000000")};
    height: ${(props) => (props.menuState ? "100%" : "0px")};
    &:hover {
    }
`;

const PopOut = styled.div`
background: black;
display: none;
-webkit-flex-direction: column;
-ms-flex-direction: column;
flex-direction: column;
-webkit-box-pack: center;
-ms-flex-pack: center;
-webkit-justify-content: center;
justify-content: center;
-webkit-align-items: center;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
position: absolute;
padding: 2rem;
top: 80px;
  a {
    color: white;
    -webkit-text-decoration: none;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 100;
    margin-bottom: 1rem; 
  }
`

const HoverElement = styled.div`
display: flex;
justify-content: center;
flex-flow: row;
&:hover ${PopOut}{
    display: flex;
}


` 

const SubMenuLinks = styled(Link)`
display: flex;
flex-direction: column;
`

const NavHeader = styled.div`
background-color: #1b4ea4;
position: sticky;
top: 0px;
color: white;
min-height: 80px;
padding: 0 20px;
z-index: 999;
display: flex;
align-items: center;
justify-content: space-between;
`

const MainNav = styled.div`
  height: 80px;
  position: relative;
  z-index: 999;
  display: flex;
margin: 0px 20px;
`

const EmptyZone = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
 
`

const Logo = styled.img`
  
`

const NavItem = styled(Link)`
/* padding: 0px 0px; */
color: white;
height: 100%;
text-decoration:none;
z-index: 999;
margin: 0 .5rem;
display: inline-flex;
align-items: center;
cursor: pointer;
justify-content: center;
position: relative;
min-width: 100px;

&:hover {
  border-bottom: 3px solid yellow;
  color: yellow;
}

`
const SubMenuLink = styled(Link)`
color: white;
text-decoration: none;
font-size: 1.2rem;
font-weight: 100;
margin-bottom: 1rem;
`
console.log("props menu", props.menu)
  return (
    <NavHeader>

      <EmptyZone onMouseOver={() => subMenu(false)}>

        <a href="/"><Logo src={props.logo.url} alt={props.logo.alt} width={props.logo.width * 0.6} height={props.logo.height * 0.6}/></a>
      </EmptyZone>

      <MainNav>
       
        {props.menu.map((x,i) => (
         
            <HoverElement key={i}>
              <NavItem key={x.title} link={x.href}  onMouseOver={() => x.subMenus ? subMenu(x.title) : subMenu(false)}>
                {x.title}
                {x.subMenus !== false ? (<span style={{ fontSize: "12px", marginLeft: "5px" }}> ▽ </span>) : ("")}
              </NavItem>
                {x.isSubMenu? 
              <PopOut>
                {x.subMenus[0].links.map((link,i ) => 
                    <SubMenuLinks key={i} link={link.href}>{link.title}</SubMenuLinks>
                  )}
              </PopOut> 
              :""}
          </HoverElement>
        ))}

       
      </MainNav>
    </NavHeader>
  );
};

export default TopNav;