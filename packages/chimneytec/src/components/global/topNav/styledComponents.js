import {styled} from "frontity"

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

const SubMenuLinks = styled.div`
display: flex;
flex-direction: column;
`

const PopOut = styled.div`
background: black;
display: none;
flex-direction: column;
justify-content: center; 
align-items: center;
position: absolute;
padding :2rem ;
top: 80px;
`
const HoverElement = styled.div`
display: flex;
justify-content: center;

&:hover ${PopOut}{
    display: flex;
}

` 

export {SubMenu, SubMenuLinks, PopOut, HoverElement}