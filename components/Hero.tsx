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
            loves creating technology that solves real problems, empowers
            communities, and puts people first. I love learning new tech and
            building fun projects! When I&apos;m not coding, you can usually
            find me binge-watching anime, baking, or lost in a good book.
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
        <div className="relative flex justify-center">
          <span className="absolute -top-7.5 left-1.5 font-handwritten text-xl text-accent-quaternary-deep -rotate-6 z-10">
            hi, it&apos;s me!
          </span>
          <svg
            className="absolute -top-2 left-14 w-20 h-24 text-accent-quaternary-deep z-10 -scale-y-100"
            viewBox="0 0 1053 1140"
            fill="currentColor"
          >
            <path d="M24.88 1139.83C20.93 1139.83 16.98 1139.83 13.03 1139.83C8.74 1139.55 4.45 1139.27 0.17 1138.99C0.17 1136.66 0.17 1134.33 0.17 1131.99C1.51 1127.84 0.71 1122.93 1.24 1118.53C2.89 1104.89 3.77 1091.09 6.18 1077.55C12.55 1041.87 20.88 1006.83 33.15 972.63C72.2 863.85 143.53 769.31 237.15 701.64C258.73 686.04 281.68 672.08 305.26 659.73C316.07 654.07 327.72 649.57 338.26 643.5C336 621.77 333.1 602.7 334.29 580.5C337.13 527.25 352.98 475.11 373.76 426.26C430.33 293.25 536.51 183.01 667.77 122.3C724.37 96.12 784.79 79.16 846.54 71.22C869.76 68.24 893.12 67.76 916.5 66.94C917.18 63.21 916.99 59.32 917.23 55.5C918 43.51 918.29 31.5 918.81 19.5C919.06 13.75 917.76 5.65 920.5 0.66C951.39 18.85 981.1 39.14 1011.6 57.96C1020.85 63.67 1029.96 69.59 1039.16 75.36C1043.38 78.01 1049.32 80.52 1052.14 84.5C1019.84 101.08 987.86 118.33 955.73 135.23C946.57 140.05 937.47 145.02 928.26 149.74C923.63 152.11 918.58 155.91 913.5 156.67C914.19 134.95 914.87 113.22 915.56 91.5C874.26 90.39 831.57 96.85 791.44 105.83C618.17 144.59 474.39 264.29 400.83 425.31C378.92 473.27 361.37 526.55 358.92 579.5C358.31 592.62 358.26 605.48 359.66 618.56C360.19 623.48 360.07 629.04 362.14 633.5C373.78 630.23 385.09 624.94 396.68 621.25C423.04 612.86 450.1 605.85 477.47 601.8C498.49 598.69 520.2 595.77 541.48 599.11C556.27 601.42 571.09 606.25 583.33 615.12C610.96 635.14 621.13 671.99 612.84 704.43C597.76 763.44 534.49 796.23 476.5 789.91C460.86 788.21 445.09 782.66 431.21 775.32C399.22 758.41 373.4 730.54 357.16 698.33C352.14 688.38 348.67 678 344.5 667.73C333.75 671.57 323.41 677.5 313.35 682.88C289.89 695.44 267.25 709.53 245.89 725.41C151.29 795.77 79.76 895.82 46.71 1009.27C37.88 1039.6 31.64 1070.13 27.78 1101.47C26.24 1114.04 24.16 1127.15 24.88 1139.83ZM367.34 658.5C381.05 703.21 413.41 745.09 458.73 760.75C511.36 778.94 583.37 749.44 590.87 689.49C594.82 657.84 574.79 629.83 543.37 624.31C504.79 617.54 456.75 628.95 419.44 639.87C406.46 643.67 393.71 647.89 380.99 652.49C376.66 654.06 370.63 655.29 367.34 658.5Z" />
          </svg>
          <div className="relative w-75 aspect-square bg-card border-2 border-dark rounded-2xl shadow-hard-lg">
            <div className="relative w-full h-full overflow-hidden rounded-xl">
              <Image
                className="object-cover"
                src="/fariha_adil.jpg"
                alt="Fariha Adil"
                fill
              />
            </div>
            <div className="absolute -bottom-5.5 -right-4.5 bg-accent-secondary border-2 border-dark rounded-xl px-4 py-3 shadow-hard text-center min-w-25">
              <strong className="block font-display text-xl leading-none">
                2027
              </strong>
              <span className="font-mono text-[0.65rem] uppercase tracking-wide text-accent-quaternary-deep">
                UH · CS Grad
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
