/* =========================================
   SkillSprint AI
   Main JavaScript
========================================= */


/* THEME */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


/* LOAD THEME */

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
}


/* =========================================
   CAREER ROADMAP
========================================= */

const careerData = {

    SDR: {
        title: "Sales Development Representative",
        description: "Your personalized roadmap to become a successful SDR.",
        steps: [
            {
                title: "Improve Communication",
                description: "Practice professional English, active listening and confident speaking."
            },
            {
                title: "Learn Sales Fundamentals",
                description: "Understand prospecting, lead qualification, sales funnels and buyer personas."
            },
            {
                title: "Learn CRM Tools",
                description: "Practice using CRM platforms and understand lead management."
            },
            {
                title: "Master Cold Calling",
                description: "Learn opening lines, discovery questions and objection handling."
            },
            {
                title: "Learn Email Outreach",
                description: "Write short, personalized and professional sales emails."
            },
            {
                title: "Practice Interviews",
                description: "Prepare HR questions, sales scenarios and role-play conversations."
            },
            {
                title: "Build Your Resume",
                description: "Create an ATS-friendly resume focused on measurable skills and achievements."
            },
            {
                title: "Start Applying",
                description: "Apply to suitable SDR and business development opportunities."
            }
        ]
    },

    web: {
        title: "Web Developer",
        description: "Your roadmap to becoming a job-ready web developer.",
        steps: [
            {
                title: "HTML Fundamentals",
                description: "Learn semantic HTML, forms, tables and accessibility."
            },
            {
                title: "CSS Fundamentals",
                description: "Master layouts, Flexbox, Grid, responsive design and animations."
            },
            {
                title: "JavaScript",
                description: "Learn variables, functions, arrays, objects, DOM and events."
            },
            {
                title: "Git & GitHub",
                description: "Learn version control and publish projects on GitHub."
            },
            {
                title: "Build Projects",
                description: "Build at least three responsive real-world projects."
            },
            {
                title: "Learn APIs",
                description: "Understand REST APIs, JSON and asynchronous JavaScript."
            },
            {
                title: "Create Portfolio",
                description: "Create a professional developer portfolio."
            },
            {
                title: "Apply for Jobs",
                description: "Prepare your resume and start applying for developer roles."
            }
        ]
    },

    data: {
        title: "Data Analyst",
        description: "Your roadmap to becoming a job-ready data analyst.",
        steps: [
            {
                title: "Excel",
                description: "Learn formulas, PivotTables, charts and data cleaning."
            },
            {
                title: "SQL",
                description: "Learn SELECT, JOIN, GROUP BY, filtering and aggregations."
            },
            {
                title: "Statistics",
                description: "Understand averages, distributions, correlation and basic statistics."
            },
            {
                title: "Power BI",
                description: "Create dashboards and interactive business reports."
            },
            {
                title: "Python",
                description: "Learn Python basics and libraries used for data analysis."
            },
            {
                title: "Build Projects",
                description: "Create practical dashboards and analysis projects."
            },
            {
                title: "Portfolio",
                description: "Publish your projects and analysis on a portfolio."
            },
            {
                title: "Apply",
                description: "Prepare your resume and apply for analyst positions."
            }
        ]
    },

    hr: {
        title: "HR Executive",
        description: "Your roadmap to becoming a professional HR executive.",
        steps: [
            {
                title: "Communication",
                description: "Develop professional written and verbal communication."
            },
            {
                title: "HR Fundamentals",
                description: "Learn recruitment, onboarding, employee relations and HR policies."
            },
            {
                title: "Recruitment",
                description: "Learn sourcing, screening and interview coordination."
            },
            {
                title: "Excel",
                description: "Learn Excel for employee records and HR reporting."
            },
            {
                title: "HR Software",
                description: "Understand HRMS and applicant tracking systems."
            },
            {
                title: "Interview Preparation",
                description: "Prepare HR-related interview questions and scenarios."
            },
            {
                title: "Build Resume",
                description: "Create an HR-focused ATS-friendly resume."
            },
            {
                title: "Apply",
                description: "Start applying for HR internships and entry-level roles."
            }
        ]
    },

    marketing: {
        title: "Digital Marketing",
        description: "Your roadmap to becoming a digital marketing professional.",
        steps: [
            {
                title: "Marketing Basics",
                description: "Understand target audiences, funnels and customer journeys."
            },
            {
                title: "Social Media",
                description: "Learn content planning and social media marketing."
            },
            {
                title: "SEO",
                description: "Understand keywords, on-page SEO and search visibility."
            },
            {
                title: "Content Creation",
                description: "Practice writing posts, blogs and promotional content."
            },
            {
                title: "Analytics",
                description: "Learn basic website and campaign analytics."
            },
            {
                title: "Build Projects",
                description: "Create sample campaigns and marketing projects."
            },
            {
                title: "Portfolio",
                description: "Show your marketing projects in an online portfolio."
            },
            {
                title: "Apply",
                description: "Start applying for digital marketing roles."
            }
        ]
    },

    finance: {
        title: "Finance Executive",
        description: "Your roadmap to becoming a job-ready finance professional.",
        steps: [
            {
                title: "Accounting Basics",
                description: "Understand journal entries, ledgers and financial statements."
            },
            {
                title: "Excel",
                description: "Learn formulas, PivotTables and financial analysis."
            },
            {
                title: "Tally",
                description: "Practice accounting transactions and reports."
            },
            {
                title: "GST Basics",
                description: "Understand GST concepts and basic compliance."
            },
            {
                title: "Financial Analysis",
                description: "Learn basic financial ratios and reporting."
            },
            {
                title: "Build Projects",
                description: "Create practical accounting or finance projects."
            },
            {
                title: "Resume",
                description: "Build an ATS-friendly finance resume."
            },
            {
                title: "Apply",
                description: "Apply for finance internships and entry-level positions."
            }
        ]
    }

};


/* GENERATE ROADMAP */

function generateRoadmap() {

    const name = document.getElementById("studentName").value.trim();
    const education = document.getElementById("education").value.trim();
    const career = document.getElementById("career").value;
    const skills = document.getElementById("skills").value.trim();

    if (!name || !education || !career) {
        alert("Please enter your name, education and target career.");
        return;
    }

    const data = careerData[career];

    document.getElementById("roadmap").classList.remove("hidden");

    document.getElementById("roadmapTitle").textContent =
        `${name}'s ${data.title} Roadmap`;

    document.getElementById("roadmapDescription").textContent =
        `${data.description} Education: ${education}. Skills: ${skills || "Not added yet"}.`;

    const container = document.getElementById("roadmapContainer");

    container.innerHTML = "";

    data.steps.forEach((step, index) => {

        const item = document.createElement("div");

        item.className = "roadmap-item";

        item.innerHTML = `
            <div class="roadmap-number">
                ${index + 1}
            </div>

            <div>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        `;

        container.appendChild(item);

    });

    document.getElementById("roadmap").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================================
   RESUME BUILDER
========================================= */

function generateResume() {

    const name =
        document.getElementById("resumeName").value ||
        "Your Name";

    const email =
        document.getElementById("resumeEmail").value ||
        "your@email.com";

    const phone =
        document.getElementById("resumePhone").value ||
        "+91 XXXXX XXXXX";

    const role =
        document.getElementById("resumeRole").value ||
        "Career Professional";

    const about =
        document.getElementById("resumeAbout").value ||
        "Motivated professional looking to begin a successful career and contribute to a growth-oriented organization.";

    const skills =
        document.getElementById("resumeSkills").value ||
        "Communication, Teamwork, Problem Solving";

    const education =
        document.getElementById("resumeEducation").value ||
        "Add your education details.";

    const projects =
        document.getElementById("resumeProjects").value ||
        "Add your project details.";

    const skillList = skills
        .split(",")
        .map(skill => skill.trim())
        .filter(skill => skill);

    const skillsHTML = skillList
        .map(skill => `<span>${skill}</span>`)
        .join(" • ");

    const preview = document.getElementById("resumePreview");

    preview.innerHTML = `

        <h2>${escapeHTML(name)}</h2>

        <p class="resume-role">
            ${escapeHTML(role)}
        </p>

        <p>
            ${escapeHTML(email)}
            &nbsp; | &nbsp;
            ${escapeHTML(phone)}
        </p>

        <hr>

        <h3>ABOUT ME</h3>

        <p>
            ${escapeHTML(about)}
        </p>

        <h3>SKILLS</h3>

        <p>
            ${escapeHTML(skillsHTML)}
        </p>

        <h3>EDUCATION</h3>

        <p>
            ${escapeHTML(education)}
        </p>

        <h3>PROJECTS</h3>

        <p>
            ${escapeHTML(projects)}
        </p>

    `;

    alert("Your resume has been generated!");

}


/* SECURITY HELPER */

function escapeHTML(value) {

    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================
   INTERVIEW COACH
========================================= */

const questions = [

    "Tell me about yourself.",

    "Why should we hire you?",

    "What are your strengths?",

    "Tell me about a challenge you faced and how you handled it.",

    "Where do you see yourself in the next five years?"

];

let currentQuestion = 0;


function checkAnswer() {

    const answer =
        document.getElementById("answer").value.trim();

    const feedback =
        document.getElementById("feedback");

    if (!answer) {
        alert("Please type your answer first.");
        return;
    }

    let message = "";

    const words = answer.split(/\s+/).length;

    if (words < 15) {

        message = `
            <strong>Keep going! 👍</strong><br><br>
            Your answer is a little short.
            Try to explain your answer with a specific example.
        `;

    } else if (words < 40) {

        message = `
            <strong>Good answer! 👏</strong><br><br>
            Your response has a reasonable structure.
            Try adding one specific example or achievement.
        `;

    } else {

        message = `
            <strong>Great response! 🚀</strong><br><br>
            Your answer provides good detail.
            Practice delivering it naturally and confidently.
        `;

    }

    feedback.innerHTML = message;

    feedback.classList.remove("hidden");

}


function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }

    document.getElementById("question").textContent =
        questions[currentQuestion];

    document.getElementById("questionNumber").textContent =
        currentQuestion + 1;

    document.getElementById("answer").value = "";

    document.getElementById("feedback").classList.add("hidden");

}


/* =========================================
   NAVIGATION
========================================= */

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function() {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


/* =========================================
   LOCAL STORAGE PROFILE
========================================= */

function saveProfile() {

    const profile = {

        name: document.getElementById("studentName").value,

        education: document.getElementById("education").value,

        career: document.getElementById("career").value,

        skills: document.getElementById("skills").value

    };

    localStorage.setItem(
        "skillsprintProfile",
        JSON.stringify(profile)
    );

}


document
    .getElementById("studentName")
    .addEventListener("input", saveProfile);

document
    .getElementById("education")
    .addEventListener("input", saveProfile);

document
    .getElementById("career")
    .addEventListener("change", saveProfile);

document
    .getElementById("skills")
    .addEventListener("input", saveProfile);


/* LOAD PROFILE */

const savedProfile =
    JSON.parse(localStorage.getItem("skillsprintProfile"));

if (savedProfile) {

    document.getElementById("studentName").value =
        savedProfile.name || "";

    document.getElementById("education").value =
        savedProfile.education || "";

    document.getElementById("career").value =
        savedProfile.career || "";

    document.getElementById("skills").value =
        savedProfile.skills || "";

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


document
    .querySelectorAll(".feature-card, .roadmap-item, .stat-card")
    .forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(20px)";

        element.style.transition =
            "0.6s ease";

        observer.observe(element);

    });