import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card py-4" : "py-6"
        }`}
      >
        <nav className="container flex items-center justify-between px-6 md:px-12 lg:px-24">
          <a href="#" className="text-2xl font-bold gradient-text mono">
            BMS
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={item.href}
                  className="mono text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <span className="text-primary">0{index + 1}.</span> {item.label}
                </a>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="/Bala_Shivani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded border border-primary text-primary hover:bg-primary/10 transition-colors mono text-sm"
              >
                Resume
              </a>
            </motion.li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
          >
            <div
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-card p-8 shadow-xl">
              <button
                className="absolute top-6 right-6 text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <nav className="mt-16">
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block mono text-lg text-foreground hover:text-primary transition-colors"
                      >
                        <span className="text-primary text-sm">0{index + 1}.</span>{" "}
                        {item.label}
                      </a>
                    </li>
                  ))}
                  <li className="pt-4">
                    <a
                      href="/Bala_Shivani_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-3 rounded border border-primary text-primary hover:bg-primary/10 transition-colors mono"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;