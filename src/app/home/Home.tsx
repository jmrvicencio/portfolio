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
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'motion/react';
import { useAtom } from 'jotai';
import {
  activeProjectAtom,
  mobileMenuAtom,
  muteAtom,
  widthCheckAtom,
} from '@/store/store';
import { Menu, Volume2, VolumeX, X } from 'lucide-react';

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
  const [mute, setMute] = useAtom(muteAtom);
  const [mobileMenu, setMobileMenu] = useAtom(mobileMenuAtom);

  useLayoutEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenu]);

  const handleNavClicked = (ref: RefObject<HTMLDivElement | null>) => () => {
    setMobileMenu(false);
    const top = (ref.current?.offsetTop ?? 0) - 100;
    window.scrollTo({ top, behavior: 'smooth' });
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
          className="fixed w-dvw h-dvh top-0 left-0 z-30 bg-journal-900/70
            backdrop-blur-3xl flex items-center justify-center"
        >
          <X
            className="absolute top-8 right-8 cursor-pointer w-8 h-8"
            onClick={() => setMobileMenu(false)}
          />
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
            <div
              className="flex justify-center w-full items-center cursor-pointer"
              onClick={() => setMute((prev) => !prev)}
            >
              <motion.div
                animate={{ opacity: !mute ? 1 : 0.4 }}
                transition={{ duration: 0.1 }}
              >
                {mute ? <VolumeX className="w-8 h-8" /> : <Volume2 className="w-8 h-8" />}
              </motion.div>
            </div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsetRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const [widthCheck, _] = useAtom(widthCheckAtom);
  const { scrollY } = useScroll();

  const { isSm, isMd, isLg } = useWidthCheck();
  const [mute, setMute] = useAtom(muteAtom);
  const [__, setMobileMenu] = useAtom(mobileMenuAtom);
  const [headerBgOpacity, setHeaderBgOpacity] = useState(false);

  const changeHeaderBgOpacity = (val: boolean) => {
    if (val != headerBgOpacity) setHeaderBgOpacity(val);
  };

  // ---------------
  // Effects
  // ---------------

  useMotionValueEvent(scrollY, 'change', (scroll) => {
    changeHeaderBgOpacity(scroll == 0 ? false : true);
  });

  useLayoutEffect(() => {
    // console.log(isSm, isMd, isLg);
    widthCheck.current = {
      isSm,
      isMd,
      isLg,
    };
  }, [isSm, isMd, isLg]);

  // ---------------
  // Event Handlers
  // ---------------

  const handleMuteClicked = () => {
    setMute((prev) => !prev);
  };

  const handleNavClicked = (ref: RefObject<HTMLDivElement | null>) => () => {
    const top = (ref.current?.offsetTop ?? 0) - 180;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <div className="font-gabarito overflow-x-clip text-white">
      <MobileMenu pageRefs={[heroRef, aboutRef, skillsetRef, contactRef]} />
      <header
        className="sticky top-0 z-20 font-gabarito mb-20 flex justify-center text-white"
      >
        <motion.div
          animate={{
            opacity: headerBgOpacity ? 1 : 0,
          }}
          className="bg-linear-to-b from-journal-1000/90 via-journal-1000/50 via-70%
            from-10% to-journal-1000/0 absolute w-full h-full top-0 left-0 -z-1"
        ></motion.div>
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
            <div className="flex items-center cursor-pointer" onClick={handleMuteClicked}>
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
        className="mx-auto flex flex-col gap-32 md:gap-84 max-w-310 justify-start
          text-2xl"
      >
        <Hero ref={heroRef} />
        <About ref={aboutRef} />
        <Skillset ref={skillsetRef} />
        <Contact ref={contactRef} />
      </motion.main>
      <footer
        className="text-sm text-journal-300 max-w-300 p-8 border-t border-journal-300
          md:mx-auto mx-8"
      >
        <span className="font-bold">© 2026 John Vicencio.</span> All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
