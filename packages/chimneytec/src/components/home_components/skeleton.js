import {styled, keyframes} from "frontity"


const Loading = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background:white; 
  z-index:9999;
  
  `

  const LoadingWrapper = styled.div`
  position: fixed;
  top: 0px;
    
  left: 0px;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  background:white; 
  z-index:9999;
  `

  const color =()=> keyframes`
  0%{
   transform: translateX(0px);
   opacity: 0;
  }

  24% {
    opacity: 1;
  }
  
50% {
  opacity: 1;
}

75% {
  opacity: 1;
}

  100% {
   transform: translateX(100%);
   opacity: 0;
  }
  `

  const SkeletonBox = styled.div`
  border: 1px solid #e5e5e5;
  width: ${(props)=> props.width};
  margin: 1rem auto;
  padding: 1rem;
  display:flex;

  justify-content: space-evenly;
  flex-wrap: wrap;
  box-shadow: 5px 8px 10px 0px #a1a1a12b;
  `

  const WhiteBox = (props)=> {

    return (
      <WhiteBoxStyle width={props.width} height={props.height}>

        <FadeElement/>
      </WhiteBoxStyle>
    )
  }
  
  const FadeElement = styled.div`
    height: 1000px;
    width: 400px;
    
    background: linear-gradient(90deg,transparent, #e7e7e799,transparent);
    animation: ${color} 1s ease-in-out infinite;
    animation-direction: forward;
  `

  const WhiteBoxStyle = styled.div`
  overflow: hidden;
  box-shadow: 5px 8px 10px 0px #a1a1a12b;
  width: auto;
  min-width: 200px;
  height: ${(props)=> props.height};
  width: ${(props)=> props.width};
  border-radius: 5px;
  border-radius: ${(props)=> props.borderRadius};
  color: #e9e9e9;
  flex-basis: 100%;
  
  margin: 0 auto;
  margin-bottom: 1rem;
  `

  const SkeletonWrapper = styled.div`
  border: 1px solid #e5e5e5;
  width: 90%;
  padding: 1rem;
  margin: 1rem auto;
  box-shadow: 5px 8px 10px 0px #a1a1a12b;
  `
  const LoadingSkeleton = () => {
    return (
      <LoadingWrapper>
        <SkeletonWrapper>
        <WhiteBox height="300px" width="100%" borderRadius="0px"></WhiteBox>
        <SkeletonBox>      
        <div>  
        <WhiteBox height="10px"  borderRadius="20px"></WhiteBox>
        <WhiteBox height="10px"  borderRadius="20px"></WhiteBox>
        </div>
        <div>
        <WhiteBox height="40px" borderRadius="20px"></WhiteBox>
        </div>
        </SkeletonBox>

        <WhiteBox height="30px" width="480px"></WhiteBox>
        <WhiteBox height="10px" width="280px"></WhiteBox>
        <WhiteBox height="10px" width="280px"></WhiteBox>
        <WhiteBox height="10px" width="280px"></WhiteBox>
        <WhiteBox height="10px" width="280px"></WhiteBox>
   
        </SkeletonWrapper>
      </LoadingWrapper>

    )
  }

  export default LoadingSkeleton