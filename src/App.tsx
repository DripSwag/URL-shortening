import Nav from "./components/Nav";
import Working from "./assets/illustration-working.svg";
import ShortenSection from "./components/ShortenSection";
import InfoPanel from "./components/InfoPanel";
import InfoPanelConnection from "./components/InfoPanelConnection";
import DetailedRecords from "./assets/icon-detailed-records.svg";
import BrandRecognition from "./assets/icon-brand-recognition.svg";
import Customizable from "./assets/icon-fully-customizable.svg";
import MobileShapes from "./assets/bg-boost-mobile.svg";
import DesktopShapes from "./assets/bg-boost-desktop.svg";
import Facebook from "./socialIcons/Facebook";
import Twitter from "./socialIcons/Twitter";
import Pintrest from "./socialIcons/Pintrest";
import Instragram from "./socialIcons/Instagram";

function App() {
  return (
    <main className="w-full font-text overflow-x-hidden">
      <section className="h-screen flex flex-col items-center">
        <Nav />
        <div className="flex flex-col items-center text-center flex-1 gap-4 w-full justify-evenly max-w-6xl lg:flex-row-reverse lg:overflow-x-visible">
          <img
            src={Working}
            className="relative left-8 w-full lg:w-[200%] max-w-xl"
            alt="Working"
          />
          <div className="px-4 flex flex-col justify-center gap-4 items-center lg:text-left lg:items-start">
            <h1 className="text-4xl font-bold text-VeryDarkBlue lg:text-6xl">
              More than just shorter links
            </h1>
            <p className="text-GrayViolet">
              Build your brand&apos;s recognition and get detailed insdights on
              how your links are performing
            </p>
            <button className="PrimaryBtn">Get Started</button>
          </div>
        </div>
      </section>
      <section className="bg-[#f0f1f6] flex justify-center">
        <div className="bg-white h-36 w-full absolute z-0"></div>
        <div className="px-6 pt-16 pb-16 z-10 relative max-w-6xl w-full lg:pb-64">
          <ShortenSection />
          <div className="pt-28 pb-28 flex flex-col gap-8 text-center px-4">
            <h2 className="text-VeryDarkViolet text-[1.8rem] font-bold">
              Advanced Statistics
            </h2>
            <p className="text-GrayViolet">
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </p>
          </div>
          <div className="lg:flex lg:items-center lg:relative">
            <InfoPanel
              title="Brand Recognition"
              body="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content."
              image={BrandRecognition}
            />
            <InfoPanelConnection />
            <InfoPanel
              title="Detailed Records"
              body="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
              image={DetailedRecords}
              styling="lg:top-12"
            />
            <InfoPanelConnection />
            <InfoPanel
              title="Fully Customizable"
              body="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
              image={Customizable}
              styling="lg:top-24"
            />
          </div>
        </div>
      </section>
      <section className="py-32 bg-DarkViolet flex flex-col justify-center items-center gap-4 relative lg:gap-8">
        <img src={MobileShapes} className="absolute h-full right-0 lg:hidden" />
        <img
          src={DesktopShapes}
          className="absolute h-full right-0 hidden lg:inline"
        />
        <h2 className="font-bold text-white text-[1.8rem] z-10 lg:text-6xl">
          Boost your links today
        </h2>
        <button className="PrimaryBtn text-lg z-10">Get Started</button>
      </section>
      <footer className="bg-VeryDarkViolet flex justify-center">
        <div className="max-w-6xl py-8 text-white flex flex-col gap-8 items-center text-center w-full lg:flex-row lg:justify-center lg:text-left lg:items-start lg:gap-24">
          <h2 className="font-bold text-4xl my-4 grow">Shortly</h2>
          <div className="flex flex-col gap-2 FooterLinks">
            <h3 className="py-2 font-bold">Features</h3>
            <a className="text-sm font-medium text-Gray" href="#">
              Link Shortening
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Branded Links
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Analytics
            </a>
          </div>
          <div className="flex flex-col gap-2 FooterLinks">
            <h3 className="py-2 font-bold">Resources</h3>
            <a className="text-sm font-medium text-Gray" href="#">
              Blog
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Developers
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Support
            </a>
          </div>
          <div className="flex flex-col gap-2 FooterLinks">
            <h3 className="py-2 font-bold">Company</h3>
            <a className="text-sm font-medium text-Gray" href="#">
              About
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Our Team
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Careers
            </a>
            <a className="text-sm font-medium text-Gray" href="#">
              Contact
            </a>
          </div>
          <div className="flex justify-between w-full max-w-[10rem] h-7 fill-white Social">
            <Facebook />
            <Twitter />
            <Pintrest />
            <Instragram />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
