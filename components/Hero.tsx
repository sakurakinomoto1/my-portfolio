export default function Hero() {
  const highlightBlock =
    "bg-accent-primary px-2 rounded-md border-2 border-dark inline-block";
  return (
    <section id="home" className="pt-8 pb-20">
      <div>
        <span className="font-mono text-xs uppercase tracking-wider text-accent-quaternary-deep inline-flex items-center gap-1.5">
          {" "}
          CS junior · Houston, TX
        </span>
        <h1 className = "font-display font-bold text-[2.1rem] md:text-[3.3rem] mt-3.5">
          I build <span className={highlightBlock}>quality</span> applications
          that serve <span className={highlightBlock}>communities</span>
        </h1>
        <p>
          I&apos;m a CS student at the University of Houston who enjoys building
          tech that serves real communities and helps people connect with what
          they love.
        </p>

        <div>
          <span></span>
          <span>Open to Software Engineering Internships - Summer 2027</span>
        </div>
        <div>
          <a href="#projects"> See my work → </a>
          <a href="#contact"> Let&apos;s connect </a>
          <a href="/resume.pdf" download>
            {" "}
            Resume ↓{" "}
          </a>
        </div>
      </div>
    </section>
  );
}
