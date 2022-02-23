import { connect, Global, css, libraries, Head } from "frontity";
import Link from "@frontity/components/link";
import { styled } from "frontity";
import { useState, useEffect } from "react";
import Switch from "@frontity/components/switch";
import Page from "./page.js";
import Post from "./post.js";

import Oswald from './Fonts/Oswald-All.ttf';
import OpenSans from './Fonts/OpenSans-All.ttf';
// import GlobalCss from "./globalCss";

import TopNav from "./Navigation/topNav/topNav";
import TopNavMid from "./Navigation/topNavMid/topNavMid";
import TopNavMin from "./Navigation/topNavMin/topNavMin";
import Footer from "./Footer"

import LoadingSkeleton from "./home_components/skeleton.js";

import {keyframes}  from "frontity"
import ReactGA from "react-ga";
const Root = ({ state }) => {


const [getAnalytics, setAnalytics] = useState()



  // Finnished loading
  useEffect(()=>{
    //get state from localStorage
    let localState = localStorage.getItem("analytics")

    setAnalytics(localState || "notSet")

    
  },[])
  
  //On state change
  useEffect(()=>{
    localStorage.setItem("analytics", getAnalytics)
 
    if (getAnalytics === "true"){
      ReactGA.initialize("UA-47786164-1")
      ReactGA.pageview(state.router.link)
      localStorage.setItem("analytics", "true")
      }
  
  },[getAnalytics])



  const data = state.source.get(state.router.link);
  const options = state.source.get("acf-settings");
  const mainMenu = options.acf.huvudmeny;
  const mobileMenu = options.acf.mobilmeny;
  const pageLogo = options.acf.logo;

  

const Body = styled.body`
  @font-face {
    font-display: swap; 
  font-family: 'Oswald';
  src: url(${Oswald}) format('truetype');      
  }
  @font-face {
    font-display: swap;    
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

  

  const Cookies = ()=> {
    
    const CookieBanner = styled.div`
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 200px;
    right: 0px;
    bottom: 0px;
    z-index: 9999;
    background-color: #000000db;
    color: white;
    padding-bottom: 1rem;
    p {
      padding: 1rem;
      text-align: center;
    }
    `

    const Button = styled.button`
      padding: 1rem;
      box-shadow: none;
      border: 1px solid white;
      min-width: 300px;
      background-color: ${ props => props.color};
      color: white;
      margin: .5rem;
      &:hover {
        background-color: blue;
      }
    `

    const Details = styled.details`
    display: flex;
    flex-flow: column;
    justify-content: center;
    a {
      color: white;
      text-align: center;
    }

    `

   
  
    return(
      
      <CookieBanner>
      <p>Vi använder cookies för att optimera vår webbsida.</p>
      <>
      <Button color={"green"} onClick={ ()=> setAnalytics("true") }>Godkänn Cookies </Button>
      <Button color={"#0000ff00"} onClick={ ()=> setAnalytics("false") }>Endast nödvändiga</Button>
      </>
      <Details>
    <summary>Mer information</summary>
    <strong>Cookies som används</strong>
    <a href="https://policies.google.com/technologies/cookies?hl=en-US">Google Analytics</a>
    </Details>
      </CookieBanner>
    )
  }

  
  return (    
   <div>
     
      <Head>
        <title>CHIMNEYTEC SKORSTENS- & VENTILATIONSTEKNIK AB</title>
        <html lang="sv" />
      </Head>
     <Global
          styles={css`
            body {
              margin: 0;
              
              @font-face {
                font-display: swap; 
                font-family: 'Oswald';
                src: url(${Oswald}) format('truetype');      
              }
              
              @font-face {
                font-display: swap;    
                font-family: 'OpenSans';
                src: url(${OpenSans}) format('truetype');   
              }
              font-family: "OpenSans";
            }
          `}
        />
      <Switch>
            <LoadingSkeleton when={data.isFetching} />
           
      </Switch>
    <div style={{ overflowX: "hidden",  minWidth: "320px"}}>
  
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
      {getAnalytics === "notSet" || getAnalytics === "undefined"?<Cookies/>:""}
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
    </div>
  );
};

export default connect(Root);
