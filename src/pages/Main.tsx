
import Content from "../components/Content"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { ParallaxHeader } from "../components/ParallaxHeader"

export const Main = () => {
    return (
    <div className="App">
        <ParallaxHeader />
        <Content />
        <Footer />
      </div>
    )
}