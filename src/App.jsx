import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import VideoReel from "./components/VideoReel";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="site-wrapper">
      <>
        <Navbar />
        <Hero />
        <Gallery />
        <VideoReel />
        <About />
        <Contact />
        <Footer />
      </>
    </div>
  );
}

export default App;
