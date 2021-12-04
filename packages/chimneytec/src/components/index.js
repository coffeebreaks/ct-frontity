import { connect, Global, libraries } from "frontity";
import Link from "@frontity/components/link";
import {styled} from "frontity"
import {useState} from "react"
import Switch from "@frontity/components/switch";
// import Link from "@frontity/html2react/processors/link";
import Post from "./posts.js";
// import "./style.css";
// import List from "./list";
import GlobalCss from "./global/globalCss";
// import react, { useState, useEffect } from "react";
// import styled, { css } from "styled-components";
import TopNav from "./global/topNav/topNav";
import TopNavResp from "./global/topNavResp/topNavResp";

const Root = ({ state }) => {

const [myState, setMyState] = useState("init")

  const data = state.source.get(state.router.link);
  
    const options = state.source.get("acf-settings");
    const mainMenu = options.acf.huvudmeny;
    const pageLogo = options.acf.logo

    const Text = styled.div`
      background-color: red;
      width: 40px;
      height: 40px;
      @media(max-width: 500px){
        background-color: green;
        background: ${(props) => setMyState("new!")};
      }
    `

    const DesktopMenu = styled.div`
      display: block;
      @media(max-width: 1452px) {
          display: none;
      }
    `
  
    const MobileMenu = styled.div`
      display: block;
      @media(min-width: 1452px) {
          display: none;
      }
    `
  return (
    <div>
        

       <GlobalCss /> 
       <DesktopMenu> 
        <TopNav menu={mainMenu} logo={pageLogo} />
       </DesktopMenu>
       
       <MobileMenu>
       <TopNavResp menu={mainMenu} logo={pageLogo} /> 
        </MobileMenu>
      <main>
    
        <div>
        
          <Switch>
            {/* <List when={data.isArchive}>This is a list</List> */}
            <Post when={data.isPost} />
            <Post when={data.isPage} />
            <div when={data.isError}>404 not found</div>
          </Switch>
        </div>
      </main>
    </div>
  );
};

export default connect(Root);