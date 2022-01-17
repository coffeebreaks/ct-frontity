import {styled, connect} from "frontity"
const Footer = ({state})=> {

    const key = "acf-settings/"
    const footerData = state.source.data[key].acf
    
    const FooterWrapper = styled.div`
    background: #174ea1;
        display: flex;
        flex-flow: row;
        padding: 2rem;
        justify-content: space-between;
        @media(max-width: 800px){
            flex-flow: column
        }
        a {
            color: white;
        }
        p {
            margin: 0;
        }

    `

    const LeftSide = styled.div`
        display: flex;
        flex-flow: column;
        color: white;
        h2 {
            max-width: 30ch;
        }
        `
    
    const RightSide = styled.div`
        display: flex;
        flex-flow: column;
        @media(max-width: 800px){
            jusify-content:center;
        }
    `

    const Logo = styled.img`
    height: auto;
    margin: 1rem;
    max-width: 150px;
    `
    const Social = styled.img`
    height: auto;
    margin: 1rem 0;
    max-width: 140px;
    `
    
    return (
        <FooterWrapper>
        
        <LeftSide>
            <h2>{footerData.foretagsnamn} </h2>
            <p>{footerData.adress}</p>
            <p>{footerData.adress2}</p>
            <p>{footerData.telefon}</p>
            <a href={"mailto:" + footerData.epostadress}>{footerData.epostadress} | Kontakta oss → </a>
            <Social src={footerData.linkedin_logo}/>
        </LeftSide>

        <RightSide>
            {footerData.certifikat?.map((x)=>
            <Logo src={x.logo}/>
            )}
        </RightSide>

        </FooterWrapper>

    )
}

export default connect(Footer);