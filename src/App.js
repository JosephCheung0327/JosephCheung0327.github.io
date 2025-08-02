import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import "./App.css";

// TimelineCard component for dropdown boxes
function TimelineCard({ title, subtitle, years, details, bgClass }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`timeline-card ${bgClass}`}>
      {/* Top right corner: years and separate dropdown button */}
      <div className="timeline-years">{years}</div>
      <button
        className="timeline-dropdown-btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "▲" : "▼"}
      </button>
      
      {/* Top left corner: title and subtitle */}
      <div className="timeline-card-header">
        <div className="timeline-title">{title}</div>
        <div className="timeline-subtitle">{subtitle}</div>
      </div>
      
      {/* Content below that appears on dropdown */}
      <div className={`timeline-details-dropdown${open ? " open" : ""}`}>
        <ul className="timeline-details">
          {details.map((d, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: d }} />
          ))}
        </ul>
      </div>
    </div>
  );
}

// Timeline component
function Timeline() {
  const countries = [
    {
      name: "Canada",
      years: "2024 - Present",
      subtitle: "?",
      details: [
        "Toronto is cold but I love poutine",
      ],
      bgClass: "timeline-bg-canada",
    },
    {
      name: "Hong Kong",
      years: "2006 - 2024",
      subtitle: "Temporary Residence",
      details: [
        "Some basketball and table tennis"
      ],
      bgClass: "timeline-bg-hk",
    },
    {
      name: "Taiwan",
      years: "2006",
      subtitle: "Hometown",
      details: [
        "Ate some of the best food in the world",
        "Drank the best boba in the world",
        "Witnessed the best technologies at COMPUTEX",
      ],
      bgClass: "timeline-bg-taiwan",
    },
  ];

  return (
    <div className="timeline-vertical">
      <div className="timeline-line" />
      {countries.map((item) => (
        <div className="timeline-row" key={item.name}>
          <TimelineCard
            title={item.name}
            subtitle={item.subtitle}
            years={item.years}
            details={item.details}
            bgClass={item.bgClass}
          />
        </div>
      ))}
    </div>
  );
}

function Education() {
  const schools = [
    {
      name: "University of Toronto",
      years: "2024 - Present",
      subtitle: "BSc, Computer Science Specialist & Statistics Major",
      details: [
        "Director of Logistics - Computational Linguistics Group",
        "Content Associate - Cybersecurity Student Association",
        "Web Developer - Orion Journal",
      ],
      bgClass: "timeline-bg-canada",
    },
    {
      name: "Po Leung Kuk Ngan Po Ling College",
      years: "2018 - 2024",
      subtitle: "IB Bilingual Diploma",
      details: [
        "Subjects: Maths AA HL, Physics HL, Chemistry HL, English LL SL, Chinese LL SL, Economics SL",
      ],
      bgClass: "timeline-bg-hk",
    },
  ];

  return (
    <div className="timeline-vertical">
      <div className="timeline-line" />
      {schools.map((item) => (
        <div className="timeline-row" key={item.name}>
          <TimelineCard
            title={item.name}
            subtitle={item.subtitle}
            years={item.years}
            details={item.details}
            bgClass={item.bgClass}
          />
        </div>
      ))}
    </div>
  );
}

function Experience() {
  const jobs = [
    {
      name: "Software Developer Intern",
      years: "Summer 2025",
      subtitle: "Cityline",
      details: [
        "Built a full-stack seat assignment system with custom optimization algorithms, using Python/FastAPI (Oracle DB) for the backend and an interactive React/TypeScript frontend, to efficiently seat groups and prioritize VIPs.",
        "Automated seat plan generation in Python by integrating OpenCV for image processing and openpyxl for uniform formatting and image placement in Excel, reducing manual workload by over 95%.",
        "Built a Random Forest-based email classifier API in R, applying feature engineering techniques to detect bot-generated addresses and improve fraud detection during user registration, with 4.6M+ emails analyzed.",
        "Developed a Python log parser to extract permanent SMTP bouncebacks from mail server logs; deployed as a cron job on a Linux SSH server, with 500k+ results pushed to AWS SQS for automated suppression list updates.",
      ],
      bgClass: "timeline-bg-hk",
    },
  ];

  return (
    <div className="timeline-vertical">
      <div className="timeline-line" />
      {jobs.map((item) => (
        <div className="timeline-row" key={item.name}>
          <TimelineCard
            title={item.name}
            subtitle={item.subtitle}
            years={item.years}
            details={item.details}
            bgClass={item.bgClass}
          />
        </div>
      ))}
    </div>
  );
}

const tabContents = {
  home: (
    <div className="tab-content">
      <h1>Hello World!</h1>
      <p>I'm Joseph Cheung, a rising sophomore at the University of Toronto.</p>
      <p>I will be adding more content to this website soon.</p>
    </div>
  ),
  about: (
    <div className="tab-content">
      <h1 style={{ marginTop: "1.5rem" }}>Education</h1>
      <Education />
      <h1 style={{ marginTop: "2.5rem" }}>Experience</h1>
      <Experience />
      <h1 style={{ marginTop: "2.5rem" }}>Life</h1>
      <Timeline />
    </div>
  ),
  courses: (
    <div className="tab-content">
      <h1>Courses</h1>
      <p>
        This is a list of courses I have taken at UofT and some information about them. I’m aiming to complete a
        CS Specialist and a Statistics Major. I hope this will be useful for future students pursuing similar
        majors. Feel free to contact me if you want more information about these courses. Beware that their
        syllabus and instructors might change every year. Note: I transferred 2.5 credits from IB (unfortunately
        all of them are BR5).
      </p>
      <p>
        The courses are arranged according to their course code, in alphabetical order.
      </p>
      <h2>Year 1 (2024-2025)</h2>
      <CourseList />
    </div>
  ),
};

function App() {
  const [activeTab, setActiveTab] = useState("home");
  const [theme, setTheme] = useState("light");

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={`app-container ${theme}`}>
      <header>
        <nav className="navbar">
          <ul className="nav-tabs">
            {["home", "about", "courses"].map((tab) => (
              <li key={tab}>
                <button
                  className={activeTab === tab ? "active" : ""}
                  onClick={() => handleTabSwitch(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="theme-toggle-floating" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          <ThemeToggle theme={theme} setTheme={setTheme} />
        </div>
      </header>
      <main>
        <AnimatedFade key={activeTab}>{tabContents[activeTab]}</AnimatedFade>
      </main>
      <footer>
        <h1>Contacts</h1>
        <div className="icon-container">
          <a href="mailto:cheunghsinkuang@gmail.com" className="icon email" aria-label="Email">
            <FaEnvelope size={32} />
          </a>
          <a href="https://github.com/JosephCheung0327" target="_blank" rel="noopener noreferrer" className="icon github">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/josephcheunghk/" target="_blank" rel="noopener noreferrer" className="icon linkedin">
            <FaLinkedin size={32} />
          </a>
        </div>
        <small>Last updated: August 2, 2025</small>
      </footer>
    </div>
  );
}

// Animated fade-in for tab content
function AnimatedFade({ children }) {
  return <div className="fade-in">{children}</div>;
}

// Theme toggle button
function ThemeToggle({ theme, setTheme }) {
  return (
    <div
      className="theme-toggle-icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <LuMoon />
      ) : (
        <LuSun className="sun" />
      )}
    </div>
  );
}

// Accordion for dropdowns
function Accordion({ items }) {
  const [openArr, setOpenArr] = useState(Array(items.length).fill(false));

  const toggleDropdown = (idx) => {
    setOpenArr((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <div className="accordion">
      {items.map((item, idx) => (
        <div key={item.title} className="accordion-item">
          <button
            className="accordion-title"
            onClick={() => toggleDropdown(idx)}
          >
            {item.title}
            <span className="arrow">{openArr[idx] ? "▲" : "▼"}</span>
          </button>
          <div className={`accordion-content${openArr[idx] ? " open" : ""}`}>
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}

// Courses list with collapsible details
function CourseList() {
  const courses = [
    {
      code: "CSC110",
      name: "Foundations of Computer Science I",
      instructor: "Paul He & Sadia Sharmin",
      average: "A-",
      br: "BR5",
      syllabus: "https://www.cs.toronto.edu/dcs/ugdocs/course-outlines/2024/Fall/CSC110Y1F-Fall2024.pdf",
      description:
        "This is a well-structured course on the basics of CS and Python. For those who studied CS in high school, this course is a great review but some of you might find it boring. For those new to programming, this course is paced appropriately, and you have lots of support from the teaching team. This is a full-credit course, so there are more lecture hours than other courses. The tests and exam are straightforward, so many students get (crazily) amazing scores.",
    },
    {
      code: "CSC111",
      name: "Foundations of Computer Science II",
      instructor: "Sadia Sharmin",
      average: "A-",
      br: "BR5",
      syllabus: "https://www.cs.toronto.edu/dcs/ugdocs/course-outlines/2025/Winter/CSC111H1S-Winter2025.pdf",
      description:
        "This course is slightly harder than CSC110 and has a higher workload. It covers more data structures and sorting algorithms. There are two group projects, one being open-ended. Still, the tests and exam are not too difficult.",
    },
    {
      code: "CDN199",
      name: "Canada-Hong Kong Migration",
      instructor: "Amardeep Kaur",
      average: "B-",
      br: "BR3",
      description:
        "This course explores Hong Kong's migration trends and ties with Canada. There were weekly readings and worksheets but the workload was manageable. There were also group discussions every lecture, for around 15 minutes. This course is great for students interested in Hong Kong and migration trends.",
    },
    {
      code: "EAS194",
      name: "East Asia through Music",
      instructor: "Atsuko Sakaki",
      average: "B",
      br: "BR1",
      description:
        "This seminar course explores historic and cultural aspects of East Asian music. There were weekly readings but the workload was appropriate. There was an open topic term paper instead of an exam. Participation in online discussions made up a significant portion of the grade.",
    },
    {
      code: "EAS289",
      name: "Environment and East Asia",
      instructor: "Yue Meng",
      average: "B",
      br: "BR3",
      description:
        "This course mainly discusses the causes of climate change and possible solutions. The course content isn't difficult and the workload is appropriate. However, this course might be boring for those not interested in environmental issues.",
    },
    {
      code: "MAT137",
      name: "Calculus with Proofs",
      instructor: "Boris Khesin",
      average: "C",
      br: "BR5",
      description:
        "Most of the computations in this course should be familiar to those who studied calculus in high school. However, most students might need some time to get used to writing proofs. The problem sets are very difficult, while the tests and exam are not too hard.",
    },
    {
      code: "MAT223",
      name: "Linear Algebra I",
      instructor: "Kevin Watmough",
      average: "C+",
      br: "BR5",
      syllabus: "https://www.math.toronto.edu/ebellah/Teaching/2024_25/MAT223Winter25.pdf",
      description:
        "This is a standard linear algebra course with some proofs. The test and exam are easy as long as you complete WeBWorK assignments and exercises in the course notes. There are weekly tutorial quizzes that are quite simple.",
    },
    {
      code: "STA130",
      name: "An Introduction to Statistical Reasoning and Data Science",
      instructor: "Nathalie Moon & Morris Greenberg",
      average: "B",
      br: "BR5",
      syllabus: "https://www.statistics.utoronto.ca/sites/www.statistics.utoronto.ca/files/STA130%20W25_syllabus.pdf",
      description:
        "This course uses R to introduce basic statistical concepts and data science techniques. There are weekly assignments and a group project. The test and exam are straightforward if you complete the assignments and attend tutorials.",
    },
  ];

  const [openArr, setOpenArr] = useState(Array(courses.length).fill(false));
  const toggleDropdown = (idx) => {
    setOpenArr((prev) => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
  };

  return (
    <div className="course-list">
      {courses.map((course, idx) => (
        <div key={course.code} className="course-card">
          <button
            className="course-title"
            onClick={() => toggleDropdown(idx)}
          >
            <span className="course-code">{course.code}</span> {course.name}
            <span className="arrow">{openArr[idx] ? "▲" : "▼"}</span>
          </button>
          <div className={`course-details${openArr[idx] ? " open" : ""}`}>
            <div className="course-meta-row">
              <span><b>Instructor:</b> {course.instructor}</span>
              <span className="course-br"><b>{course.br}</b></span>
            </div>
            <p><b>Course Average:</b> {course.average}</p>
            {course.syllabus && (
              <p>
                <a href={course.syllabus} target="_blank" rel="noopener noreferrer">Syllabus</a>
              </p>
            )}
            <p>{course.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
