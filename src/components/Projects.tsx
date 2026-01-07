import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "MindBot",
    subtitle: "Dual-Agent Journaling & Behavior Analytics",
    description:
      "A dual-agent journaling system integrating an empathetic Companion and analytical Historian agent using FastAPI, OpenAI GPT-4, and Chroma DB. Features context-aware reflections, emotion tracking, and long-term conversational memory.",
    tech: ["MCP", "NVIDIA NIM", "FastAPI", "GPT-4", "Chroma DB", "Transformers"],
    github: "https://github.com/devamsheth0806/MindBot",
    featured: true
  },
  {
    title: "TaskForge",
    subtitle: "AI Team of Specialists Collaboration Simulator",
    description:
      "A full-stack multi-agent collaboration platform built with Next.js 14, TypeScript, and FastAPI. Features role-based agent reasoning with PM, Researcher, Coder, and Reviewer agents coordinating through WebSockets.",
    tech: ["React", "TypeScript", "Tailwind", "FastAPI", "MongoDB", "GPT-4"],
    github: "https://github.com/BalaMeghanaShivani/taskforge",
    featured: true
  },
  {
    title: "SplitSight",
    subtitle: "Expense Analytics Platform",
    description:
      "An intelligent expense tracking and analytics platform with advanced visualization capabilities for personal finance management.",
    tech: ["Python", "Data Visualization", "Analytics"],
    github: "https://github.com/BalaMeghanaShivani/Splitsight",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="mono text-primary text-xl">03.</span>
          <span>Featured Projects</span>
        </h2>

        <div className="space-y-24">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image/Visual */}
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:order-2 md:col-start-6" : ""
                }`}
              >
                <div className="relative group">
                  <div className="glass-card p-8 aspect-video flex items-center justify-center bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="text-center">
                      <Folder className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                      <span className="mono text-2xl gradient-text font-semibold">
                        {project.title}
                      </span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Project Info */}
              <div
                className={`md:col-span-6 ${
                  index % 2 === 1
                    ? "md:order-1 md:col-start-1"
                    : "md:col-start-6"
                } md:row-start-1`}
              >
                <p className="mono text-primary text-sm mb-2">Featured Project</p>
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.subtitle}</p>

                <div className="glass-card p-5 mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div
                  className={`flex flex-wrap gap-2 mb-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="mono text-xs text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-end" : ""
                  }`}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-24">
            <h3 className="text-xl font-semibold text-center mb-10">
              Other Noteworthy Projects
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherProjects.map((project, index) => (
                <motion.a
                  key={index}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="glass-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <Folder className="text-primary" size={40} />
                    <Github
                      size={20}
                      className="text-muted-foreground group-hover:text-primary transition-colors"
                    />
                  </div>

                  <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="mono text-xs text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
