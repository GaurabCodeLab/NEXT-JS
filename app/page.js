import LearnLink from "@/components/LearnLink";
import LearnUseRouter from "@/components/LearnUseRouter";
import LearnClientComponent from "@/components/LearnClientComponent";
import LearnServerComponent from "@/components/LearnServerComponent";
import GlobalCSS from "@/components/GlobalCSS";
import LearnCSSModule from "@/components/LearnCSSModule";
import LearnImage from "@/components/LearnImage";
import LearnDataFetching from "@/components/LearnDataFetching";

const Home = ()=>{
  return (
    <>
    <h1 className="raja">hello home component</h1>
    {/* <LearnLink /> */}
    {/* <LearnUseRouter /> */}
    {/* <LearnClientComponent /> */}
    {/* <LearnServerComponent /> */}
    {/* <GlobalCSS /> */}
    {/* <LearnCSSModule /> */}
    {/* <LearnImage /> */}
    <LearnDataFetching />
    </>
  )
};

export default Home;