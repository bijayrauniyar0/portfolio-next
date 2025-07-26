import AnimatedSection from "../AnimatedSection";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <main className="container mx-auto px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <AnimatedSection animation="scale" delay={200}>
            <div className="mb-8 relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center text-4xl md:text-5xl font-bold text-foreground">
                  👋
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-background animate-pulse"></div>
            </div>
          </AnimatedSection>

          {/* Main Heading */}
          <AnimatedSection animation="fadeUp" delay={400}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                Bijay
              </span>
            </h1>
          </AnimatedSection>

          {/* Subtitle */}
          <AnimatedSection animation="fadeUp" delay={600}>
            <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed max-w-2xl mx-auto">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
          </AnimatedSection>

          {/* Description */}
          <AnimatedSection animation="fadeUp" delay={800}>
            <p className="text-lg md:text-xl text-foreground/60 mb-12 leading-relaxed max-w-3xl mx-auto">
              I craft beautiful, functional, and user-centered digital
              experiences. Passionate about creating innovative solutions that
              make a difference.
            </p>
          </AnimatedSection>

          {/* CTA Buttons */}
          <AnimatedSection animation="fadeUp" delay={1000}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-foreground text-background rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-foreground/20"
              >
                <span className="relative z-10">View My Work</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border-2 border-foreground/20 text-foreground rounded-full font-semibold text-lg transition-all duration-300 hover:border-foreground/40 hover:bg-foreground/5 hover:scale-105"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>

          {/* Skills Pills */}
          <AnimatedSection animation="fadeUp" delay={1200}>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {[
                "React",
                "Next.js",
                "TypeScript",
                "Node.js",
                "Python",
                "UI/UX",
              ].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-foreground/10 text-foreground/70 rounded-full text-sm font-medium hover:bg-foreground/20 transition-colors duration-300 cursor-default"
                  style={{
                    animationDelay: `${1400 + index * 100}ms`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Scroll Indicator */}
          <AnimatedSection animation="fadeIn" delay={1600}>
            <div className="flex flex-col items-center">
              <p className="text-foreground/50 text-sm mb-2">
                Scroll to explore
              </p>
              <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-foreground/40 rounded-full mt-2 animate-bounce"></div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;
