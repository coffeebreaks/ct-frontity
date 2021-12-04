import {ImageWrapper, Text} from "./styledComponents"

const CT_Hero = ({api}) => {
    console.log("-->",api)
    return (
        <>
        <ImageWrapper image={api.bild}>
      
        <Text  dangerouslySetInnerHTML={{ __html:  api.text }}></Text>
        </ImageWrapper>
        </>
    )

} 

export default CT_Hero