import React from "react"
import { connect } from "frontity"

import styled from 'frontity'


const Post = ({ state }) => {

    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const acfTitle = Object.keys(post.acf)[0]


  return (
<div>
      {post.acf[acfTitle].map(x =>
      <> 
      {/* <Switch> */}
        {/* <Order when={x.acf_fc_layout === "order_page"} api={x} /> 
        <Textbox when={x.acf_fc_layout === "fullpage_textbox"} api={x} /> 
        <PortfolioBlock when={x.acf_fc_layout === "fullpage_portfolio"} api={x} />  */}
      {/* </Switch> */}
        <p>{x.acf_fc_layout}</p>
        <p>{x.text} </p>  
      </> 
        )}
      {/* <h2>{post.title.rendered}</h2> */}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
}
export default connect(Post)
