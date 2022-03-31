import {styled, connect} from "frontity"
const Footer = ({state})=> {

    const key = "acf-settings/"
    const footerData = state.source.data[key].acf
    
    const FooterWrapper = styled.div`
    background: #174ea1;
    font-family: "Oswald";
    font-family: "OpenSans";
        display: flex;
        flex-flow: row;
        padding: 2rem;
        justify-content: space-between;
        @media(max-width: 800px){
            flex-flow: column;
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
            justify-content:center;
            align-items:center;
            }
    `

    const Logo = styled.img`
    height: auto;
    margin: 1rem;
    min-width: 150px;
    max-width: 150px;
    `
    const Social = styled.img`
    height: auto;
    margin: 1rem 0;
    max-width: 140px;
    `

    const FooterText = styled.div`

    padding: 1rem ;
    p {
        color: #a7c1e9;
    margin-bottom: 1rem;
    max-width: 52ch;
    }
    a {
        color: white;
    }
    `

    return (
        <FooterWrapper>
        
        <LeftSide>
            <h2>{footerData.foretagsnamn} </h2>
            <p>{footerData.adress}</p>
            <p>{footerData.adress2}</p>
            <p>{footerData.telefon}</p>
            <a href={"mailto:" + footerData.epostadress}>{footerData.epostadress} | Kontakta oss → </a>
         
            <a href={footerData.gdpr}>Integritetspolicy</a> 
            <Social src={footerData.linkedin_logo.url} alt={footerData.linkedin_logo.alt} width={footerData.linkedin_logo.width} height={footerData.linkedin_logo.height}/>
        </LeftSide>

        <>
        {console.log(footerData.footerText)}
        <FooterText dangerouslySetInnerHTML={{__html: footerData.footertext}} /> 
    
        </>

        <RightSide>
            {footerData.certifikat?.map((x,i)=>
            <Logo key={i} src={x.logo.url} alt={x.logo.alt} width={x.logo.width} height={x.logo.height}/>
            )}
        </RightSide>

        </FooterWrapper>

    )
}

export default connect(Footer);