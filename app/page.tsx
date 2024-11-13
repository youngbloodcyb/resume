import { intro, work, education } from "@/lib/content";

export default function Home() {
  return (
    <main className="grid gap-8 max-w-3xl text-sm p-8">
      <section className="grid gap-4">
        <div className="flex gap-4 justify-between items-center">
          <div className="flex items-center justify-between">
            <h1>{intro.name}</h1>
          </div>

          <div className="nav-links flex gap-4">
            <a
              className="text-muted-foreground hover:text-foreground transition-all"
              href={intro.href}
              target="_blank"
            >
              Portfolio
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition-all"
              href={intro.github}
              target="_blank"
            >
              Github
            </a>
            <a
              className="text-muted-foreground hover:text-foreground transition-all"
              href={intro.linkedin}
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <p className="text-muted-foreground">{intro.about}</p>
      </section>

      <section>
        <h2>Work</h2>
        <div className="grid divide-y">
          {work.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div className="grid divide-y">
          {education.map((item) => (
            <Item key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
}

const Item = ({
  title,
  date,
  description,
  href,
}: {
  title: string;
  date: string;
  description: string[];
  href?: string;
}) => {
  return (
    <div className="grid grid-cols-[1fr_2fr] py-3 gap-2">
      <div>
        <h3 className="font-medium">
          {href ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 decoration-muted-foreground/10 hover:decoration-muted-foreground transition-all"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p className="text-muted-foreground text-xs">{date}</p>
      </div>
      <ul>
        {description.map((item) => (
          <li key={item}>
            <span className="text-muted-foreground/50 text-xs">{">"}</span>{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
