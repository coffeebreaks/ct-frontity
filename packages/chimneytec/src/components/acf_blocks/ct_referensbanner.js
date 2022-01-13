import {styled} from "frontity"

const CT_ReferensBanner = ({api , state}) => {
    const postKey = "allposts/"
    const posts = state.source.data[postKey].items

    console.log(posts)

    return (
        <>
        {posts.map((x)=> 

           x.categories.map((kat)=>
        kat === api.kategori
        ? 
        <p> {x.title.rendered} </p>

        
        : ""
        )

        )}

        </>
    )
} 

export default CT_ReferensBanner