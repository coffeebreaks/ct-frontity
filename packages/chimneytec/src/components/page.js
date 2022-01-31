
import {styled} from "frontity";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";
import CT_Hero from "./acf_blocks/ct_hero";
import CT_Product_Banner from "./acf_blocks/ct_product_banner";
import CT_InfoBox from "./acf_blocks/ct_infobox";
import CT_ReferensBanner from "./acf_blocks/ct_referensbanner";
import CT_InfoPage from "./acf_blocks/ct_infopage"
import CT_Document from "./acf_blocks/ct_document"
import ContactForm from "./acf_blocks/contactForm";
import ContactBlock from "./acf_blocks/ct_contactBlock";
import CT_Productpage from "./acf_blocks/ct_productpage";

const Page = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const acfTitle = Object.keys(post.acf)[0];

  return (
    <div>
      {post.acf[acfTitle].map((x,i) => (
        <div key={i}>
          <Switch>
            <CT_Hero when={x.acf_fc_layout === "ct_hero"} api={x} />
            <CT_Product_Banner
              when={x.acf_fc_layout === "produktbanner"}
              api={x}
            />
            <CT_InfoBox when={x.acf_fc_layout === "infobox"} api={x} />
            <CT_ReferensBanner when={x.acf_fc_layout === "referensbanner"} api={x} state={state}/>
            <CT_InfoPage when={x.acf_fc_layout === "infosida"} api={x} state={state}/>
            <CT_Document when={x.acf_fc_layout === "dokument"} api={x} state={state}/>
            <ContactForm when={x.acf_fc_layout === "kontaktformular"} api={x} state={state}/>
            <ContactBlock when={x.acf_fc_layout === "kontaktblock"} api={x}/>
            <CT_Productpage when={x.acf_fc_layout === "produktsida"} api={x}/>

          </Switch>
        </div>
      ))}
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};
export default connect(Page);
