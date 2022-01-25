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
import Switch from "@frontity/components/switch";


const TopNavMin = ({logo, menu}) => {
  const [menuState, setMenuState] = useState(false);
  return (
    
    <MainHeader>
        {console.log("...",menu)}
         <a href="/"><Logo src={logo}/></a> 
        <MenuButton onClick={() => setMenuState(true)}>
          ☰<SmallCap>Meny</SmallCap>
        </MenuButton>
        <MobileMenu show={menuState}>
          <MenuUi>
            <UIButtonImg src={close} onClick={() => setMenuState(false)} />
            {/* <UIButtonImg src={phone} />
            <UIButtonImg src={map} />
            <UIButtonImg src={email} /> */}
          </MenuUi>

          <MenyHeading> Meny</MenyHeading>
         
          <Links>
          {
          menu.map((x)=>
          x.acf_fc_layout === "menytitel"? <LinkHeading> {x.titel} </LinkHeading>:
          x.acf_fc_layout === "menyrad"? <Link href={x.lank}> {x.titel} </Link>:""
          )} 
            
          </Links>

          <MenuFooter>
            {/* <CompanyInfo>
              <PhoneNumber href="tel:0046"> 076 880 56 56</PhoneNumber>
              <Email href="mailto:00@46.com"> info@coolcompy.com</Email>
            </CompanyInfo> */}

            {/* <SocialLinks>
              <a href="#">
                
                <SocialIcon src={icon} />
              </a>
              <a href="#">
                <SocialIcon src={icon} />
              </a>
              <a href="#">
                <SocialIcon src={icon} />
              </a>
            </SocialLinks> */}
          </MenuFooter>
        </MobileMenu>
      </MainHeader>
    
  );
};

export default TopNavMin;
