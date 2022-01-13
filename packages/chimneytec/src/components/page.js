import React from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import CT_Hero from "./acf_blocks/ct_hero";
import CT_Product_Banner from "./acf_blocks/ct_product_banner";
import CT_InfoBox from "./acf_blocks/ct_infobox";
import styled from "frontity";
import CT_ReferensBanner from "./acf_blocks/ct_referensbanner";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const acfTitle = Object.keys(post.acf)[0];

  return (
    <div>
      {post.acf[acfTitle].map((x) => (
        <>
          <Switch>
            <CT_Hero when={x.acf_fc_layout === "ct_hero"} api={x} />
            <CT_Product_Banner
              when={x.acf_fc_layout === "produktbanner"}
              api={x}
            />
            <CT_InfoBox when={x.acf_fc_layout === "infobox"} api={x} />

            <CT_ReferensBanner when={x.acf_fc_layout === "referensbanner"} api={x} state={state}/>
          </Switch>
        </>
      ))}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};
export default connect(Page);