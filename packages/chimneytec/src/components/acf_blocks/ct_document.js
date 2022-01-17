import {styled} from "frontity"

const Dokument = ({api}) => {



    console.log(api)

    
    const Wrapper = styled.div`
    background: white;
    color: black;
    `
    const Text = styled.div`
    padding: 2rem;
    max-width: 80ch;
    margin: 0 auto;
    `
    const DocumentBlock = styled.div`
    padding: 2rem;
    `
    const Rubrik = styled.div``
    const DocumentWrapper = styled.div``
    const DocumentImage = styled.img``
    return (
        <Wrapper>
            <Text dangerouslySetInnerHTML={{__html: api.text}}/>
            {api.dokument.map((x)=>
            <DocumentBlock> 
            <Rubrik> {x.rubrik}</Rubrik>
            {x.fil.map((x)=>
            <DocumentWrapper>
            <a href={x.fil.link}>     
            <DocumentImage src={x.bild}/>
            {x.filnamn}
            </a>
            </DocumentWrapper>
            )}
            <hr/>
            </DocumentBlock>
            )}
        </Wrapper>
    )
}

export default Dokument