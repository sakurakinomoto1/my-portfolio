export default function Nav() {
  const navLinksStyle =
    "font-semibold text-[15px] px-3 py-2 rounded-lg hover:bg-accent-tertiary";
  return (
    <nav className="pt-4">
      <div className="w-full max-w-295 mx-auto px-7 bg-card py-2.5 border-2 border-dark rounded-2xl shadow-hard flex items-center justify-between">
        <div className="font-display font-bold text-lg flex items-center gap-2 pt-0.5">
          <span className="w-2.5 h-2.5  bg-accent-primary-deep rounded-full border-[1.7px] border-dark"></span>
          fariha ✦
        </div>

        <div className="flex gap-1 items-center">
          <a href="#home" className={navLinksStyle}>
            {" "}
            Home{" "}
          </a>
          <a href="#about" className={navLinksStyle}>
            {" "}
            About{" "}
          </a>
          <a href="#skills" className={navLinksStyle}>
            {" "}
            Skills{" "}
          </a>
          <a href="#projects" className={navLinksStyle}>
            {" "}
            Projects{" "}
          </a>
        </div>

        <a
          href="#contact"
          className="inline-flex items-center justify-center font-display font-bold text-[15px] px-5.5 pt-3.5 pb-3 border-2 border-dark rounded-xl bg-accent-primary shadow-hard-med transition duration-120 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-hard-xsm active:translate-x-1 active:translate-y-1 active:shadow-none"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
}
