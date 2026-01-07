import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="mono text-primary text-xl">01.</span>
          <span>About Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Hello! I'm Shivani, a passionate Data Engineer and AI enthusiast based in San Jose, California.
              Currently pursuing my <span className="text-highlight">Master's in Statistics</span> at San Jose
              State University, I combine statistical rigor with cutting-edge AI/ML technologies to build
              impactful solutions.
            </p>
            <p>
              My journey started at <span className="text-highlight">Accenture</span>, where I designed
              distributed ETL pipelines processing 1M+ telecom records and developed forecasting engines
              that increased prediction accuracy by 18%. I've since expanded into the exciting world of
              Generative AI and multi-agent systems.
            </p>
            <p>
              Here are some technologies I've been working with recently:
            </p>

            <ul className="grid grid-cols-2 gap-2 mono text-sm mt-4">
              {[
                "Python",
                "PyTorch & TensorFlow",
                "LangChain & LangGraph",
                "GPT-4 & LLaMA",
                "FastAPI",
                "Apache Airflow",
                "RAG Systems",
                "Docker & Kubernetes"
              ].map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded-lg overflow-hidden glass-card p-1">
              <div className="bg-gradient-to-br from-primary/20 to-accent/10 rounded-lg aspect-square flex items-center justify-center">
                <span className="text-6xl font-bold gradient-text">BMS</span>
              </div>
            </div>
            <div className="absolute -inset-4 bg-primary/10 rounded-lg blur-xl opacity-50 group-hover:opacity-70 transition-opacity -z-10" />
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary">🎓</span>
              Education
            </h3>
            <div className="space-y-4">
              <div>
                <p className="font-medium">San Jose State University</p>
                <p className="text-sm text-muted-foreground">M.S. in Statistics • 2023 - 2025</p>
              </div>
              <div>
                <p className="font-medium">Anurag Group Of Institutions</p>
                <p className="text-sm text-muted-foreground">B.E. in Computer Science • 2018 - 2022</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-primary">📍</span>
              Location
            </h3>
            <p className="text-muted-foreground">San Jose, California</p>
            <p className="text-sm text-muted-foreground mt-1">Open to opportunities in the Bay Area</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;