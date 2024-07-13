
import Content from "../components/Content"
import Footer from "../components/Footer"
import { ParallaxHeader } from "../components/ParallaxHeader"
import { Page } from "../components/Page";


export const Main = () => {
    return (
      <Page>
        <ParallaxHeader />
        <Content />
        <Footer />
      </Page>
    )
}