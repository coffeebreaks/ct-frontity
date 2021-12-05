import {
  UIButtonImg,
  SmallCap,
  MenuIcon,
  LinkHeading,
  MessageBlock,
  SmallButton,
  MenyHeading,
  MenuUi,
  UIButton,
  CompanyInfo,
  Email,
  Link,
  Logo,
  Links,
  MainHeader,
  MainWindow,
  MenuButton,
  MenuFooter,
  MobileMenu,
  PhoneNumber,
  SocialIcon,
  SocialLinks,
  SubMenu,
  SubMenuLink,
} from "./styledComponents";
import icon from "./logo.png";
import { useState } from "react";
import phone from "./phone.png";
import map from "./map.png";
import email from "./email.png";
import close from "./close.png";


const TopNavMin = (props) => {
  const [menuState, setMenuState] = useState(false);
  return (
    
      <MainHeader>
         <Logo src={props.logo} /> 
        <MenuButton onClick={() => setMenuState(true)}>
          ☰<SmallCap>Meny</SmallCap>
        </MenuButton>
        <MobileMenu show={menuState}>
          <MenuUi>
            <UIButtonImg src={close} onClick={() => setMenuState(false)} />
            <UIButtonImg src={phone} />
            <UIButtonImg src={map} />
            <UIButtonImg src={email} />
          </MenuUi>

          <MenyHeading> Meny</MenyHeading>
   

          <Links>
            <LinkHeading>Snabbåtkomst</LinkHeading>
            <Link href="#">
              
              <MenuIcon src={map} /> About our brand
            </Link>
            <Link href="#">
              <MenuIcon src={map} />
              Our cool stuff
            </Link>
            <Link href="#">
              <MenuIcon src={map} />
              Contact pros
            </Link>

            <LinkHeading>Produkter</LinkHeading>
            <Link href="#">
              <MenuIcon src={map} />
              Get cool stuff
            </Link>
            <Link href="#">
              <MenuIcon src={map} />
              Our news
            </Link>
            <Link href="#">
              <MenuIcon src={map} />
              Locations
            </Link>
          </Links>

          <MenuFooter>
            <CompanyInfo>
              <PhoneNumber href="tel:0046"> 076 880 56 56</PhoneNumber>
              <Email href="mailto:00@46.com"> info@coolcompy.com</Email>
            </CompanyInfo>

            <SocialLinks>
              <a href="#">
                
                <SocialIcon src={icon} />
              </a>
              <a href="#">
                <SocialIcon src={icon} />
              </a>
              <a href="#">
                <SocialIcon src={icon} />
              </a>
            </SocialLinks>
          </MenuFooter>
        </MobileMenu>
      </MainHeader>
    
  );
};

export default TopNavMin;
