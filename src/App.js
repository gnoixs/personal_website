import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
    return(
        <div className="app">
            <Navbar />
            <Home />
            <About />
            <Education />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}