import { ReactNode } from 'react';
import { motion } from 'motion/react';

import keepintabs1 from '/images/screenshots/keepintabs/1.png';
import keepintabs2 from '/images/screenshots/keepintabs/2.png';
import keepintabs3 from '/images/screenshots/keepintabs/3.png';
import keyKeepintabs from '/images/hero/key-keepintabs.png';
import monitor from '/images/hero/monitor.png';
import link from '/images/hero/link.svg';
import github from '/images/hero/github.svg';

const Chip = ({ children }: { children: ReactNode }) => {
  return <div className="bg-journal-300 rounded-lg px-3 py-1 text-white">{children}</div>;
};

const Hero = () => {
  return (
    <section className="relative flex w-full border border-white">
      <div className="absolute top-80 left-1/2 z-1 h-150 w-[120dvw] -translate-x-1/2 bg-linear-to-t from-[#2B2625] via-[#3D322F] via-58% to-[#3B3331] blur-xs" />
      <div className="z-1 grid w-full grid-cols-[8fr_7fr] gap-16">
        <div className="flex flex-col gap-12 border">
          <div>
            <div className="text-accent-400 flex gap-8 text-2xl underline">
              <div className="flex gap-1">
                <img src={link} />
                <p className="text-nowrap">live site</p>
              </div>
              <div className="flex gap-1">
                <img src={github} />
                <p className="text-nowrap">github repo</p>
              </div>
            </div>
            <h2 className="mt-3 mb-10 text-7xl font-extrabold">Keepin Tabs</h2>
            <p>
              A simple bill splitting app for sharing your expenses and <span className="text-accent-400 font-bold">Keepin’</span> track of
              your <span className="text-accent-400 font-bold">Tabs</span> with each other
              <br className="mb-4" />
              Creates groups and simplifies the budget to avoid cyclical repayments of debts!{' '}
            </p>
          </div>
          <div className="flex gap-4">
            <img src={keepintabs1} className="w-1 shrink grow" />
            <img src={keepintabs2} className="w-1 shrink grow" />
            <img src={keepintabs3} className="w-1 shrink grow" />
          </div>
          <div>
            <h3 className="text-accent-400 mb-3">#TechStack</h3>
            <div className="flex flex-wrap gap-2">
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
              <Chip>React</Chip>
            </div>
          </div>
        </div>
        <div className="border">
          <div className="relative h-145 w-full border border-red-500">
            <img src={monitor} className="absolute min-h-143 min-w-165" />
          </div>
          <div className="mx-auto w-fit">
            <div className="relative h-fit rounded-xl p-1">
              <div className="relative z-1 flex gap-1 overflow-clip rounded-xl px-1">
                <motion.img whileHover={{ y: 12 }} className="w-20" src={keyKeepintabs} />
                <motion.img whileHover={{ y: 12 }} className="w-20" src={keyKeepintabs} />
                <motion.img whileHover={{ y: 12 }} className="w-20" src={keyKeepintabs} />
              </div>
              <div className="border-journal-300 absolute bottom-0 left-0 z-0 h-20 w-full rounded-xl border-2 bg-white/1 p-0.5">
                <div className="bg-journal-900 h-full w-full rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-gabarito overflow-x-clip text-white">
      <header className="font-gabarito mb-20 flex justify-center text-white">
        <div className="mx-6 flex w-full max-w-336 items-end justify-between py-6">
          <h1 className="text-5xl font-extrabold">
            Kyle Vicencio<span className="text-accent-400">.</span>
          </h1>
          <nav className="flex gap-12 text-xl">
            <p>About</p>
            <p>Projects</p>
            <p>
              <a href="mailto:inkintime@gmail.com">Contact</a>
            </p>
          </nav>
        </div>
      </header>
      <main className="mx-auto flex h-2000 max-w-300 justify-center text-2xl">
        <Hero />
      </main>
    </div>
  );
};

export default Home;
