const siteConfig = {
  name: "Mohit Kumar Pandey",
  domain: "mohitkpandey.com",
  tagline: "Building ideas through code, research, and continuous learning.",
};

// Leave this empty until a live visitor API is connected.
const visitorData = [];

const portfolioData = [
  {
    id: "academics",
    title: "Academics",
    icon: "bi-mortarboard",
    items: [
      {
        id: "overview",
        title: "Overview",
        content: `
          <p class="text-primary fw-semibold mb-2">Computer Science & Engineering</p>
          <h1 class="display-5 fw-bold mb-3">Learning with purpose.</h1>
          <p class="lead text-secondary">I am a final-year computer science student focused on turning strong fundamentals into useful, human-centered software.</p>
          <hr class="my-4">
          <div class="row g-4"><div class="col-md-6"><h2 class="h5">Current focus</h2><p class="text-secondary">Distributed systems, accessible interfaces, and applied machine learning.</p></div><div class="col-md-6"><h2 class="h5">Expected graduation</h2><p class="text-secondary">May 2026 · Bachelor of Technology</p></div></div>`
      },
      {
        id: "semester-1",
        title: "Semester 1",
        content: `<p class="text-primary fw-semibold">Academic record</p><h1 class="h2 fw-bold mb-3">Semester 1 foundations</h1><p class="text-secondary">Built a strong base in programming, discrete mathematics, and digital logic while learning how to approach complex problems methodically.</p><ul class="text-secondary"><li>Programming fundamentals with C++</li><li>Discrete mathematics and logic</li><li>Digital systems and computer organization</li></ul>`
      },
      {
        id: "data-structures",
        title: "Data Structures",
        content: `<p class="text-primary fw-semibold">Core subject</p><h1 class="h2 fw-bold mb-3">Data structures & algorithms</h1><p class="text-secondary">Studied the trade-offs behind the structures that power reliable software, from arrays and trees to graphs and hash tables.</p><div class="alert alert-primary border-0"><strong>Key takeaway:</strong> Choosing the right abstraction is often as important as writing efficient code.</div>`
      },
      {
        id: "math",
        title: "Mathematics",
        content: `<p class="text-primary fw-semibold">Core subject</p><h1 class="h2 fw-bold mb-3">Mathematical thinking</h1><p class="text-secondary">Explored linear algebra, probability, and calculus with an emphasis on the concepts that support computer graphics, data analysis, and machine learning.</p>`
      }
    ]
  },
  {
    id: "projects",
    title: "Projects",
    icon: "bi-code-slash",
    items: [
      {
        id: "study-planner",
        title: "Study Planner",
        content: `<p class="text-primary fw-semibold">Featured project</p><h1 class="h2 fw-bold mb-3">Study Planner</h1><p class="text-secondary">A responsive planning tool that helps students break large goals into manageable sessions and track progress over time.</p><div class="d-flex flex-wrap gap-2"><span class="badge text-bg-light border">JavaScript</span><span class="badge text-bg-light border">Bootstrap</span><span class="badge text-bg-light border">Local storage</span></div>`
      },
      {
        id: "research-dashboard",
        title: "Research Dashboard",
        content: `<p class="text-primary fw-semibold">Featured project</p><h1 class="h2 fw-bold mb-3">Research Dashboard</h1><p class="text-secondary">A lightweight dashboard for exploring experiment metrics and communicating findings clearly to non-technical collaborators.</p>`
      }
    ]
  },
  {
    id: "skills",
    title: "Skills",
    icon: "bi-lightning",
    items: [
      {
        id: "technical",
        title: "Technical toolkit",
        content: `<p class="text-primary fw-semibold">What I use</p><h1 class="h2 fw-bold mb-3">Technical toolkit</h1><p class="text-secondary">I enjoy working across the stack and choosing tools that keep products understandable and maintainable.</p><div class="row g-3 mt-2"><div class="col-sm-6"><h2 class="h6">Languages</h2><p class="text-secondary mb-0">JavaScript, Python, C++, SQL</p></div><div class="col-sm-6"><h2 class="h6">Web</h2><p class="text-secondary mb-0">HTML, CSS, Bootstrap, REST APIs</p></div></div>`
      },
      {
        id: "collaboration",
        title: "Collaboration",
        content: `<p class="text-primary fw-semibold">How I work</p><h1 class="h2 fw-bold mb-3">Curious and collaborative</h1><p class="text-secondary">I value clear communication, thoughtful feedback, and small iterative improvements. The best results come from making room for different perspectives.</p>`
      }
    ]
  }
];
