import {styled} from "frontity"

const Header = styled.header`
  background-color: #1b4ea4;
  position: sticky;
  top: 0px;
  overflow: hidden;
  color: white;
  min-height: 40px;
  padding: 0 20px;
  z-index: 999;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const TheVoid = styled.div `
 width: 100%;
  height: 40px;
  /* background-color: red; */
  display: flex;
  align-items: center;
`

const Logo = styled.img`
    max-height: 30px;
`

const MainNavigation = styled.nav`
  height: 40px;
  position: relative;
  z-index: 999;
  display: flex;
`

const SubMenu = styled.div`
  transition: 0.5s;
  width: calc(100vw - 15px);
  top: 80px;
  padding: 0px;
  left: 0px;
  position: fixed;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.menuState ? "#000000d9" : "#00000000")};
  height: ${(props) => (props.menuState ? "100%" : "0px")};
  max-height: 600px;
  left: 0px;
  &:hover {
  }
`;

export {Header, TheVoid, Logo, MainNavigation, SubMenu} 