import { connect, Global, libraries } from "frontity";
import Link from "@frontity/components/link";
import { styled } from "frontity";
import { useState } from "react";
import Switch from "@frontity/components/switch";
import Page from "./page.js";
import Post from "./post.js";
import GlobalCss from "./globalCss";
import TopNav from "./Navigation/topNav/topNav";
import TopNavMid from "./Navigation/topNavMid/topNavMid";
import TopNavMin from "./Navigation/topNavMin/topNavMin";
import Footer from "./Footer"
import Oswald from './fonts/Oswald-All.ttf';
import OpenSans from './fonts/OpenSans-All.ttf';

const Root = ({ state }) => {
  const [myState, setMyState] = useState("init");

  const data = state.source.get(state.router.link);
  const options = state.source.get("acf-settings");
  const mainMenu = options.acf.huvudmeny;
  const mobileMenu = options.acf.mobilmeny;
  const pageLogo = options.acf.logo;

  

const Body = styled.body`
  @font-face {
  font-family: 'Oswald';
  src: url(${Oswald}) format('truetype');       
  }
  @font-face {
    font-family: 'OpenSans';
    src: url(${OpenSans}) format('truetype');       
  }

  font-family: "OpenSans";

  margin: 0;
  padding: 0;
  font-weight: 100;
  width: 100vw;
  min-width: 320px;
  overflow-x: hidden;
  color: whitesmoke;
  `

  const Text = styled.div`
    background-color: red;
    width: 40px;
    height: 40px;
    @media (max-width: 500px) {
      background-color: green;
      background: ${(props) => setMyState("new!")};
    }
  `;

  const Desktop = styled.div`
    display: block;
    @media (max-width: 1451px) {
      display: none;
    }
  `;

  const Tablet = styled.div`
    display: block;
    @media (min-width: 1452px) {
      display: none;
    }
    @media (max-width: 1000px) {
      display: none;
    }
  `;

  const Mobile = styled.div`
    display: block;
    position: sticky;
    z-index: 999;
    top: 0px;
    @media (min-width: 1001px) {
      display: none;
    }
  `;

  const Loading = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background:black;
  z-index:9999;
  
  `

  
  return (    
    <Body>
      <Switch>
            <Loading when={data.isFetching} />
      </Switch>
    <div style={{width: "100vw", overflowX: "hidden",  minWidth: "320px"}}>
  
      {/* <GlobalCss /> */}
      <Desktop>
        <TopNav menu={mainMenu} logo={pageLogo} />
      </Desktop>

      <Tablet>
        <TopNavMid menu={mainMenu} logo={pageLogo} />
      </Tablet>

      <Mobile>
        <TopNavMin menu={mobileMenu} logo={pageLogo} />
      </Mobile>


      <main style={{position: "relative", zIndex: "10"}}>
        <div>
          <Switch>
            {/* <List when={data.isArchive}>This is a list</List>  */}
          
            <Post when={data.isPost} />
            <Page when={data.isPage} />
            <div when={data.isError}>404 not found</div>
          </Switch>
        </div>
        <Footer/>
      </main>
    </div>
    </Body>
  );
};

export default connect(Root);
