export default function Nav() {
  const navLinksStyle =
    "font-semibold text-sm px-3 py-2 rounded-lg hover:bg-accent-tertiary";
  return (
    <div className="max-w-295 mx-auto px-7 bg-card py-2 border-2 border-dark rounded-2xl shadow-hard">
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
      <a href="#contact" className={navLinksStyle}>
        {" "}
        Contact{" "}
      </a>
    </div>
  );
}
