import { connect, styled } from "frontity";

const Post = ({state}) => {

    const data = state.source.get(state.router.link);
    const post = state.source[data.type][data.id];
    return (
        <>
        {post.content.rendered}
        </>

    )
} 
export default connect(Post)