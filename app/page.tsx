const intro = {
  name: "Bridger Tower",
  about:
    "I'm a designer and developer specializing in creating intuitive, high-performance software and websites that merge visual excellence with practical functionality. I am passionate about human computer interaction, usability, and aesthetics in software and technology.",
  href: "https://bridger.to",
  github: "https://github.com/brijr",
  linkedin: "https://linkedin.com/in/brdgr",
};

const work = [
  {
    title: "Design Engineer at Ampry",
    href: "https://ampry.com",
    date: "2023 to Present",
    description: [
      "Lead product engineering initiatives and design system architecture",
      "Drive technical implementation of component libraries",
      "Manage end-to-end product development workflows",
    ],
  },
  {
    title: "Design Engineer at 9d8",
    href: "https://9d8.dev",
    date: "2021 to Present",
    description: [
      "Design and develop AI-powered solutions for marketing and sales teams",
      "Create scalable systems that enhance client workflow efficiency",
      "Implement cutting-edge AI technologies in user-friendly interfaces",
    ],
  },
  {
    title: "Design Engineer at Tackle",
    href: "https://tackle.io",
    date: "2022 to 2023",
    description: [
      "Led development of design systems and technical architecture",
      "Improved site performance metrics while scaling development workflows",
      "Implemented automated testing and deployment processes",
    ],
  },
  {
    title: "Founding Designer at Ampry",
    href: "https://ampry.com",
    date: "2020 to 2022",
    description: [
      "Built scalable design systems for CRO tech startup from ground up",
      "Developed and implemented conversion optimization strategies",
      "Assisted in significant conversion improvements across 200+ clients",
    ],
  },
  {
    title: "Designer at Zion",
    href: "https://zion.surf",
    date: "2018 to 2022",
    description: [
      "Collaborated with 100+ brands and marketing agencies",
      "Created cohesive visual narratives across multiple platforms",
      "Mediums include brand, web, social, product, and publication design",
    ],
  },
];

const Education = [
  {
    title: "BA Advertising at BYU",
    date: "2018 to 2022",
    description: [
      "Focus: Brand strategy and communication design",
      "Developed expertise in account leadership and growth marketing",
      "Led multiple award-winning campaign projects",
    ],
  },
  {
    title: "UX Design Certificate at Google",
    date: "2020 to 2021",
    description: [
      "Mastered user journey mapping and wireframing techniques",
      "Completed 5 end-to-end product design projects",
      "Applied UX principles to real-world client challenges",
    ],
  },
];

export default function Home() {
  return (
    <>
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
              >
                Portfolio
              </a>
              <a
                className="text-muted-foreground hover:text-foreground transition-all"
                href={intro.github}
              >
                Github
              </a>
              <a
                className="text-muted-foreground hover:text-foreground transition-all"
                href={intro.linkedin}
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
            {Education.map((item) => (
              <Item key={item.title} {...item} />
            ))}
          </div>
        </section>
      </main>
    </>
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
    <div className="grid grid-cols-[1fr_2fr] py-2 gap-2">
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
