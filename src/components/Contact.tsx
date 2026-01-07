import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 md:px-12 lg:px-24 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="section-heading">Let's Connect</h2>
        <p className="text-muted-foreground text-lg mb-8">
          Open to opportunities in Data Science, ML Engineering, and AI roles.
        </p>

        <a
          href="mailto:balashivani30@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity text-lg"
        >
          <Mail size={20} />
          balashivani30@gmail.com
        </a>

        <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://github.com/BalaMeghanaShivani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bala-meghana-shivani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={20} />
            <span className="text-sm">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
