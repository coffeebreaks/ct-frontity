import {styled} from "frontity"
import ContactForm from "./contactForm"
import Link from "@frontity/components/link";

const CT_Productpage =({api})=>{
    
    const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    @media(max-width:800px){


        display:flex;
        flex-flow:column;
        padding: 0 1rem ;
        
    }
    `

    const Logo = styled.img`
    height: auto;
    width: 340px;
    margin: 1rem 0;
    @media(max-width:800px){
        height: auto;
    width: 280px;
    }
    `
    const Product_img = styled.img`
    height: auto;
    width: 240px;
    box-shadow: 1px 1px 9px 0px #afafaf;
    padding: 2rem 15rem;
    background: linear-gradient(355deg, #efefef, transparent);
     @media(max-width:800px){


        
        padding:1rem;
        margin:0 auto;
        height: auto;
        width:200px;
    }
    `
    const Text = styled.div`
        color: black;
        max-width: 80ch;
    `
    const Flow = styled.div`
        display: flex;
        flex-flow: column;
        justify-content: center;
`

    const FileWrapper = styled.div`
    color: black;
    background: #e9e9e9;
    padding: 20px;
    grid-column: 2;
    grid-row: 1 / 3;
    width: 350px;
        a {
            display:block;
        }

        @media(max-width:800px){
            width: initial;
            padding: 1rem;
            margin: 0;
        }
    `

    const File = styled.a`
    display: flex;
    flex-flow: row;
    width: max-content;
    text-decoration: none;
    color: black;
    margin: 1rem 0;
    &:hover {
        color:blue;
    }
   @media(max-width:800px){
       margin: 0;
   }
    `

    const PageLink = styled(Link)`
    display: flex;
    flex-flow: row;
    width: max-content;
    text-decoration: none;
    color: black;
    margin: 1rem 0;
    &:hover {
        color:blue;
    }
    @media(max-width:800px){
        margin: 0;
    }
    `
    const FileImage = styled.img`
    
    `
    const LeftCol = styled.div`
    
    `
    const Outer = styled.div`
    margin: 0 auto;
    `

    const FormWrapper = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    `

    return(
        <Wrapper>
          
            <Outer>
            <Flow>
            <Logo src={api.logga}/>
            <Product_img src={api.produktbild}/>
            </Flow>

            <Text dangerouslySetInnerHTML={{__html: api.produkttext}}/>
            </Outer>

            {api.dokument?
            <FileWrapper>
                <h4> Våra andra produkter</h4>
                {console.log(api)}
                {api.lankar.map((x)=>
                <PageLink link={x.lank}>{x.lanktext}</PageLink>
                )}             
                <h4>Relaterade dokument</h4>
                {api.dokument.map((x)=>
                <File href={x.fil}>📄{x.namn}</File> 
                )}
            </FileWrapper>
            :""
        }
        <FormWrapper>
        <ContactForm/>
        </FormWrapper>

        </Wrapper>
    )
}

export default CT_Productpage