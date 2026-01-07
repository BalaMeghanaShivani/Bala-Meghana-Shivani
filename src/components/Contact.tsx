import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className="mono text-primary mb-4">05. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          I'm currently looking for new opportunities in Data Engineering, AI/ML, and Generative AI.
          Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>

        <a
          href="mailto:balashivani30@gmail.com"
          className="inline-block px-8 py-4 rounded-md border border-primary text-primary hover:bg-primary/10 transition-colors mono"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mt-12">
          <a
            href="mailto:balashivani30@gmail.com"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Mail size={24} />
            <span className="text-xs mono">Email</span>
          </a>
          <a
            href="https://github.com/BalaMeghanaShivani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Github size={24} />
            <span className="text-xs mono">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/bala-meghana-shivani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
          >
            <Linkedin size={24} />
            <span className="text-xs mono">LinkedIn</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;