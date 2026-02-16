export interface ProjectDetails {
  links: {
    live?: string;
    github?: string;
  };
  title: string;
  desc: ReactNode;
  screenshots: [Screenshot, Screehshot, Screenshot];
  techStack: string[];
}

type Screenshot = string;
