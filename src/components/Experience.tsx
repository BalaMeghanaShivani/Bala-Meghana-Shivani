import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "Data Engineering Associate",
    location: "Hyderabad, India",
    period: "Jul 2022 – Jul 2023",
    highlights: [
      "Built ETL pipelines processing 1M+ telecom records → 20% latency reduction",
      "Developed forecasting engine (XGBoost + LSTM) → 18% accuracy improvement",
      "Created Tableau dashboards → 30% faster decision-making",
    ]
  },
  {
    company: "Verzeo",
    role: "ML Engineer Intern",
    location: "Hyderabad, India",
    period: "May 2020 – Jul 2020",
    highlights: [
      "Built BiLSTM model for student dropout prediction → 22% churn reduction",
      "Ran SQL-based A/B tests on 10K users → 15% increase in active users",
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="section-heading text-center">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-background rounded-xl p-6 border border-border card-hover"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    <Building2 size={16} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((point, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <span className="text-primary mt-1">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
