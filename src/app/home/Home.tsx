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
import { useAtom } from 'jotai';
import {
  activeProjectAtom,
  mobileMenuAtom,
  muteAtom,
  widthCheckAtom,
} from '@/store/store';
import { Menu, Volume2, VolumeX } from 'lucide-react';

import Hero from './Hero';
import About from './About';
import Skillset from './Skillset';
import Contact from './Contact';
import { useWidthCheck } from '@/hooks/useWidthCheck';

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

  const { isSm, isMd, isLg } = useWidthCheck();
  const [_, setWidthCheck] = useAtom(widthCheckAtom);
  const [mute, setMute] = useAtom(muteAtom);
  const [__, setMobileMenu] = useAtom(mobileMenuAtom);

  // ---------------
  // Effects
  // ---------------

  useLayoutEffect(() => {
    setWidthCheck({
      isSm,
      isMd,
      isLg,
    });
  }, [isSm, isMd, isLg]);

  // ---------------
  // Event Handlers
  // ---------------

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
        className="mx-auto flex flex-col gap-84 max-w-310 justify-start text-2xl"
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
