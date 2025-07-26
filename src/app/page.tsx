import AnimatedSection from "../components/AnimatedSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-foreground/5 transition-colors duration-300">
      {/* Hero Section */}
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

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-foreground/5 py-20 transition-colors duration-300"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <AnimatedSection animation="fadeUp">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  About{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                    Me
                  </span>
                </h2>
                <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
                  Passionate developer with a love for creating meaningful
                  digital experiences
                </p>
              </div>
            </AnimatedSection>

            {/* Part 1: Image and About Me */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
              {/* Left Column - Image and Stats */}
              <div className="space-y-8 lg:space-y-10">
                {/* Profile Image */}
                <AnimatedSection animation="fadeLeft" delay={200}>
                  <div className="relative">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-1 shadow-2xl">
                      <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center text-6xl sm:text-7xl md:text-8xl">
                        👨‍💻
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6 lg:space-y-8">
                {/* Introduction */}
                <AnimatedSection animation="fadeRight" delay={300}>
                  <div className="space-y-3 lg:space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-semibold text-foreground">
                      Hi there! I&apos;m Bijay 👋
                    </h3>
                    <p className="text-base lg:text-lg text-foreground/70 leading-relaxed">
                      A passionate full-stack developer who loves turning ideas
                      into beautiful, functional applications. With a strong
                      foundation in modern web technologies and a keen eye for
                      design, I create digital experiences that users love.
                    </p>
                    <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                      I enjoy working across the full stack, from crafting
                      intuitive UIs to building robust backend systems. I
                      believe in writing clean, maintainable code and staying
                      updated with the latest trends and best practices.
                    </p>
                  </div>
                </AnimatedSection>

                {/* Download Resume Button */}
                <AnimatedSection animation="fadeUp" delay={500}>
                  <div className="flex justify-center lg:justify-start pt-2">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-sm lg:text-base hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <span>Download Resume</span>
                      <svg
                        className="w-4 h-4 lg:w-5 lg:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                        />
                      </svg>
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Part 2: What I Do Section */}
            <AnimatedSection animation="fadeUp" delay={900}>
              <div className="mt-20 lg:mt-24">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-12 lg:mb-16">
                  What I Do
                </h3>
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                      <span className="text-white text-2xl lg:text-3xl">
                        🎨
                      </span>
                    </div>
                    <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-3">
                      Frontend Development
                    </h4>
                    <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                      Creating responsive, interactive user interfaces with
                      React, Next.js, and modern CSS
                    </p>
                  </div>

                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                      <span className="text-white text-2xl lg:text-3xl">
                        ⚙️
                      </span>
                    </div>
                    <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-3">
                      Backend Development
                    </h4>
                    <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                      Building robust APIs and server-side applications with
                      Node.js, Python, and databases
                    </p>
                  </div>

                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
                      <span className="text-white text-2xl lg:text-3xl">
                        💡
                      </span>
                    </div>
                    <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-3">
                      UI/UX Design
                    </h4>
                    <p className="text-sm lg:text-base text-foreground/60 leading-relaxed">
                      Designing user-centered experiences with attention to
                      usability and aesthetics
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Part 3: My Approach - Process Flow */}
            <AnimatedSection animation="fadeUp" delay={1000}>
              <div className="mt-16 lg:mt-20 mb-16 lg:mb-20">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 lg:mb-12">
                  My Approach
                </h3>

                {/* Desktop Horizontal Flow */}
                <div className="hidden md:block">
                  <div className="relative px-8 lg:px-16">
                    {/* Flow Line - positioned to connect the circles */}
                    <div className="absolute top-8 lg:top-10 left-1/2 transform -translate-x-1/2 w-full max-w-md lg:max-w-xl xl:max-w-3xl h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full z-0" />

                    <div className="relative flex justify-between items-start z-10">
                      {/* Step 1 */}
                      <div className="flex flex-col items-center max-w-xs">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mb-4 lg:mb-6 shadow-lg border-4 border-background relative z-10">
                          <span className="text-white text-xl lg:text-2xl font-bold">
                            1
                          </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-3 text-center">
                          Understand & Plan
                        </h4>
                        <p className="text-sm lg:text-base text-foreground/60 leading-relaxed text-center">
                          I start by deeply understanding your needs and goals,
                          then create a detailed plan that ensures we&apos;re
                          aligned from day one.
                        </p>
                      </div>

                      {/* Step 2 */}
                      <div className="flex flex-col items-center max-w-xs">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center mb-4 lg:mb-6 shadow-lg border-4 border-background relative z-10">
                          <span className="text-white text-xl lg:text-2xl font-bold">
                            2
                          </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-3 text-center">
                          Build & Iterate
                        </h4>
                        <p className="text-sm lg:text-base text-foreground/60 leading-relaxed text-center">
                          Using modern tools and best practices, I build your
                          solution iteratively, keeping you involved throughout
                          the process.
                        </p>
                      </div>

                      {/* Step 3 */}
                      <div className="flex flex-col items-center max-w-xs">
                        <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mb-4 lg:mb-6 shadow-lg border-4 border-background relative z-10">
                          <span className="text-white text-xl lg:text-2xl font-bold">
                            3
                          </span>
                        </div>
                        <h4 className="text-lg lg:text-xl font-semibold text-foreground mb-3 text-center">
                          Deliver & Support
                        </h4>
                        <p className="text-sm lg:text-base text-foreground/60 leading-relaxed text-center">
                          I deliver polished, tested solutions and provide
                          ongoing support to ensure your project continues to
                          succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Vertical Flow */}
                <div className="block md:hidden space-y-8">
                  <div className="relative">
                    {/* Vertical Flow Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b h-4/5 from-blue-500 via-purple-500 to-green-500 rounded-full" />

                    {/* Step 1 */}
                    <div className="flex items-start space-x-4 relative">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg border-4 border-background z-10">
                        <span className="text-white text-xl font-bold">1</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          Understand & Plan
                        </h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          I start by deeply understanding your needs and goals,
                          then create a detailed plan that ensures we&apos;re
                          aligned from day one.
                        </p>
                      </div>
                    </div>

                    {/* Step 2 */}
                    <div className="flex items-start space-x-4 relative mt-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg border-4 border-background z-10">
                        <span className="text-white text-xl font-bold">2</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          Build & Iterate
                        </h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          Using modern tools and best practices, I build your
                          solution iteratively, keeping you involved throughout
                          the process.
                        </p>
                      </div>
                    </div>

                    {/* Step 3 */}
                    <div className="flex items-start space-x-4 relative mt-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg border-4 border-background z-10">
                        <span className="text-white text-xl font-bold">3</span>
                      </div>
                      <div className="flex-1 pt-2">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          Deliver & Support
                        </h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          I deliver polished, tested solutions and provide
                          ongoing support to ensure your project continues to
                          succeed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Part 4: Stats Cards */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className="mb-16 lg:mb-20">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 lg:mb-12">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      50+
                    </div>
                    <div className="text-sm lg:text-base text-foreground/60">
                      Projects Completed
                    </div>
                  </div>
                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      15+
                    </div>
                    <div className="text-sm lg:text-base text-foreground/60">
                      Technologies
                    </div>
                  </div>
                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      3+
                    </div>
                    <div className="text-sm lg:text-base text-foreground/60">
                      Years Experience
                    </div>
                  </div>
                  <div className="text-center p-6 lg:p-8 bg-background/60 backdrop-blur-sm rounded-2xl border border-foreground/10 hover:border-foreground/30 transition-all duration-300 hover:scale-105">
                    <div className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
                      ∞
                    </div>
                    <div className="text-sm lg:text-base text-foreground/60">
                      Learning & Growing
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Education & Experience Timeline */}
            <AnimatedSection animation="fadeUp" delay={800}>
              <div className="mt-16 lg:mt-20">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-8 lg:mb-12">
                  My Journey
                </h3>
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full" />

                  <div className="space-y-8 lg:space-y-12">
                    {/* Timeline Item 1 */}
                    <AnimatedSection animation="fadeRight" delay={1000}>
                      <div className="flex items-center relative">
                        {/* Mobile Center Layout */}
                        <div className="block lg:hidden w-full">
                          <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl p-4 shadow-lg mx-4">
                            <h4 className="font-semibold text-foreground text-sm text-center">
                              Computer Science Degree
                            </h4>
                            <p className="text-foreground/60 text-xs text-center">
                              University Name • 2020-2024
                            </p>
                            <p className="text-foreground/70 text-xs mt-2 text-center">
                              Graduated with honors, specializing in software
                              engineering and web development
                            </p>
                          </div>
                        </div>

                        {/* Desktop Left/Right Layout */}
                        <div className="hidden lg:flex lg:items-center lg:relative lg:w-full">
                          <div className="flex-1 text-right pr-8">
                            <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 shadow-lg">
                              <h4 className="font-semibold text-foreground text-base">
                                Computer Science Degree
                              </h4>
                              <p className="text-foreground/60 text-sm">
                                University Name • 2020-2024
                              </p>
                              <p className="text-foreground/70 text-sm mt-2">
                                Graduated with honors, specializing in software
                                engineering and web development
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 pl-8"></div>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-blue-500 rounded-full border-3 lg:border-4 border-background z-10 max-lg:hidden" />
                      </div>
                    </AnimatedSection>

                    {/* Timeline Item 2 */}
                    <AnimatedSection animation="fadeLeft" delay={1200}>
                      <div className="flex items-center relative">
                        {/* Mobile Center Layout */}
                        <div className="block lg:hidden w-full">
                          <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl p-4 shadow-lg mx-4">
                            <h4 className="font-semibold text-foreground text-sm text-center">
                              Frontend Developer
                            </h4>
                            <p className="text-foreground/60 text-xs text-center">
                              Tech Company • 2022-2023
                            </p>
                            <p className="text-foreground/70 text-xs mt-2 text-center">
                              Developed responsive web applications using React
                              and modern JavaScript
                            </p>
                          </div>
                        </div>

                        {/* Desktop Left/Right Layout */}
                        <div className="hidden lg:flex lg:items-center lg:relative lg:w-full">
                          <div className="flex-1 pr-8"></div>
                          <div className="flex-1 pl-8">
                            <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 shadow-lg">
                              <h4 className="font-semibold text-foreground text-base">
                                Frontend Developer
                              </h4>
                              <p className="text-foreground/60 text-sm">
                                Tech Company • 2022-2023
                              </p>
                              <p className="text-foreground/70 text-sm mt-2">
                                Developed responsive web applications using
                                React and modern JavaScript
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-purple-500 rounded-full border-3 lg:border-4 border-background z-10 max-lg:hidden" />
                      </div>
                    </AnimatedSection>

                    {/* Timeline Item 3 */}
                    <AnimatedSection animation="fadeRight" delay={1400}>
                      <div className="flex items-center relative">
                        {/* Mobile Center Layout */}
                        <div className="block lg:hidden w-full">
                          <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl p-4 shadow-lg mx-4">
                            <h4 className="font-semibold text-foreground text-sm text-center">
                              Full-Stack Developer
                            </h4>
                            <p className="text-foreground/60 text-xs text-center">
                              Freelance • 2023-Present
                            </p>
                            <p className="text-foreground/70 text-xs mt-2 text-center">
                              Building end-to-end solutions for clients across
                              various industries
                            </p>
                          </div>
                        </div>

                        {/* Desktop Left/Right Layout */}
                        <div className="hidden lg:flex lg:items-center lg:relative lg:w-full">
                          <div className="flex-1 text-right pr-8">
                            <div className="bg-background/80 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 shadow-lg">
                              <h4 className="font-semibold text-foreground text-base">
                                Full-Stack Developer
                              </h4>
                              <p className="text-foreground/60 text-sm">
                                Freelance • 2023-Present
                              </p>
                              <p className="text-foreground/70 text-sm mt-2">
                                Building end-to-end solutions for clients across
                                various industries
                              </p>
                            </div>
                          </div>
                          <div className="flex-1 pl-8"></div>
                        </div>

                        <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full border-3 lg:border-4 border-background z-10 max-lg:hidden" />
                      </div>
                    </AnimatedSection>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="min-h-screen flex items-center justify-center transition-colors duration-300"
      >
        <AnimatedSection animation="fadeUp">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <p className="text-foreground/70">Coming soon...</p>
          </div>
        </AnimatedSection>
      </section>

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

            {/* Skills Overview */}
            <div className="space-y-16 md:space-y-20">
              {/* Tech Stack */}
              <AnimatedSection animation="fadeUp" delay={200}>
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Tech Stack
                  </h3>
                  <p className="text-foreground/60 max-w-2xl mx-auto mb-8">
                    The technologies I use to build modern, scalable
                    applications
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                  {/* Frontend */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <div className="text-3xl">🎨</div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Frontend
                    </h4>
                    <div className="space-y-2 text-foreground/70">
                      <div className="font-medium">
                        React • Next.js • TypeScript
                      </div>
                      <div>Tailwind CSS • Framer Motion</div>
                      <div>Responsive Design • PWAs</div>
                    </div>
                  </div>

                  {/* Backend */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                      <div className="text-3xl">⚙️</div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Backend
                    </h4>
                    <div className="space-y-2 text-foreground/70">
                      <div className="font-medium">
                        Node.js • Python • Express
                      </div>
                      <div>REST APIs • GraphQL</div>
                      <div>Database Design • Authentication</div>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                      <div className="text-3xl">🛠️</div>
                    </div>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Tools & Cloud
                    </h4>
                    <div className="space-y-2 text-foreground/70">
                      <div className="font-medium">AWS • Docker • Git</div>
                      <div>Vercel • MongoDB • PostgreSQL</div>
                      <div>Figma • VS Code • Jest</div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Skills Grid */}
              <AnimatedSection animation="fadeUp" delay={400}>
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Core Expertise
                  </h3>
                  <p className="text-foreground/60 max-w-2xl mx-auto">
                    Key technologies and frameworks I work with daily
                  </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
                  {[
                    { name: "React", color: "from-blue-500 to-cyan-500" },
                    { name: "Next.js", color: "from-gray-700 to-gray-900" },
                    { name: "TypeScript", color: "from-blue-600 to-blue-800" },
                    { name: "Node.js", color: "from-green-500 to-green-700" },
                    { name: "Python", color: "from-yellow-500 to-orange-500" },
                    {
                      name: "Tailwind CSS",
                      color: "from-teal-400 to-blue-500",
                    },
                    { name: "MongoDB", color: "from-green-600 to-green-800" },
                    {
                      name: "PostgreSQL",
                      color: "from-blue-700 to-indigo-700",
                    },
                    { name: "AWS", color: "from-orange-400 to-orange-600" },
                    { name: "Docker", color: "from-blue-400 to-blue-600" },
                    { name: "GraphQL", color: "from-pink-500 to-rose-600" },
                    { name: "Figma", color: "from-purple-500 to-purple-700" },
                  ].map((skill, index) => (
                    <div
                      key={skill.name}
                      className="group relative"
                      style={{ animationDelay: `${600 + index * 50}ms` }}
                    >
                      <div className="px-4 py-3 bg-background/60 backdrop-blur-sm border border-foreground/10 rounded-xl hover:border-foreground/30 transition-all duration-300 hover:scale-105 cursor-default">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-3 h-3 rounded-full bg-gradient-to-r ${skill.color}`}
                          ></div>
                          <span className="font-medium text-foreground">
                            {skill.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>

              {/* What I Bring */}
              <AnimatedSection animation="fadeUp" delay={600}>
                <div className="text-center mb-12">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    What I Bring
                  </h3>
                  <p className="text-foreground/60 max-w-2xl mx-auto">
                    Beyond technical skills, here&apos;s what makes me effective
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                  <div className="text-center p-6 hover:bg-background/20 rounded-2xl transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Problem Solving
                    </h4>
                    <p className="text-sm text-foreground/60">
                      Breaking down complex challenges into manageable solutions
                    </p>
                  </div>

                  <div className="text-center p-6 hover:bg-background/20 rounded-2xl transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      User Focus
                    </h4>
                    <p className="text-sm text-foreground/60">
                      Designing with the end user experience in mind
                    </p>
                  </div>

                  <div className="text-center p-6 hover:bg-background/20 rounded-2xl transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Communication
                    </h4>
                    <p className="text-sm text-foreground/60">
                      Clear communication with teams and stakeholders
                    </p>
                  </div>

                  <div className="text-center p-6 hover:bg-background/20 rounded-2xl transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full"></div>
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      Adaptability
                    </h4>
                    <p className="text-sm text-foreground/60">
                      Quickly learning new technologies and methodologies
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

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
    </div>
  );
}
