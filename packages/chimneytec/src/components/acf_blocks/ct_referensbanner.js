import {styled} from "frontity"

const CT_ReferensBanner = ({api , state}) => {
    const postKey = "allposts/"
    const posts = state.source.data[postKey].items
    const data = state.source.get(state.router.link);
    const coverImage = state.source.attachment

    const CaseWrapper = styled.div`
        background: white;
        color: black;
        display: flex; 
        flex-flow: column;
        justify-content: center;
        align-items:center;
       

    `

    const Row = styled.div`
        display:flex;
        flex-flow: row;
        color: black;
        justify-content: center;
        align-items: center;
        flex-wrap; wrap;
        padding: 2rem 0;
        @media(max-width: 800px){
            flex-flow: column;
        }
    `

    const Case = styled.div`
        background-color: gray;
        background-image: url(${(props => props.background)});
        background-size: cover;
        background-position:center;
        background-repeat: no-repeat;
        width: 230px;
        height: 300px;
        margin: 0 20px;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
       

        a {
            background-color: #0066ffb8;
            padding: .4rem;
            font-size: 15px;
            border-radius: 23px;
            border: 2px solid #ffffff;
            color: #ffffff;
            width: fit-content;
            font-weight: 600;
            text-decoration: none;
        }

        h3 {
            margin-bottom: 1rem;
        }

        .text-background {
            background: white;
            color: black;
            opacity: 0.8;
            padding: 1rem 1rem;
        }
    `

   

    return (
        <CaseWrapper>
            <h2>Kundcase</h2>
            <Row>
        {posts.map((x)=> 

           x.categories.map((kat, i)=>
        kat === api.kategori
        
        ? 
        <Case key={i} lazy background={x.acf.bild}>
            {console.log(x)}
            <div className="text-background">
            <h3> {x.title.rendered} </h3>
            <a href={x.link}>Läs kundcase här</a>
            </div>
        </Case>
        
        : ""
        )

        )}
            </Row>
        </CaseWrapper>
    )
} 

export default CT_ReferensBanner