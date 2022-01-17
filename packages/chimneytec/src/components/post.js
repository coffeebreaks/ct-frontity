import { connect, styled } from "frontity";

const Post = ({state}) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    console.log(post)
    const PostWrapper = styled.div`
    background: white;
    `


    const TheContent = styled.div`
    background: white;
    color: black;
    min-height: 300px;
    max-width: 1000px;
    margin: 0 auto;
    font-size: 18px;
    line-height: 1.5;
    `

    const ImageWrapper = styled.div`
        background-image: url(${(props)=> props.image});
        background-size: cover;
        background-repeat: no-repeat;
        height: 300px;
        display:flex;
        justify-content: center;
        align-items:center;
        widht: 100%;
        `

    const Heading = styled.h1`
        text-align:center;
        color: white;    
        text-shadow: 1px 1px 8px black;
    `

    return (
        <PostWrapper>
        <ImageWrapper image={post.fimg_url}>
            <Heading> {post.title.rendered}</Heading>
        </ImageWrapper>
         <TheContent dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      
     
        </PostWrapper>

    )
} 
export default connect(Post)