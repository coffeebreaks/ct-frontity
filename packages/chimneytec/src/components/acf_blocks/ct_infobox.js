import {styled} from "frontity";

const CT_InfoBox = ({ api }) => {

  const Wrapper = styled.div`
    display: flex;
    flex-flow: column;
    background-color: white;
    color: black;
    background-image: url('${(props)=> props.background}');
  `;

  const Rubrik = styled.h2`
    text-align: center;
  `;

  const Flow = styled.div`
    display: flex;
    flex-flow: row;
    justify-content: center;
    @media(max-width: 1000px) {
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }
  `;

  const Box = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    max-width: 300px;
    padding: 2rem;
    @media(max-width: 1000px){
      padding: 0 2rem ;
    }
  `;

  const BoxRubrik = styled.h3`
    text-align: left;
    margin: 0;
    padding: 0;
  `;

  const BoxText = styled.p`
    text-align: left;
  `;
  return (
    <Wrapper background={api.bakgrund}>
      <Rubrik>{api.rubrik}</Rubrik>
      <Flow>
        {api.rutor.map((x) => 
          <Box>
            <BoxRubrik>{x.rubrik}</BoxRubrik>
            <BoxText>{x.text}</BoxText>
          </Box>
        )}
      </Flow>
    </Wrapper>
  );
};

export default CT_InfoBox
