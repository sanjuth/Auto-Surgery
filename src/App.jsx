import { Element } from "react-scroll";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import UploadImage from "./components/UploadImage";
import ScrollSections from "./components/ScrollSections";
function App() {
  return (
    <>
      <div className="h-full w-full overflow-hidden">
        <Navbar />
        <div className="overflow-scroll h-full scroll-m-4  scrollbar-thumb-rounded-md scrollbar-thumb-slate-400 scrollbar-track-slate-800">
          <Home />
          <UploadImage />
        </div>
      </div>
    </>
  );
}

export default App;
