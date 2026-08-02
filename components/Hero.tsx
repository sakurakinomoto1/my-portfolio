import Image from "next/image";

export default function Hero() {
  const highlightBlock =
    "bg-accent-primary px-2 rounded-md border-2 border-dark inline-block";
  const links =
    "inline-flex items-center gap-2 font-display font-bold text-[0.95rem] px-5.5 py-3 border-2 border-dark rounded-xl shadow-hard-med transition duration-120 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-xsm active:translate-x-1 active:translate-y-1 active:shadow-none";
  return (
    <section id="home" className="pt-8 pb-20">
      <div className="max-w-295 mx-auto px-7 grid grid-cols-[1.05fr_0.95fr] gap-12 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-accent-quaternary-deep inline-flex items-center gap-1.5">
            CS junior · Houston, TX
          </span>
          <h1 className="font-display font-bold text-[3.3rem] mt-3.5">
            I build <span className={highlightBlock}>quality</span> applications
            that serve <span className={highlightBlock}>communities</span>
          </h1>
          <p className="text-base max-w-120 mt-4.5 text-[#43485f]">
            I&apos;m a Computer Science student at the University of Houston who
            loves building technology that solves real problems, empowers
            communities, and puts people first.
          </p>

          <div className="inline-flex items-center gap-2 mt-4.5 bg-card border-2 border-dark rounded-full pl-2.5 pr-3.5 py-1.5 font-mono text-[0.78rem] shadow-hard-sm">
            <span className="w-2.25 h-2.25 rounded-full bg-accent-tertiary border-[1.5px] border-dark"></span>
            <span>Open to Software Engineering Internships - Summer 2027</span>
          </div>
          <div className="flex gap-3.5 mt-7 flex-wrap">
            <a href="#projects" className={`${links} bg-accent-secondary`}>
              See my work →
            </a>
            <a href="#contact" className={`${links} bg-card`}>
              Let&apos;s connect
            </a>
            <a href="/resume.pdf" download className={`${links} bg-card`}>
              Resume ↓
            </a>
          </div>
        </div>
        <div>
          <span>hi, it&apos;s me!</span>
          <div>
            <Image
              src="/fariha_adil.jpg"
              alt="Fariha Adil"
              width={300}
              height={300}
            />
            <div>
              <strong>2027</strong>
              <span>UH · CS Grad</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
