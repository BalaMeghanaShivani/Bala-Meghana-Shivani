import { motion } from "framer-motion";
import { Building2, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Accenture",
    role: "Data Engineering Associate",
    location: "Hyderabad, India",
    period: "Jul 2022 – Jul 2023",
    narrative:
      "Worked as a data engineer across multiple telecom client initiatives, gaining exposure to core data infrastructure, analytics enablement, and machine-learning–driven forecasting. Responsibilities extended beyond building ETL pipelines to include data modeling for BI, operationalizing ML workflows, and ensuring that technical outputs translated into insights business teams could trust and act on. Regularly collaborated with data scientists, analysts, and client stakeholders, adapting solutions based on reliability, performance, and usability requirements.",
    skills: [
      "Python",
      "SQL",
      "Airflow",
      "ETL Architecture",
      "PySpark",
      "PostgreSQL",
      "Data Quality & Validation",
      "Tableau",
      "Feature Engineering",
      "Time Series Forecasting",
      "XGBoost",
      "LSTM"
    ],
    achievements: [
      "Improved reliability and performance of ETL pipelines processing 1M+ telecom records, reducing end-to-end latency by ~20% and stabilizing SLA delivery",
      "Supported demand forecasting initiatives by building and integrating XGBoost and LSTM models, achieving ~18% improvement in forecast accuracy over legacy approaches",
      "Enabled faster, self-serve decision-making by delivering BI-ready datasets and Tableau dashboards, reducing dependence on manual reporting and accelerating decisions by ~30%"
    ]
  },
  {
    company: "Verzeo",
    role: "ML Engineer Intern",
    location: "Hyderabad, India",
    period: "May 2020 – Jul 2020",
    narrative:
      "Worked on applied machine learning projects focused on improving student engagement and retention for an ed-tech platform. The role covered the full ML lifecycle—from problem framing and feature design to model development, evaluation, and experimentation. Collaborated closely with product and engineering teams to ensure models were interpretable, measurable, and aligned with real business goals rather than existing only as technical prototypes.",
    skills: [
      "Python",
      "PyTorch",
      "BiLSTM",
      "SQL",
      "A/B Testing",
      "Data Analysis",
      "Model Evaluation",
      "NLP Fundamentals"
    ],
    achievements: [
      "Built a BiLSTM-based student dropout prediction model capturing temporal engagement patterns, contributing to a ~22% reduction in churn during pilot deployment",
      "Designed and analyzed SQL-based A/B tests on ~10K users to evaluate engagement interventions, leading to a ~15% increase in active users",
      "Developed strong foundations in experimental design, model evaluation, and translating ML outputs into actionable product decisions"
    ]
  },
  {
    company: "San Jose State University",
    role: "Teaching Assistant",
    location: "San Jose, CA",
    period: "Aug 2023 – May 2025",
    narrative:
      "Served as the primary instructor for College Algebra and Calculus courses, independently leading classes, designing lesson plans, and assessing student performance. Took ownership of classroom outcomes by setting academic expectations, managing diverse learning needs, and building student confidence in problem-solving. This role emphasized leadership, structured thinking, and clear communication—skills directly transferable to technical leadership and cross-functional collaboration.",
    skills: [
      "Calculus",
      "Linear Algebra",
      "Statistics",
      "Probability Theory",
      "Python",
      "R",
      "Instructional Design",
      "Leadership",
      "Mentoring",
      "Technical Communication"
    ],
    achievements: [
      "Led instruction for classes of 30+ students, independently planning lectures, assessments, and problem-solving workshops",
      "Improved student comprehension and confidence by breaking complex concepts into step-by-step frameworks and real-world analogies",
      "Developed strong leadership and facilitation skills through classroom management, one-on-one mentoring, and academic decision-making"
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

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {exp.narrative}
              </p>

              <div className="mb-4">
                <p className="text-sm font-semibold text-foreground mb-2">Skills & Tools Used:</p>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-muted text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-foreground mb-2">Key Achievements:</p>
                <ul className="space-y-2">
                  {exp.achievements.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
