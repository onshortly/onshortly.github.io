import Plx from "react-plx";
import CastleImg from "../assets/castle.jpg";
import ForestImg from "../assets/forest-overlay.png";

export const ParallaxHeader = () => {
    return (
        <div>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 700,
                easing: "easeIn",
                properties: [
                  {
                    startValue: 1,
                    endValue: 4,
                    property: "scale"
                  }
                ]
              }
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%",
              zIndex: 100
            }}
          >
            <img style={{ width: "100%" }} src={ForestImg} alt="foreground" />
          </Plx>
          {/* <Plx
            parallaxData={[
              {
                start: 0,
                end: 800,
                properties: [
                  {
                    startValue: 1,
                    endValue: 1.18,
                    property: "scale"
                  }
                ]
              }
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              width: "100%"
            }}
          >
            <img style={{ width: "100%" }} src="hero.jpeg" alt="background" />
          </Plx> */}
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: "transparent",
                    endValue: "#fff",
                    property: "backgroundColor"
                  },
                  {
                    startValue: 1,
                    endValue: 1.6,
                    property: "scale"
                  }
                ]
              }
            ]}
            style={{
              position: "fixed",
              left: 0,
              width: "70%",
              background: "#fff"
            }}
          >
            <img
              style={{
                width: "100%"
              }}
              src={CastleImg}
              alt="castle"
            />
          </Plx>
          <Plx
            parallaxData={[
              {
                start: 0,
                end: 400,
                properties: [
                  {
                    startValue: "transparent",
                    endValue: "#000",
                    property: "backgroundColor"
                  },
                ]
              }
            ]}
            style={{
              position: "fixed",
              left: 0,
              top: 0,
              zIndex: 200,
              paddingTop: "56%",
              height: "400vh",
              width: "100%"
            }}
          >
            <div
              style={{
                background: "#000",
                height: "100%"
              }}
            ></div>
          </Plx>
        </div>
      );
}