import { Fragment } from 'react';
import { ProjectDetails } from '@/types/projects';

import keepintabsMonitor from '/images/hero/keepintabs.gif';
import keepintabsGlow from '/images/hero/keepintabs-glow.png';
import keepintabs1 from '/images/screenshots/keepintabs/1.png';
import keepintabs2 from '/images/screenshots/keepintabs/2.png';
import keepintabs3 from '/images/screenshots/keepintabs/3.png';
import guada1 from '/images/screenshots/guada/guada1.png';
import guada2 from '/images/screenshots/guada/guada2.png';
import guada3 from '/images/screenshots/guada/guada3.png';

export const keepinTabs: ProjectDetails = {
  monitorImg: keepintabsMonitor,
  glowImg: keepintabsGlow,
  links: {
    live: 'asd',
    github: 'asd',
  },
  title: 'Keepin Tabs',
  desc: (
    <Fragment key="keepin-tabs">
      <p className="not-last:mb-4">
        A simple bill splitting app for sharing your expenses and{' '}
        <span className="text-accent-400 font-bold">Keepin&apos;</span> track of your{' '}
        <span className="text-accent-400 font-bold">Tabs</span> with each other
      </p>
      <p className="not-last:mb-4">
        Creates groups and simplifies the budget to avoid cyclical repayments of debts!
      </p>
      <p className="not-last:mb-4">
        Makes use of Firebase authentication for logins and Firestore for dynamic
        real-time storage.
      </p>
    </Fragment>
  ),
  screenshots: {
    type: 'portrait',
    images: [keepintabs1, keepintabs2, keepintabs3],
  },
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
  monitorImg: keepintabsGlow,
  glowImg: keepintabsGlow,
  links: {
    live: 'asd',
  },
  title: 'Guadalupe Website',
  desc: (
    <Fragment key="guadalupe">
      <p className="not-last:mb-4">
        The official website for the
        <span className="text-accent-400 font-bold"> Guadalupe Dried Mangoes</span> brand.
        It is a vibrant, product-focused website that captures the bright, tropical
        personality of the brand.
      </p>
      <p className="not-last:mb-4">
        Fun and interactive animations shine with the help of the Framer Motion animation
        library.
      </p>
    </Fragment>
  ),
  screenshots: {
    type: 'portrait',
    images: [guada2, guada3, guada1],
  },
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
