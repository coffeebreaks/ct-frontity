import { styled } from "frontity";

const themeDark = "#111";
const themeMiddle = "gray";
const themeLight = "#6f6f6f";
const themeAccent = "#044471";

export const MainHeader = styled.header`
  background-color: #1b4ea4;
  position: sticky;
  top: 0px;
  color: white;
  min-height: 40px;
  padding: 0 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: .5rem;
  z-index: 999;
`;

export const Logo = styled.img`
  max-height: 50px;
`;

export const SmallCap = styled.div`
  font-size: 10px;
  padding-bottom: 2px;
`;

export const MenuButton = styled.div`
      padding: 0.1rem;
    width: 50px;
    cursor: pointer;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 1rem;
    background-color: #1b4ea4;
    border-radius: 4px;
    /* margin: 2rem; */
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  &:hover {
    background-color: ${themeLight};
    color: ${themeAccent};
  }

  &:hover ${SmallCap} {
    color: ${themeAccent};
  }
`;

export const MenuUi = styled.div`
  display: flex;
  margin: 1rem;
  font-variant: small-caps;

  flex-direction: row-reverse;
`;

export const MenuIcon = styled.img`
  height: 15px;
  margin-right: 10px;
  opacity: 0.5;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 10px;
`;

export const LinkHeading = styled.h3`
  color: orange;
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 0px;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`;

export const SmallButton = styled.a`
  background-color: black;
  color: #d1d1d1;

  text-decoration: none;
  /* margin: 0 1rem; */
  border-radius: 2px;
  padding: 4px;
  margin-top: 8px;
  font-size: 12px;
`;

export const MobileMenu = styled.div`
  position: absolute;
  display: flex;
  z-index: 999;
  transition: .4s ease-in-out;
  flex-direction: column;
  background-color: ${themeDark};
  padding: 0 0rem;
  width: 320px;
  overflow-x: hidden;
  right: ${(props) => (props.show ? "0px" : "-500px")};
  top: 0px;
  height: 100vh;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    border: 1px solid ${themeLight};
    background: ${themeLight};
    cursor: pointer;
  }
&::-webkit-scrollbar-thumb {
    background: ${themeLight};
    cursor: pointer;
}
&::-webkit-scrollbar {
    width: 8px;
    cursor: pointer;
}

}
`;
export const UIButton = styled.div`
  transition: ease-in-out 0.3s;
  margin: 1rem;
  height: 20px;
  width: 10px;
  padding: 0.2rem;
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1.5rem;
  top: 1.5rem;
  align-items: center;
  font-size: 1rem;
  background-color: ${themeLight};
  text-transform: lowercase;
  border-radius: 50%;
  &:hover {
    background-color: ${themeAccent};
  }
`;

const middleWhite = "#d1d1d1";

export const MenyHeading = styled.h2`
  margin: 0 1rem;
  color: ${middleWhite};
`;

export const UIButtonImg = styled.img`
  margin: 0.6rem;
  width: 12px;
  padding: 0.1rem;

  opacity: 0.3;
  border: 1.2px solid #ffffff;
  padding: 0.2rem;
  cursor: pointer;
  align-self: flex-end;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 1.5rem;
  top: 1.5rem;
  align-items: center;
  font-size: 1rem;
  background-color: #14151b;
  text-transform: lowercase;
  border: 1px solid white;
  border-radius: 50%;
  &:hover {
    /* background-color: yellow; */
    filter: invert(1);
  }
`;

export const MessageBlock = styled.div`
  background-color: #d1d1d1;
  padding: 1rem 0;
  height: 300px;
  font-weight: 600;
  color: #111111;
  font-size: 13px;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;

  margin-top: 5px;
  width: 100%;
`;

export const Links = styled.div`
  margin: 0 2rem;
  display: flex;
  margin-bottom: 0rem;
  flex-direction: column;
`;

export const Link = styled.a`
  font-size: 0.9rem;
  display: flex;
  align-items: center;

  font-weight: 600;
  color: #e4e4e4;
  text-decoration: none;
  padding: 1rem;
  text-align: left;
  transition: 0.2s;
  border-bottom: 1px solid #1b1b1b;
  &:hover {
    color: white;
    border-bottom: 2px solid darkgray;
    margin-bottom: -1px;
  }
`;

export const MenuFooter = styled.div`
  background-color: #111;
  margin-top: auto;
  color: white;
`;
export const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin: 0.5rem;
`;
export const PhoneNumber = styled.a`
  margin-bottom: 1rem;
  color: #d1d1d1;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 100;
`;
export const Email = styled.a`
  margin-bottom: 1rem;
  color: #d1d1d1;
  text-decoration: none;
`;
export const SocialLinks = styled.div`
  display: flex;
  margin: 1rem;
  justify-content: space-evenly;
`;
export const SocialIcon = styled.img`
  height: 30px;
  background-color: white;
  padding: 1px;
  opacity: 0.3;
  border-radius: 50%;
  width: auto;
`;

export const SubMenu = styled.div`
  display: flex;
  width: fit-content;
  margin-left: auto;
  text-decoration: none;
  color: ${themeMiddle};
  flex-direction: column;
`;
export const SubMenuLink = styled.a`
  text-align: right;
  margin-right: 1rem;
  color: ${themeMiddle};
  font-size: 1rem;
  text-decoration: none;
  margin-top: 1rem;
  &:hover {
    color: lightblue;
    border-bottom: 2px solid ${themeMiddle};
    margin-bottom: -2px;
  }
`;
