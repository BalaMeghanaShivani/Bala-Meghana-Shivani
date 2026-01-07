import { motion } from "framer-motion";
import { Code, Brain, Database, Cloud, BarChart, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: Code,
    skills: ["Python", "SQL", "JavaScript", "TypeScript", "C++"]
  },
  {
    title: "ML/AI Frameworks",
    icon: Brain,
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "LangChain", "Hugging Face"]
  },
  {
    title: "Generative AI",
    icon: Cpu,
    skills: ["GPT-4", "LLaMA", "RAG", "Prompt Engineering", "Vector DBs"]
  },
  {
    title: "Data Engineering",
    icon: Database,
    skills: ["Airflow", "FastAPI", "ETL Pipelines", "REST APIs", "PostgreSQL"]
  },
  {
    title: "Cloud & MLOps",
    icon: Cloud,
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git"]
  },
  {
    title: "Analytics & BI",
    icon: BarChart,
    skills: ["Tableau", "Power BI", "Pandas", "NumPy", "Matplotlib"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading text-center">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-background rounded-xl p-5 border border-border"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <category.icon size={18} />
                </div>
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
