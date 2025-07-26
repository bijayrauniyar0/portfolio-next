import AnimatedSection from "../AnimatedSection";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center transition-colors duration-300"
    >
      <AnimatedSection animation="fadeUp">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-foreground/70">Coming soon...</p>
        </div>
      </AnimatedSection>
    </section>
  );
}
