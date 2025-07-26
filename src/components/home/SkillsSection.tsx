import AnimatedSection from "../AnimatedSection";

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 bg-foreground/5 transition-colors duration-300"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <AnimatedSection animation="fadeUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                My{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                  Skills
                </span>
              </h2>
              <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                Technologies and tools I use to bring ideas to life
              </p>
            </div>
          </AnimatedSection>

          {/* Skills Categories */}
          <div className="space-y-12 md:space-y-16">
            {/* Core Technologies */}
            <AnimatedSection animation="fadeUp" delay={200}>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center">
                  Core Technologies
                </h3>
                <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3"></div>
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React",
                        "Next.js",
                        "TypeScript",
                        "JavaScript",
                        "Tailwind CSS",
                        "CSS3",
                        "HTML5",
                        "SASS",
                      ].map((skill, index) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-foreground rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:scale-105 cursor-default text-sm"
                          style={{ animationDelay: `${300 + index * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3"></div>
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Node.js",
                        "Python",
                        "Express.js",
                        "MongoDB",
                        "PostgreSQL",
                        "REST APIs",
                        "GraphQL",
                        "Firebase",
                      ].map((skill, index) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 bg-gradient-to-r from-purple-500/10 to-pink-600/10 text-foreground rounded-lg border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 cursor-default text-sm"
                          style={{ animationDelay: `${600 + index * 100}ms` }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Tools & Workflow */}
            <AnimatedSection animation="fadeUp" delay={400}>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center">
                  Tools & Workflow
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* Development Tools */}
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-3 flex items-center">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-green-500 to-blue-600 rounded-full mr-2"></div>
                      Development
                    </h4>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <div>VS Code</div>
                      <div>Git & GitHub</div>
                      <div>Docker</div>
                      <div>Webpack</div>
                    </div>
                  </div>

                  {/* Cloud & Deployment */}
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-3 flex items-center">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mr-2"></div>
                      Cloud & Deployment
                    </h4>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <div>AWS</div>
                      <div>Vercel</div>
                      <div>Netlify</div>
                      <div>Digital Ocean</div>
                    </div>
                  </div>

                  {/* Design & Testing */}
                  <div>
                    <h4 className="text-base font-semibold text-foreground mb-3 flex items-center">
                      <div className="w-2.5 h-2.5 bg-gradient-to-r from-pink-500 to-red-600 rounded-full mr-2"></div>
                      Design & Testing
                    </h4>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <div>Figma</div>
                      <div>Jest</div>
                      <div>Postman</div>
                      <div>Linux</div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Soft Skills & Strengths */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-foreground/10">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6 md:mb-8 text-center">
                  Strengths & Approach
                </h3>
                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {/* Technical Mindset */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full mr-3"></div>
                      Technical Mindset
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Problem Solving",
                        "Critical Thinking",
                        "Code Quality Focus",
                        "Performance Optimization",
                      ].map((skill, index) => (
                        <div
                          key={skill}
                          className="flex items-center text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors duration-300"
                          style={{ animationDelay: `${800 + index * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-emerald-500/60 rounded-full mr-3"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Collaboration */}
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                      <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full mr-3"></div>
                      Collaboration
                    </h4>
                    <div className="space-y-3">
                      {[
                        "Team Leadership",
                        "Clear Communication",
                        "Project Management",
                        "Adaptability",
                      ].map((skill, index) => (
                        <div
                          key={skill}
                          className="flex items-center text-sm md:text-base text-foreground/70 hover:text-foreground transition-colors duration-300"
                          style={{ animationDelay: `${1000 + index * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-amber-500/60 rounded-full mr-3"></div>
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
