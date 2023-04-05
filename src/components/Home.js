import Sns from "./Sns";
import {useState} from "react";

export default function Home() {
    const [hoveredLink, setHoveredLink] = useState(false);

    const handleMouseEnter = () => {
        setHoveredLink(true);
    }

    const handleMouseLeave = () => {
        setHoveredLink(false);
    }

    return (
        <div id="home">
                <p>Hey there! I'm</p>
                <h1>Samantha Xiong</h1>
                <p>Software Engineer</p>
            <Sns />
            <div className="btn">
                <a href="https://drive.google.com/file/d/1NgMr0gRE9FbCOHoUdMa1SZ1aCnjXCset/view?usp=sharing"
                   className={hoveredLink ? "isHovered" : ""}
                   onMouseEnter={() => handleMouseEnter()}
                   onMouseLeave={handleMouseLeave}
                   target="_blank" rel="noreferrer">Download Resume</a>
            </div>
        </div>
    )
}