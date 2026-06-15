type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="text-sm font-black uppercase tracking-[0.18em] text-clay">{eyebrow}</p> : null}
      <h2 className="mt-3 text-3xl font-black tracking-normal text-ink md:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-7 text-ink/70">{children}</p> : null}
    </div>
  );
}
