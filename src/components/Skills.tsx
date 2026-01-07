import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript"]
  },
  {
    title: "AI/ML Frameworks",
    skills: ["PyTorch", "TensorFlow", "Scikit-Learn", "Keras", "Hugging Face", "LangChain", "LangGraph"]
  },
  {
    title: "Generative AI & LLMs",
    skills: ["GPT-4", "LLaMA", "Claude", "Prompt Engineering", "RAG", "FAISS", "Pinecone", "Chroma"]
  },
  {
    title: "Machine Learning",
    skills: ["Regression", "Classification", "Clustering", "Recommender Systems", "Anomaly Detection"]
  },
  {
    title: "Deep Learning & NLP",
    skills: ["CNN", "RNN", "LSTM", "Transformers", "Tokenization", "Embeddings"]
  },
  {
    title: "Data Engineering & MLOps",
    skills: ["FastAPI", "Docker", "Kubernetes", "AWS", "CI/CD", "Apache Airflow", "REST APIs"]
  },
  {
    title: "Data Analysis & Tools",
    skills: ["Pandas", "NumPy", "Git", "Linux", "Streamlit"]
  },
  {
    title: "Visualization & BI",
    skills: ["Tableau", "Power BI", "Matplotlib", "Seaborn", "Recharts"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/30">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="mono text-primary text-xl">04.</span>
          <span>Technical Skills</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-5"
            >
              <h3 className="text-sm font-semibold text-primary mb-3 mono">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
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