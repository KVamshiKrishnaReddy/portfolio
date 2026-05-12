export default function PortfolioWebsite() {
  const projects = [
    {
      title: "SAR Ship Detection System",
      description:
        "Developed an end-to-end SAR ship detection system using YOLOv8 and MAESTRO transformer-based architecture for accurate ship localization and size estimation.",
      tech: ["Python", "YOLOv8", "OpenCV", "PyTorch", "MAESTRO"],
    },
    {
      title: "Mental Health Chatbot (RAG + LLM)",
      description:
        "Built an AI-powered chatbot using Retrieval-Augmented Generation with Llama3.1 and LangChain for context-aware mental wellness conversations.",
      tech: ["Python", "LangChain", "Llama 3.1", "AI", "RAG"],
    },
    {
      title: "Face Recognition Attendance System",
      description:
        "Created a real-time attendance system using Haar Cascade and FaceNet embeddings achieving high recognition accuracy with OpenCV.",
      tech: ["Python", "OpenCV", "FaceNet", "Computer Vision"],
    },
  ];

  const skills = [
    "Python",
    "SQL",
    "Machine Learning",
    "Artificial Intelligence",
    "YOLOv8",
    "PyTorch",
    "OpenCV",
    "Computer Vision",
    "HTML",
    "CSS",
    "NumPy",
    "Pandas",
    "Matplotlib",
    "React",
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Vamshi Krishna Reddy
          </h1>

          <div className="hidden md:flex gap-8 text-sm text-gray-300">
            <a href="#objective" className="hover:text-white transition">
              Objective
            </a>

            <a href="#skills" className="hover:text-white transition">
              Skills
            </a>

            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>

            <a href="#education" className="hover:text-white transition">
              Education
            </a>

            <a href="#certifications" className="hover:text-white transition">
              Certifications
            </a>

            <a href="#contact" className="hover:text-white transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-black opacity-90" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6 text-sm text-gray-300">
            AI/ML Engineer • Computer Vision Developer • AI Research Enthusiast
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Building Intelligent
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              AI Solutions
            </span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            Passionate about Artificial Intelligence, SAR image analysis,
            computer vision, and scalable AI-powered applications using modern
            technologies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition duration-300"
            >
              View Projects
            </a>

            <a
              href="https://github.com/KVamshiKrishnaReddy"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="objective" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-8">Objective</h2>

            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              Tech enthusiast skilled in Python, AI, ML and modern web
              technologies with hands-on experience in computer vision and SAR
              image processing.
            </p>

            <p className="text-gray-400 leading-relaxed text-lg">
              Currently pursuing B.Tech in CSE-AIML at Malla Reddy University
              with a strong interest in building innovative AI systems and
              solving real-world problems.
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-20 rounded-full" />

            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">8.6</h3>
                  <p className="text-gray-400 mt-2">CGPA</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">3+</h3>
                  <p className="text-gray-400 mt-2">Major Projects</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">AI/ML</h3>
                  <p className="text-gray-400 mt-2">Specialization</p>
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-cyan-400">ISRO</h3>
                  <p className="text-gray-400 mt-2">Research Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
<section
  id="skills"
  className="py-20 px-4 border-t border-white/10 relative overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Technical{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">
          Skills
        </span>
      </h2>

      <p className="text-gray-400 text-base max-w-2xl mx-auto">
        A broad tooling spectrum across programming, web stacks,
        AI/ML workflows, and development platforms.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">

      {/* Programming */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:bg-white/[0.05] transition duration-500">
        <h3 className="text-2xl font-bold mb-5">
          Programming
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Python",
            "Java",
            "SQL",
            "JavaScript",
            "DBMS",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] text-gray-300 hover:border-cyan-400 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:bg-white/[0.05] transition duration-500">
        <h3 className="text-2xl font-bold mb-5">
          Web Development
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "HTML",
            "CSS",
            "Node.js",
            "MongoDB",
            "React",
            "Next.js",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] text-gray-300 hover:border-cyan-400 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* AI / ML */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:bg-white/[0.05] transition duration-500">
        <h3 className="text-2xl font-bold mb-5">
          AI / ML
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "Machine Learning",
            "Deep Learning",
            "Computer Vision",
            "YOLOv8",
            "TensorFlow",
            "PyTorch",
            "NumPy",
            "Pandas",
            "OpenCV",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] text-gray-300 hover:border-cyan-400 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-6 hover:bg-white/[0.05] transition duration-500">
        <h3 className="text-2xl font-bold mb-5">
          Tools & Platforms
        </h3>

        <div className="flex flex-wrap gap-3">
          {[
            "VS Code",
            "Git",
            "GitHub",
            "MySQL",
            "AWS",
          ].map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] text-gray-300 hover:border-cyan-400 hover:text-white transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Experience */}
      <section
        id="experience"
        className="py-28 px-6 border-t border-white/10"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Experience
          </h2>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
            <h3 className="text-2xl font-semibold mb-2">
              NRSC, ISRO Internship
            </h3>

            <p className="text-cyan-400 mb-6">May 2025 - June 2025</p>

            <ul className="space-y-4 text-gray-400 leading-relaxed">
              <li>
                • Worked on SAR ship detection using YOLOv8 and MAESTRO
                transformer models.
              </li>

              <li>
                • Implemented image preprocessing, MBR-based post-processing,
                and evaluation metrics.
              </li>

              <li>
                • Developed automation scripts for annotation conversion and
                ship dimension calculation using OpenCV.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/10 transition duration-500 hover:-translate-y-2"
              >
                <div className="h-2 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mb-6" />

                <h3 className="text-2xl font-semibold mb-4 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-2 rounded-xl text-sm bg-black border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="py-28 px-6 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">
            Education
          </h2>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                B.Tech – Artificial Intelligence & Machine Learning
              </h3>

              <p className="text-cyan-400 mt-2">
              Malla Reddy University, Hyderabad
              </p>

              <p className="text-gray-400 mt-4">
                CGPA : 8.65  <br />
                2022 - 2026
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Senior Secondary (XII), MPC Stream
              </h3>

              <p className="text-cyan-400 mt-2">
                Sri Chaitanya Junior College
              </p>
              


              <p className="text-gray-400 mt-4">
                CGPA : 886 <br />
                2020-2022
              </p>
            </div>

             <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold">
                Secondary (X)
              </h3>

              <p className="text-cyan-400 mt-2">
                Sri Vatsal Gurukul Vidyalaya
              </p>

              <p className="text-gray-400 mt-4">
                CGPA : 77 <br />
                2019-2020
              </p>
            </div>

          </div>
        </div>
      </section>

       {/* Certifications */}
<section
  id="certifications"
  className="py-32 px-6 border-t border-white/10 relative overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />

  <div className="max-w-7xl mx-auto relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
        Training &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Certifications
        </span>
      </h2>

      <p className="text-gray-400 text-lg max-w-3xl mx-auto">
        Structured learning experiences across cloud computing,
        Artificial Intelligence, and modern development technologies.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">

      {/* AWS */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:bg-white/[0.05] transition duration-500">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold">
            Amazon Web Services
          </h3>

          <p className="text-gray-400">
            2025
          </p>
        </div>

        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            AWS Cloud Practitioner Essentials
          </li>

          <ul className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            AWS Academy Cloud Foundations
          </li>
          
          

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Cloud concepts, pricing, architecture & security
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Core AWS services and deployment workflows
          </li>
          </ul>
        </ul>
      </div>

      {/* GDSC */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:bg-white/[0.05] transition duration-500">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold">
            Google Developer Student Clubs
          </h3>

          <p className="text-gray-400">
            2024
          </p>
        </div>

        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Google Cloud GenAI Workshop
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Hands-on experience with Generative AI models
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Cloud deployment using Google Cloud Platform (GCP)
          </li>
        </ul>
      </div>

      {/* Coursera AI */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:bg-white/[0.05] transition duration-500">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold">
            Artificial Intelligence
          </h3>

          <p className="text-gray-400">
            2023
          </p>
        </div>

        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Introduction to Artificial Intelligence
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Search algorithms & knowledge representation
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Basic Machine Learning concepts and AI systems
          </li>
        </ul>
      </div>

      {/* Extra */}
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-8 hover:bg-white/[0.05] transition duration-500">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-3xl font-bold">
            Additional Learning
          </h3>

          <p className="text-gray-400">
          </p>
        </div>

        <ul className="space-y-4 text-gray-300">
          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Deep Learning & Computer Vision
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            SAR Image Processing & YOLOv8
          </li>

          <li className="flex gap-3">
            <span className="text-cyan-400">•</span>
            Research in AI systems and intelligent automation
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

{/* Contact */}
<section
  id="contact"
  className="py-20 px-6 border-t border-white/10 relative overflow-hidden"
>
  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-purple-500/10 blur-3xl" />

  <div className="max-w-4xl mx-auto relative z-10 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
      Let’s{" "}
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
        Collaborate
      </span>
    </h2>

    <p className="text-gray-400 text-base leading-relaxed max-w-2xl mx-auto mb-10">
      Open to internships, freelance builds,
      research collaboration, and AI product development.
    </p>

    <div className="grid md:grid-cols-3 gap-5">

      {/* Gmail */}
      <a
        href="https://mail.google.com/mail/?view=cm&fs=1&to=vkrvkr2004@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:bg-white/[0.06] transition duration-300"
      >
        <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
          Email Me
        </h3>
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/KVamshiKrishnaReddy"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:bg-white/[0.06] transition duration-300"
      >
        <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
          GitHub
        </h3>
      </a>

      {/* Resume */}
      <a
        href="/Vamshi_resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-xl p-5 hover:bg-white/[0.06] transition duration-300"
      >
        <h3 className="text-lg font-semibold group-hover:text-cyan-400 transition">
          Resume
        </h3>
      </a>

    </div>
  </div>
</section>


      

      {/* Footer */}
      <footer className="py-10 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2026 Vamshi Krishna Reddy. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}