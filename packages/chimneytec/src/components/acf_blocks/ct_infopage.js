import {styled} from "frontity"

const CT_InfoPage = ({api}) => {

    const Wrapper = styled.div`
        background: white;
        color: black;    
    `
    const Header = styled.div`
        background-image: url(${(props)=> props.image});
        background-size: cover;
        background-position: center;
        height: 400px;
        @media(max-width: 800px){
            height: 200px;
        }
        width: 100%;
        display: flex;
        align-items:center;
        justify-content:center;
        h1 {
            max-width: 30ch;
            padding: 20px;
            @media(max-width: 800px){
                font-size: 20px;
            }
            text-align:center;
            color: white;
            text-shadow: 1px 1px 8px black;
        }
      
        `
    const Content = styled.div`
        padding: 2rem;
        margin: 0 auto;
        max-width: 80ch;
        img {
            max-width: 100%;
            height: auto;
        }
        ul {
            padding: 0px;
            li {
                padding-left: 20px;
            }
        }
    `

    return (
        <Wrapper>
        <Header image={api.bild}>
        <h1>{api.sidrubrik}</h1>
        </Header>
        <Content dangerouslySetInnerHTML={{__html: api.text}}/>
        
        </Wrapper>
    )
}
export default CT_InfoPage