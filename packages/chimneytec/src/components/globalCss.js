import {Global, css} from "frontity"
import Oswald from './fonts/Oswald-All.ttf';
import OpenSans from './fonts/OpenSans-All.ttf';


const GlobalCss = () => {
return (
<Global styles={css`
@font-face {
  font-family: 'Oswald';
  src: url(${Oswald}) format('truetype');       
}

@font-face {
  font-family: 'OpenSans';
  src: url(${OpenSans}) format('truetype');       
}
body {
    margin: 0;
    padding: 0;
    /* box-sizing: border-box; */
  
    font-family: "OpenSans";
    font-weight: 100;
    width: 100vw;
    min-width: 320px;
    overflow-x: hidden;
    background-color: rgb(65, 65, 65);
    color: whitesmoke;
}
html {
    font-family: OpenSans, Verdana, Arial, sans-serif;
}

.textBlock {
    background: black;
    width: 100%;
    height: 100vh;
    color: white;
    scroll-snap-align: start;
    display: flex;
}
.sectionLeft {
    background-color: lightgray;
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1.rubrik {
    font-family: "Oswald";
    color: black;
    text-align: center;
    margin: 0;
    padding: 0;
}
p.text {
    color: black;
    text-align: center;
    max-width: 320px;
}
a.knapp {
    background-color: black;
    padding: 2rem;
    text-transform: uppercase;
    color: white;
    border: none;
    font-size: 1.4rem;
    font-weight: 500;
    border-radius: 5px;
    margin: 2rem;
    text-decoration: none;
    font-weight: 300;   
}
.sectionRight {
    background: red;
    height: 100%;
    width: 50%;
    background-attachment: fixed !important;
    background-size: 81% !important;
    background-position: 531px 72px !important;
    background-repeat: no-repeat !important;
    /* background-position: 341px !important; */
}
// NAV
header.NavHeader {
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
}

div.MainNav {
  height: 80px;
  position: relative;
  z-index: 999;
  display: flex;
}
.NavItem {
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
  .NavItem:hover {
    border-bottom: 3px solid yellow;
    color: yellow;
  }
img.Logo {
  max-height: 60px;
}

div.SubMenu {
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
}

div.EmptyZone {
  width: 100%;
  height: 80px;
  /* background-color: red; */
  display: flex;
  align-items: center;
}
h2.MenuHeading {
  color: yellow;
  font-weight: 100;
  border-bottom: 1px solid yellow;
  padding-bottom: 1rem;
  font-size: 3rem;
}
div.SubMenuSections {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 50%;
}
div.SubMenuSection {
  display: flex;
  min-width: 200px;
  flex-direction: column;
}
h3.SubMenuTitle {
  font-weight: 300;
  margin: 0px;
  padding-bottom: 14px;
  margin-bottom: 14px;
  text-align: left;
  border-bottom: 1px solid yellow;
  color: yellow;
  text-transform: uppercase;
}
a.SubMenuLinks {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 100;
  margin-bottom: 1rem;
}
 a.SubMenuLinks:hover {
    color: #ffd600;
    border-bottom: none;
  }
`}
        />
)
}





export default GlobalCss  
