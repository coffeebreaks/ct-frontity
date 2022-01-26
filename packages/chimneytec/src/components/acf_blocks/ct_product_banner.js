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
   

    .blue{
        color: blue;
        font-weight: 900;
    }
    
    .red {
        color: red;
        font-weight: 900;
    }
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
        api.produkter.map((x)=> 
        <ProduktWrapper>
            <ProduktLogo src={x.produktlogo} alt={x.knapptext}/> 
            <ProduktText dangerouslySetInnerHTML={{__html: x.text}}/>
            <ProduktBild src={x.produktbild} alt={x.knapptext}/>
            <ProduktButton href={x.knapplank}>{x.knapptext}</ProduktButton>
        </ProduktWrapper>
        )}
        </Flow>
        
    </CT_ProduktBanner>
    )
} 

export default CT_Product_Banner