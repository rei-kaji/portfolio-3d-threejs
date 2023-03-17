import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedback s /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <footer className="flex flex-row gap-2 justify-center items-center">
          {/* Add Access Counter 
          URL: https://script.google.com/u/0/home/projects/1sIppfiecXOI_DNpSsGNDrRmoLMss7qlaoq3S5FCNtCdDu9aGtfpgr9FL/edit
          */}
          <h6>Access Count: </h6>
          <iframe
            loading="lazy"
            src="https://script.google.com/macros/s/AKfycbwlMsH5yJbxIppDJXooGLf5ihPAOCCAawa6OuxYgDoeV7zy6gI_SmwJWl5eWPR-V1M0/exec?url=https://rei-portfolio.netlify.app/"
            title="AccessCounter"
            scrolling="no"
            frameBorder="0"
          ></iframe>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
