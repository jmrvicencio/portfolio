import {
  MouseEvent,
  PointerEvent,
  ReactNode,
  RefObject,
  TouchEvent,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { projects } from './Projects';
import useSound from 'use-sound';
import { useAtom } from 'jotai';
import { activeProjectAtom, mobileMenuAtom, muteAtom } from '@/store/store';
import { Menu, Volume2, VolumeX } from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

import keyKeepintabs from '/images/hero/key-keepintabs.png';
import monitor from '/images/hero/monitor.png';
import screen from '/images/hero/screen.png';
import link from '/images/hero/link.svg';
import github from '/images/hero/github.svg';
import arrow from '/images/hero/arrow.svg';

import hoverSfx from '/sounds/hover3.mp3';
import clickSfx from '/sounds/click.mp3';
import About from './About';
import Skillset from './Skillset';
import Contact from './Contact';
import { useWidthCheck } from '@/hooks/useWidthCheck';

const Key = ({ index }: { index: number }) => {
  const [playbackRate, setPlaybackRate] = useState(0.0);
  const [playHover, { stop }] = useSound(hoverSfx, { playbackRate: 1 + playbackRate });
  const [playClick] = useSound(clickSfx, { playbackRate: 1 + playbackRate });

  const [mute, _] = useAtom(muteAtom);
  const [activeProject, setActiveProject] = useAtom(activeProjectAtom);
  const [mouseDown, setMouseDown] = useState(false);

  const isActive = index == activeProject;
  const keyDownPos = 20 + (mouseDown ? 1 : 0);
  const hover = mouseDown ? keyDownPos + 2 : isActive ? keyDownPos : 3;
  const y = (isActive ? keyDownPos : 0) + (mouseDown ? 20 : 0);

  // ----------------
  // Event Handler
  // ----------------

  const handleClick = (e: MouseEvent) => {
    if (!mute) {
      stop();
      playClick();
      setPlaybackRate(Math.random() * 0.3 - 0.15);
    }

    setActiveProject(index);
  };

  const handleMouseDownCapture = (e: MouseEvent) => {
    e.preventDefault();
    setMouseDown(true);
  };

  const handleTapStart = () => {
    setMouseDown(true);
  };

  const handleMouseUp = () => {
    setMouseDown(false);
  };

  const handleMouseEnter = () => {
    if (!isActive && !mute) {
      playHover();
      setPlaybackRate(Math.random() * 0.3 - 0.15);
    }
  };

  const handleMouseLeave = () => {
    setMouseDown(false);
  };

  return (
    <motion.img
      animate={{ y }}
      whileHover={{ y: hover }}
      transition={{
        type: 'spring',
        duration: 0.3,
      }}
      onClick={handleClick}
      onMouseDownCapture={handleMouseDownCapture}
      onTapStart={handleTapStart}
      onMouseUp={handleMouseUp}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-20"
      src={keyKeepintabs}
    />
  );
};

const Keys = () => {
  return (
    <div className="relative h-fit rounded-xl p-1">
      <div className="relative z-1 flex overflow-clip rounded-xl px-1">
        <Key index={0} />
        <Key index={1} />
        <Key index={2} />
        <Key index={3} />
      </div>
      <div
        className="border-journal-300 absolute bottom-0 left-0 z-0 h-20 w-full rounded-xl
          border-2 bg-white/1 p-0.5"
      >
        <div className="bg-journal-900 h-full w-full rounded-xl" />
      </div>
    </div>
  );
};

const Chip = ({ children }: { children: ReactNode }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="bg-journal-300 rounded-lg px-3 py-1 text-white"
    >
      {children}
    </motion.div>
  );
};

const Title = ({ children }: { children: ReactNode }) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const height = headingRef.current?.offsetHeight;
  }, []);

  return (
    <motion.h2
      ref={headingRef}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.3 }}
      className="mt-3 mb-10 text-7xl font-extrabold"
    >
      {children}
    </motion.h2>
  );
};

const Hero = ({ ref }: { ref?: RefObject<HTMLDivElement | null> }) => {
  const [lightbox, setLightbox] = useState(false);
  const [activeProject, setActiveProject] = useAtom(activeProjectAtom);
  const activeProjectRef = useRef(activeProject);
  const project = projects[activeProject];

  useEffect(() => {
    activeProjectRef.current = activeProject;
  }, [activeProject]);

  return (
    <section ref={ref} className="relative flex w-full">
      <Lightbox
        open={lightbox}
        close={() => setLightbox(false)}
        slides={[
          { src: project.screenshots.images[0] },
          { src: project.screenshots.images[1] },
        ]}
      />
      <div
        className="absolute top-80 left-1/2 z-1 h-150 w-[120dvw] -translate-x-1/2
          bg-linear-to-t from-[#2B2625] via-[#3D322F] via-58% to-[#3B3331] blur-xs"
      />
      <div className="z-1 grid w-full grid-cols-[8fr_7fr] gap-16">
        <div className="flex flex-col gap-12">
          <div>
            <div className="text-accent-400 flex gap-8 text-2xl underline">
              <AnimatePresence mode="wait">
                {project.links.live && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <a target="_blank" href={project.links.live} className="flex gap-1">
                      <img src={link} />
                      <p className="text-nowrap">live site</p>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence mode="wait">
                {project.links.github && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                  >
                    <a target="_blank" href={project.links.github} className="flex gap-1">
                      <img src={github} />
                      <p className="text-nowrap">github repo</p>
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <motion.div className="relative">
              <AnimatePresence mode="wait">
                <Title key={project.title}>{project.title}</Title>
              </AnimatePresence>
            </motion.div>
            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                {project.desc}
              </motion.div>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.3 }}
              className="flex gap-4"
            >
              {project.screenshots.images.map((image) => (
                <img
                  onClick={() => setLightbox(true)}
                  src={image}
                  className="w-1 shrink grow cursor-pointer"
                />
              ))}
            </motion.div>
          </AnimatePresence>
          <div>
            <h3 className="text-accent-400 mb-3">#TechStack</h3>
            <motion.div className="flex flex-wrap gap-2">
              {project.techStack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </motion.div>
          </div>
        </div>
        <div>
          <div className="relative mb-12 h-145 w-full">
            <img src={monitor} className="absolute min-h-143 min-w-165" />
            <motion.img
              key={`${project.title}-img`}
              src={project.monitorImg}
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: 'spring',
              }}
              className="absolute top-19 left-17 w-64"
            />
            <motion.img
              key={`${project.title}-glow`}
              src={project.glowImg}
              initial={{ scale: 0.2 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.5,
                type: 'spring',
              }}
              className="absolute top-19 left-17 w-64"
            />
            <motion.img
              key={`${project.title}-screen`}
              initial={{ scale: 1 }}
              animate={{
                scaleX: [1, 1, 0],
                scaleY: [1, 0.1, 0.1],
                opacity: [1, 0.4, 0],
              }}
              transition={{
                duration: 0.15,
              }}
              src={screen}
              className="absolute top-18 left-16"
            />
          </div>
          <div className="mx-auto flex w-fit flex-col items-center gap-8">
            <div className="mx-auto w-fit">
              <Keys />
            </div>
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{
                duration: 1.2,
                ease: 'easeInOut',
                times: [0, 0.5, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="border-journal-300 relative w-fit rounded-xl border-2 px-6 py-2
                text-center"
            >
              <img
                src={arrow}
                className="absolute top-0 -translate-y-5/2 left-1/2 -translate-x-1/2"
              />
              My Projects
              <motion.div
                animate={{
                  scale: [1, 1.2],
                  opacity: [1, 0],
                }}
                transition={{
                  duration: 1.2,
                  ease: 'easeInOut',
                  times: [0, 0.5],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="border-2 -inset-0.5 absolute rounded-xl border-journal-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MobileMenu = ({
  pageRefs: [heroRef, aboutRef, skillsetRef, contactRef],
}: {
  pageRefs: RefObject<HTMLDivElement | null>[];
}) => {
  const { isSm, isMd, isLg } = useWidthCheck();
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);

  useLayoutEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenu]);

  const handleNavClicked = (ref: RefObject<HTMLDivElement | null>) => () => {
    setMobileMenu(false);
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <AnimatePresence>
      {mobileMenu && (
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{
            duration: 0.3,
            type: 'tween',
            ease: 'easeInOut',
          }}
          className="fixed w-dvw h-dvh top-0 left-0 z-20 bg-journal-900/70
            backdrop-blur-3xl flex items-center justify-center border"
        >
          <nav className="flex flex-col text-3xl text-center gap-12 font-bold">
            <p onClick={handleNavClicked(heroRef)} className="cursor-pointer">
              Projects
            </p>
            <p onClick={handleNavClicked(aboutRef)} className="cursor-pointer">
              About
            </p>
            <p onClick={handleNavClicked(skillsetRef)} className="cursor-pointer">
              Skillset
            </p>
            <p onClick={handleNavClicked(contactRef)} className="cursor-pointer">
              Contact
            </p>
          </nav>
        </motion.div>
      )}
      {/* {mobileMenu && (
        <motion.div
          // initial={{ x: '100%' }}
          // animate={{ x: '0%' }}
          // exit={{ x: '100%' }}
          className="absolute w-dvw h-dvh top-0 left-0 z-20 bg-red"
        ></motion.div>
      )} */}
    </AnimatePresence>
  );
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsetRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [mute, setMute] = useAtom(muteAtom);
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);

  const handleClick = () => {
    setMute((prev) => !prev);
  };

  const handleNavClicked = (ref: RefObject<HTMLDivElement | null>) => () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="font-gabarito overflow-x-clip text-white">
      <MobileMenu pageRefs={[heroRef, aboutRef, skillsetRef, contactRef]} />
      <header className="font-gabarito mb-20 flex justify-center text-white">
        <div className="mx-4 sm:mx-6 flex w-full max-w-336 items-end justify-between py-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Kyle Vicencio<span className="text-accent-400">.</span>
          </h1>
          <nav className="hidden lg:flex gap-12 text-xl">
            <p onClick={handleNavClicked(heroRef)} className="cursor-pointer">
              Projects
            </p>
            <p onClick={handleNavClicked(aboutRef)} className="cursor-pointer">
              About
            </p>
            <p onClick={handleNavClicked(skillsetRef)} className="cursor-pointer">
              Skillset
            </p>
            <p onClick={handleNavClicked(contactRef)} className="cursor-pointer">
              Contact
            </p>
            <div className="flex items-center cursor-pointer" onClick={handleClick}>
              <motion.div
                animate={{ opacity: !mute ? 1 : 0.4 }}
                transition={{ duration: 0.1 }}
              >
                {mute ? <VolumeX /> : <Volume2 />}
              </motion.div>
            </div>
          </nav>
          <Menu
            className="lg:hidden cursor-pointer block w-8 h-8 text-white"
            onClick={() => setMobileMenu(true)}
          />
        </div>
      </header>
      <motion.main
        className="mx-auto flex flex-col gap-84 max-w-300 justify-start text-2xl"
      >
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Skillset ref={skillsetRef} />
        <Contact ref={contactRef} />
      </motion.main>
      <footer
        className="text-sm text-journal-300 max-w-300 p-8 border-t border-journal-300
          mx-auto"
      >
        <span className="font-bold">© 2026 John Vicencio.</span> All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
