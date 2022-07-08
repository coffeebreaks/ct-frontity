
import { styled } from "frontity";

const CT_Video = ({ api }) => {
  const text = api.rubrik
  const video_url = api.video
  console.log(api)


  const Video = styled.video `
    width: 100%;
    height: auto ;
    max-width: 800px;
    margin: 0 auto ;
  `

  const Wrapper = styled.div`
    background: linear-gradient(180deg, #0057ab 0%, #091320 100%);
    color: white;
    display: flex ;
    justify-content: center ;
    flex-flow: column ;
    align-items: center ;
  `

  const Text = styled.div`
    max-width: 800px ;
    margin-bottom: 5rem ;
    margin-left: 2rem;
    margin-right: 2rem;
  `

  return (
    <Wrapper>
      <h2> Se vår presentationsfilm</h2>
      <Video width="100%" height="auto" controls>
        <source src={video_url+ "#t=0.7"} type="video/mp4"/>
 
           Your browser does not support the video tag.
           
        </Video>


        <Text dangerouslySetInnerHTML={{__html: text}}/>

    </Wrapper>
  );
};

export default CT_Video;
