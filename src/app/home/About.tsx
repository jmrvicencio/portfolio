import { RefObject } from 'react';
import aboutMe from '/images/about-me.png';
import Label from '@/components/Label';

const About = ({ ref }: { ref?: RefObject<HTMLDivElement | null> }) => {
  return (
    <section
      ref={ref}
      className="max-w-300 flex border-red-500 gap-30 text-2xl font-gabarito"
    >
      <div className="w-1 grow-3">
        <div className="w-fit mb-12">
          <Label>About Me</Label>
          <h3 className="text-7xl ml-4">
            Call me <span className="font-extrabold text-accent-400">Kyle</span>
          </h3>
        </div>
        <p className="not-last:mb-8">
          I am a former Web Designer transitioning to Web Development, with a background
          in 2D/3D art, motion graphics and digital design.
        </p>
        <p className="not-last:mb-8">
          I enjoy learning and the process of turning ideas into reality. Seeing concepts
          and ideas in my head come to life through creation and making them my own.
        </p>
        <p className="not-last:mb-8">
          This passion has led me on a journey to learn Web Development, something I’ve
          always been casually flirting with, combining my design experience with a
          growing technical foundation.{' '}
        </p>
      </div>
      <div className="w-1 grow-2 h-full items-center flex">
        <div className="aspect-square w-full relative">
          <img src={aboutMe} className="absolute bottom-0" />
        </div>
      </div>
    </section>
  );
};

export default About;
