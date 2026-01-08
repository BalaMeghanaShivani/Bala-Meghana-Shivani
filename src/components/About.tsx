import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: GraduationCap, label: "M.S. Statistics", detail: "San Jose State University" },
    { icon: MapPin, label: "San Jose, CA", detail: "Open to relocation" },
    { icon: Briefcase, label: "Seeking Roles", detail: "Data Science • ML • AI • Data Analyst • Data Engineer" },
  ];

  const techStack = [
    "Python", "PyTorch", "TensorFlow", "LangChain", "GPT-4", "RAG",
    "SQL", "FastAPI", "Docker", "AWS", "Tableau", "Airflow"
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h2 className="section-heading text-center">About Me</h2>

        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
          Data professional with expertise spanning <span className="text-highlight">analytics</span>,
          <span className="text-highlight"> machine learning</span>, and <span className="text-highlight">data engineering</span>.
          Experienced in building ETL pipelines, developing ML models, and creating data-driven solutions that drive business impact.
          Strong foundation in statistics, SQL, Python, and modern AI frameworks, with hands-on experience in both industry and academic settings.
        </p>



        {/* Quick Info Cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-xl p-5 border border-border text-center card-hover"
            >
              <item.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-semibold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wide">Core Technologies</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground hover:border-primary hover:text-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
