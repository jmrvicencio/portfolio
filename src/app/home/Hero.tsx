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
import {
  activeProjectAtom,
  mobileMenuAtom,
  muteAtom,
  widthCheckAtom,
} from '@/store/store';
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
  const y = (isActive ? keyDownPos : 0) + (mouseDown ? 5 : 0);

  // ----------------
  // Event Handler
  // ----------------

  const handleClick = (e: MouseEvent) => {};

  const handleMouseDownCapture = (e: MouseEvent) => {
    e.preventDefault();
    setMouseDown(true);
  };

  const handleTapStart = () => {
    if (!mute) {
      stop();
      playClick();
      setPlaybackRate(Math.random() * 0.3 - 0.15);
    }

    setMouseDown(true);
    setActiveProject(index);
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
      className="w-[5em]"
      src={keyKeepintabs}
    />
  );
};

const Keys = () => {
  const keysRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const measure = () => {
      if (!keysRef.current) return;

      const fontSize = Math.min(keysRef.current.offsetWidth / 20.5, 16);
      keysRef.current.style.fontSize = `${fontSize}px`;
    };
    const observer = new ResizeObserver(measure);

    measure();
    if (keysRef.current) observer.observe(keysRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={keysRef} className="relative h-fit rounded-xl p-1 text-base">
      <div className="relative z-1 flex overflow-clip rounded-xl px-1">
        <Key index={0} />
        <Key index={1} />
        <Key index={2} />
        <Key index={3} />
      </div>
      <div
        className="border-journal-300 absolute bottom-0 left-0 z-0 h-[5em] w-full
          rounded-xl border-2 bg-white/1 p-[0.125em]"
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
      className="mt-3 mb-10 text-5xl sm:text-6xl md:text-7xl font-extrabold"
    >
      {children}
    </motion.h2>
  );
};

const Monitor = () => {
  // refs
  const monitorRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useAtom(activeProjectAtom);
  const project = projects[activeProject];

  const [widthCheck] = useAtom(widthCheckAtom);
  const { isSm, isMd, isLg } = widthCheck.current ?? {
    isSm: true,
    isMd: true,
    isLg: true,
  };

  // -------------------------
  // Effects
  // -------------------------

  useLayoutEffect(() => {
    const measure = () => {
      console.log('change width');
      const widthCheckRef = widthCheck;
      const {
        isSm: _isSm,
        isMd: _isMd,
        isLg: _isLg,
      } = widthCheckRef.current ?? {
        isSm: true,
        isMd: true,
        isLg: true,
      };

      if (monitorRef.current) {
        const fontSize = _isMd
          ? Math.min(monitorRef.current.offsetWidth / 40, 11)
          : monitorRef.current.offsetWidth / 33.125;
        console.log(fontSize);
        monitorRef.current.style.fontSize = `${fontSize}px`;
      }
    };
    const observer = new ResizeObserver(() => measure());

    measure();
    if (monitorRef.current) observer.observe(monitorRef.current);

    return () => observer.disconnect();
  }, [monitorRef.current]);

  return (
    <>
      <div
        ref={monitorRef}
        className="relative mb-12 h-fit min-h-[35.75em] min-w-full max-w-full text-base"
      >
        <div className="mx-auto relative w-[39em] lg:w-full">
          <img
            src={monitor}
            className="absolute min-h-[35.75em] min-w-[41.25em] w-[41.25em]"
          />
          <motion.img
            key={`${project.title}-img`}
            src={project.monitorImg}
            initial={{ scale: 0.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              type: 'spring',
            }}
            className="absolute top-[4.75em] left-[4.25em] w-[16em]"
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
            className="absolute top-[4.75em] left-[4.25em] w-[16em]"
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
            className="absolute top-[4.5em] left-[4em] w-[16.5em] h-[14.3em]"
          />
        </div>
      </div>
      <div className="mx-auto flex w-fit flex-col items-center gap-8">
        <div className="mx-auto w-fit">
          <Keys />
        </div>
        {!isMd && (
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
        )}
      </div>
    </>
  );
};

const Hero = ({ ref }: { ref?: RefObject<HTMLDivElement | null> }) => {
  // refs
  const mainHeroRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);

  const [widthCheck] = useAtom(widthCheckAtom);
  const { isSm, isMd, isLg } = widthCheck.current ?? {
    isSm: true,
    isMd: true,
    isLg: true,
  };
  const [lightbox, setLightbox] = useState(false);
  const [activeProject, setActiveProject] = useAtom(activeProjectAtom);
  const project = projects[activeProject];

  // ----------------------
  // Effects
  // ----------------------

  useLayoutEffect(() => {
    const measure = () => {
      const widtchCheckRef = widthCheck;
      const {
        isSm: _isSm,
        isMd: _isMd,
        isLg: _isLg,
      } = widtchCheckRef.current ?? {
        isSm: true,
        isMd: true,
        isLg: true,
      };
      if (!gradientRef.current || !mainHeroRef.current) return;

      const fontSize = !_isMd
        ? Math.min(mainHeroRef.current.offsetWidth / 3.765, 320)
        : Math.min(mainHeroRef.current.offsetWidth / 2, 252);
      gradientRef.current.style.top = `${fontSize}px`;
    };
    const observer = new ResizeObserver(measure);

    measure();
    if (mainHeroRef.current) observer.observe(mainHeroRef.current);
    return () => observer.disconnect();
  }, []);

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
        id="hero-gradient"
        ref={gradientRef}
        className="absolute left-1/2 z-1 h-150 w-[120dvw] -translate-x-1/2 bg-linear-to-t
          from-[#2B2625] via-[#3D322F] via-58% to-[#3B3331] blur-xs"
      />
      <div
        ref={mainHeroRef}
        className="z-1 grid w-full grid-cols-1 md:grid-cols-[8fr_7fr] gap-16 px-8"
      >
        <div className="flex flex-col gap-12 row-start-auto md:row-start-1">
          <div className="text-xl sm:text-2xl">
            <div className="text-accent-400 flex gap-8 underline">
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
              {project.screenshots.images.map((image, i) => (
                <img
                  key={`${project.title}_img${i}`}
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
        <div className="row-start-1 md:row-start-auto min-w-full max-w-full">
          <Monitor />
        </div>
      </div>
    </section>
  );
};

export default Hero;
