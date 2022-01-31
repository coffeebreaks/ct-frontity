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
import {styled} from "frontity"
import email from "./email.png";
import close from "./close.png";
import Switch from "@frontity/components/switch";


const TopNavMin = ({logo, menu}) => {

  const [menuState, setMenuState] = useState(false);

  const Logo = styled.img`
  max-height: 40px;
  width: auto;
  `

  return (
    
    <MainHeader>
    
        <a href="/"><Logo src={logo.url} alt={logo.alt} width={logo.width} height={logo.height} /></a>
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
          menu.map((x,i)=>
          x.acf_fc_layout === "menytitel"? <LinkHeading key={i}> {x.titel} </LinkHeading>:
          x.acf_fc_layout === "menyrad"? <Link key={i} href={x.lank}> {x.titel} </Link>:""
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
