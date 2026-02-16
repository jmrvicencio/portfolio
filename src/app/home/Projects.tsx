import { ProjectDetails } from '@/types/projects';

import keepintabs1 from '/images/screenshots/keepintabs/1.png';
import keepintabs2 from '/images/screenshots/keepintabs/2.png';
import keepintabs3 from '/images/screenshots/keepintabs/3.png';

export const keepinTabs: ProjectDetails = {
  links: {
    live: 'asd',
    github: 'asd',
  },
  title: 'Keepin Tabs',
  desc: (
    <p key="keepin-tabs">
      A simple bill splitting app for sharing your expenses and{' '}
      <span className="text-accent-400 font-bold">Keepin&apos;</span> track of your{' '}
      <span className="text-accent-400 font-bold">Tabs</span> with each other
      <br className="mb-4" />
      Creates groups and simplifies the budget to avoid cyclical repayments of debts!{' '}
    </p>
  ),
  screenshots: [keepintabs1, keepintabs2, keepintabs3],
  techStack: [
    'React',
    'Firebase',
    'Firestore',
    'TailwindCSS',
    'Vite',
    'Typescript',
    'React Router DOM',
    'Jotai',
    'Figma',
  ],
};

export const guadalupe: ProjectDetails = {
  links: {
    live: 'asd',
  },
  title: 'Guadalupe Dried Mangos',
  desc: <p key="guadalupe">Official website for the Guadalupe Dried Mangoes brand.</p>,
  screenshots: [keepintabs1, keepintabs2, keepintabs3],
  techStack: [
    'React',
    'Framer Motion',
    'TailwindCSS',
    'Vite',
    'Typescript',
    'React Router DOM',
  ],
};

export const projects = [keepinTabs, guadalupe, keepinTabs];
