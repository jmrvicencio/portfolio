import { Fragment } from 'react';
import { ProjectDetails } from '@/types/projects';

import keepintabsMonitor from '/images/hero/keepintabs.gif';
import keepintabsGlow from '/images/hero/keepintabs-glow.png';
import guadaMonitor from '/images/hero/guada.gif';
import guadaGlow from '/images/hero/guada-glow.png';
import rsvpMonitor from '/images/hero/rsvp.gif';
import rsvpGlow from '/images/hero/rsvp-glow.png';
import splitMonitor from '/images/hero/split.gif';
import splitGlow from '/images/hero/split-glow.png';
import keepintabs1 from '/images/screenshots/keepintabs/1.png';
import keepintabs2 from '/images/screenshots/keepintabs/2.png';
import keepintabs3 from '/images/screenshots/keepintabs/3.png';
import guada1 from '/images/screenshots/guada/guada1.png';
import guada2 from '/images/screenshots/guada/guada2.png';
import guada3 from '/images/screenshots/guada/guada3.png';
import rsvp1 from '/images/screenshots/rsvp/rsvp-1.png';
import rsvp2 from '/images/screenshots/rsvp/rsvp-2.png';
import vacmor1 from '/images/screenshots/vacmor/vacmor1.jpg';
import vacmor2 from '/images/screenshots/vacmor/vacmor2.jpg';

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
  monitorImg: guadaMonitor,
  glowImg: guadaGlow,
  links: {
    live: 'https://jovimedalla31.github.io/mango-web/',
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

export const rsvp: ProjectDetails = {
  monitorImg: rsvpMonitor,
  glowImg: rsvpGlow,
  links: {
    live: 'https://jmrvicencio.github.io/portfolio-rsvp/',
    github: 'https://github.com/jmrvicencio/portfolio-rsvp',
  },
  title: 'RSVP Website',
  desc: (
    <Fragment key="rsvp">
      <p className="not-last:mb-4">
        A newspaper-themed digital wedding invite & RSVP website designed to provide
        guests with event details and a seamless way to respond online.
      </p>
      <p className="not-last:mb-4">
        Includes an admin dashboard to handle guest management and check guest responses
        in real-time!
      </p>
    </Fragment>
  ),
  screenshots: {
    type: 'landscape',
    images: [rsvp1, rsvp2],
  },
  techStack: [
    'React',
    'Firebase',
    'Firestore',
    'Framer Motion',
    'TailwindCSS',
    'Vite',
    'Typescript',
    'React Router DOM',
    'Jotai',
  ],
};

export const vacmor: ProjectDetails = {
  monitorImg: splitMonitor,
  glowImg: splitGlow,
  links: {
    live: 'https://therealjovi.itch.io/morgans-attic',
  },
  title: 'Split Decisions',
  desc: (
    <Fragment key="rsvp">
      <p className="not-last:mb-4">
        A newspaper-themed digital wedding invite & RSVP website designed to provide
        guests with event details and a seamless way to respond online.
      </p>
      <p className="not-last:mb-4">
        Includes an admin dashboard to handle guest management and check guest responses
        in real-time!
      </p>
    </Fragment>
  ),
  screenshots: {
    type: 'landscape',
    images: [vacmor1, vacmor2],
  },
  techStack: ['Godot', 'GDScript', 'Figma'],
};

export const projects = [keepinTabs, guadalupe, rsvp, vacmor];
