import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "Data Engineering Associate",
    location: "Hyderabad, Telangana",
    period: "July 2022 – July 2023",
    points: [
      "Designed and implemented distributed ETL pipelines for 1M+ telecom records using Python and SQL on Apache Airflow, reducing data latency by 20%",
      "Developed a high-performance forecasting engine leveraging Python (XGBoost + LSTM) to model seasonal demand, increasing prediction accuracy by 18%",
      "Created Tableau dashboards to analyze telecommunication data, enhancing decision-making efficiency by 30% for senior management",
      "Collaborated with cross-functional teams to translate complex business requirements into effective prompts for LLMs, resulting in a 30% faster project completion rate"
    ]
  },
  {
    company: "Verzeo",
    role: "Machine Learning Engineer Intern",
    location: "Hyderabad, Telangana",
    period: "May 2020 – July 2020",
    points: [
      "Developed and deployed a BiLSTM-based deep learning model using PyTorch to predict student dropout risk in online courses, reducing churn by 22%",
      "Conducted SQL-based A/B testing on a 10K-user cohort; validated results with t-tests and Chi-square tests, resulting in a 15% increase in weekly active users"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading">
          <span className="mono text-primary text-xl">02.</span>
          <span>Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow" />

                <div className="glass-card p-6 hover:border-primary/50 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {exp.role}{" "}
                        <span className="text-primary">@ {exp.company}</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">{exp.location}</p>
                    </div>
                    <span className="mono text-sm text-muted-foreground">{exp.period}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;