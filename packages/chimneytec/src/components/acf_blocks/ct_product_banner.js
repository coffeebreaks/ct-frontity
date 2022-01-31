import {styled} from "frontity"

const CT_Product_Banner = ({api}) =>{

    const CT_ProduktBanner = styled.div`
    background: white;
    padding-top: 2rem;
    color: black;
    `

    const Flow = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    @media(max-width: 1170px ){
        flex-flow: column;
        align-items: center;
    }
    `

    const ProduktWrapper = styled.div`
    width: 260px;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: space-between;

    `

    const Text = styled.div`
    text-align: center;
    max-width: 80ch;
    margin: 0 auto;
    `

    const ProduktLogo = styled.img`
    max-width: 100%;
    height: auto;
    `

    const ProduktText = styled.div`
    text-align: center;
    min-height: 250px;
   

    `
    const ProduktButton = styled.a`
        color: #0066ff;
        border: 2px solid #0066ff;
        border-radius: 20px;
        font-weight:600;
        padding: 0.5rem;
        text-decoration: none;
        text-align: center;
    `

    const ProduktBild = styled.img``

    return (
        <CT_ProduktBanner>
        <Text dangerouslySetInnerHTML={{ __html: api.text }} />
        <Flow>
        {
        api.produkter.map((x,i)=> 
        <ProduktWrapper key={i}>
            <ProduktLogo src={x.produktlogo.url} alt={x.produktlogo.alt} width={x.produktlogo.width} height={x.produktlogo.height} /> 
            <ProduktText dangerouslySetInnerHTML={{__html: x.text}}/>
            <ProduktBild  src={x.produktbild.url} alt={x.produktbild.alt} width={x.produktbild.width} height={x.produktbild.height}  />
            <ProduktButton href={x.knapplank}>{x.knapptext}</ProduktButton>
        </ProduktWrapper>
        )}
        </Flow>
        
    </CT_ProduktBanner>
    )
} 

export default CT_Product_Banner