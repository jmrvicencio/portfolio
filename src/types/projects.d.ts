export interface ProjectDetails {
  monitorImg: string;
  links: {
    live?: string;
    github?: string;
  };
  title: string;
  desc: ReactNode;
  screenshots: {
    type: 'portrait' | 'landscape';
    images: Screenshot[];
  };
  techStack: string[];
}

type Screenshot = string;
