import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Data Scientist • ML Engineer • AI Specialist
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              Bala Meghana
              <span className="gradient-text block">Shivani</span>
            </h1>

            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mb-8 leading-relaxed">
              M.S. Statistics @ <span className="text-highlight">San Jose State University</span>. 
              Building intelligent systems with ML, GenAI, and data engineering.
            </p>

            {/* Key Stats - Recruiter Friendly */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">1M+</p>
                <p className="text-xs text-muted-foreground">Records Processed</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">18%</p>
                <p className="text-xs text-muted-foreground">Accuracy Improvement</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-foreground">3+</p>
                <p className="text-xs text-muted-foreground">AI Projects</p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Get In Touch
                <ArrowRight size={18} />
              </a>
              <a
                href="/Bala_Shivani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                <Download size={18} />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/BalaMeghanaShivani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/bala-meghana-shivani"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:balashivani30@gmail.com"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Profile Photo Placeholder */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border border-border shadow-xl">
                <div className="w-full h-full flex items-center justify-center bg-muted">
                  <span className="text-6xl md:text-7xl font-bold gradient-text">BMS</span>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-primary/20 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
