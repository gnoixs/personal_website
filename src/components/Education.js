const schools = [
    {
        name: "University of Minnesota",
        degree: "Bachelor of Arts",
        start: "Sept 2019",
        end: "Dec 2022",
        major: "Computer Science",
        honors_awards: ["Graduated Cum Laude", "Dean's List"],
        relevant_courses: ["Intro to Programming", "Intro to Prob & Stats", "Intro to Algorithms & Data Structures", "Machine Architecture & Organization", "Advanced Programming Principles", "Elementary Computational Linear Algebra", "Intro to Operating Systems", "Program Design & Development", "Algorithms & Data Structures", "Intro to AI", "Formal Languages & Automata", "Internet Programming"]
    },
    {
        name: "North Hennepin Community College",
        degree: "PSEO Dual Enrollment",
        start: "Sept 2018",
        end: "May 2019"
    },
    {
        name: "Hopkins High School",
        degree: "High School Diploma",
        start: "Sept 2017",
        end: "May 2020",
        honors_awards: ["Graduated Magna Cum Laude", "AP Scholar with Distinction", "2 years of PSEO Dual Enrollment"]
    }
]

export default function Education() {
    return (
        <section id="education">
            <h1 className="title">Education</h1>
            <main className="main">
                {schools.map((school, index) => (
                    <div className="school" key={index}>
                        <h3 className="name">{school.name}</h3>
                        <p className="degree">{school.degree} | {school.start} - {school.end}</p>
                        {school.major && <p><span>Major: </span>{school.major}</p>}
                        {school.honors_awards &&
                            <p><span>Honors & Awards: </span>{school.honors_awards.join(", ")}</p>
                        }
                        {school.relevant_courses &&
                            <p><span>Relevant Coursework: </span>{school.relevant_courses.join(", ")}</p>
                        }
                    </div>
                ))}
            </main>
        </section>
    )
}

