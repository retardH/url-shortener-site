import { useContext } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import Shortener from "./components/link-shortener";
import GrayContainer from "./layouts/gray-container";
import ShortenLink from "./components/shorten-link";
import Statistics from "./components/statistics";
import Footer from "./components/footer";
import { LinkContext } from "./contexts/links-context-provider";
import { nanoid } from "nanoid";
function App() {
  const {links} = useContext(LinkContext);
  return (
    <>
      <Navbar />
      <HeroSection />
      <GrayContainer>
        <Shortener />
        {links.length >= 1 &&
          links.map((link) => {
            return (
              <ShortenLink
                key={nanoid()}
                shortLink={link.shortLink}
                longLink={link.longLink}
              />
            );
          })}
        <Statistics />
      </GrayContainer>
      <Footer />
    </>
  );
}

export default App;
