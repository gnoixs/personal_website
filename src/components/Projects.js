import pathfinder from '../img/pathfinder.png'
import sorter from '../img/sorter.png'
import website from '../img/website.png'
import elo from '../img/elo.jpg'
import letter from '../img/letter.png'
import image from '../img/image.png'

const projects = [
    {
        name: "Pathfinding Visualizer",
        desc: "Developed a pathfinding visualizer that demonstrates several algorithms, including A*, BFS, DFS, and Dijkstra's.",
        tech_stack: ["python", "pygame"],
        img: pathfinder,
        website: "https://github.com/gnoixs"
    },
    {
        name: "Sorting Visualizer",
        desc: "Developed a sorting visualizer that demonstrates several algorithms, including merge sort, selection sort, bubble sort, and quick sort",
        tech_stack: ["python", "pygame"],
        img: sorter,
        website: "https://github.com/gnoixs"
    },
    {
        name: "Personal Website",
        desc: "Developed and designed from scratch a static personal website to showcase my skills, projects, and interest.",
        tech_stack: ["html", "css", "javascript", "react"],
        img: website,
        website: "https://github.com/gnoixs"
    },
    {
        name: "Elo Ranker",
        desc: "Build an ELO ranker to rank movies and shows based on user rating. Currently just a terminal interface, but I plan on converting it to a website.",
        tech_stack: ["java", "jdbc", "postgresql"],
        img: elo,
        website: "https://github.com/gnoixs"
    },
    {
        name: "Letter & Digit Recognition",
        desc: "Developed a letter and digit recognizer that was trained on the EMNIST dataset, which consists of a large number of handwritten letters and digits.",
        tech_stack: ["python", "tensorflow", "keras"],
        img: letter,
        website: "https://github.com/gnoixs"
    },
    {
        name: "Image Recognition",
        desc: "Developed a image recognition recognizer that was trained on the CIFAR-10 dataset. The data set contains several pictures of cars, cats, planes, trucks, among other things. ",
        tech_stack: ["python", "tensorflow", "keras"],
        img: image,
        website: "https://github.com/gnoixs"
    }
]

export default function Projects() {
    return (
        <section id="projects">
            <h1 className="title">Projects</h1>
            <main className="main">
                {projects.map((project) => (
                    <a href={project.website} target="_blank" rel="noopener noreferrer" className="project" key={project.name}>
                        <img src={project.img} alt="project_img" />
                        <h3>{project.name}</h3>
                        <p>{project.desc}</p>
                        <div className="tech">
                            {project.tech_stack.map((tech) => (
                                <p key={tech}>{tech}</p>
                            ))}
                        </div>
                    </a>
                ))}
            </main>
        </section>
    );
}
