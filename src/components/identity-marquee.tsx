type Props = {
  text: string;
  className?: string;
};

export default function IdentityMarquee({ text, className = "" }: Props) {
  const id = "marquee-path";
  const loop = `${text}${text}`;

  return (
    <div className={`identity-marquee ${className}`}>
      <svg
        className="identity-marquee__ring"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <path
            id={id}
            d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            fill="none"
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="19"
          letterSpacing="3.5"
          style={{ fontFamily: "var(--font-geist-mono), ui-monospace, monospace" }}
        >
          <textPath href={`#${id}`} startOffset="0%">
            {loop}
          </textPath>
        </text>
      </svg>
      <div className="identity-marquee__avatar">
        <span className="identity-marquee__glow" aria-hidden />
        <img
          src="/image/harry-cartoon.png"
          alt=""
          width={64}
          height={64}
        />
      </div>
    </div>
  );
}
