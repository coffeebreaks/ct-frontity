import { styled } from "frontity"

const Dokument = ({ api }) => {



    console.log(api)


    const Wrapper = styled.div`
    background: white;
    color: black;
    `
    const Text = styled.div`
    padding: 2rem;
    max-width: 80ch;
    margin: 0 auto;
    h1 {
        @media(max-width: 800px){
            font-size: 20px;
        }
    }
    `
    const DocumentBlock = styled.div`
    padding: 2rem;
    margin: 0 auto;
    max-width:1000px;
    @media(max-width: 800px){
        justify-content:center;
        text-align: center;
    }
    `
    const Rubrik = styled.div``
    const DocumentWrapper = styled.div`
    display:flex;
    width:100%;
    flex-direction: row;
    flex-wrap: wrap;
    align-items:center;
    @media(max-width: 800px){
        justify-content:center;
        text-align: center;
    }
    `
    const DocumentImage = styled.img`
    max-width: 150px;
    height: auto;
    `
    const SingleDocument = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    max-width: 250px;
    margin:2rem;
    flex-flow: column;
    text-align:center;
    `
    return (
        <Wrapper>
            <Text dangerouslySetInnerHTML={{ __html: api.text }} />
            {api.dokument.map((x) =>
                <DocumentBlock>
                    <Rubrik>{x.rubrik}</Rubrik>
                    <DocumentWrapper>
                    {x.fil.map((x) =>
                            <a href={x.fil.url}>
                            <SingleDocument>
                                <DocumentImage src={x.bild} />
                                <p>{x.filnamn}</p>
                            </SingleDocument>
                            </a>
                    )}
                    </DocumentWrapper>
                    <hr />
                </DocumentBlock>
            )}
        </Wrapper>
    )
}

export default Dokument