import Label from '@/components/Label';
import bg from '/images/contactbg.svg';
import email from '/images/contact/email.svg';
import linkedin from '/images/contact/linkedin.svg';
import github from '/images/contact/github.svg';
import { RefObject } from 'react';

const Contact = ({ ref }: { ref?: RefObject<HTMLDivElement | null> }) => {
  return (
    <section ref={ref} className="mb-32">
      <Label>Contact</Label>
      <div
        className="flex text-center items-center relative flex-col gap-8 justify-center
          h-150"
      >
        <h2 className="font-extrabold text-8xl">
          Get in <span className="text-accent-400">Touch!</span>
        </h2>
        <div className="max-w-100 text-journal-100">
          <p className="not-last:mb-8">
            I’m always open to new opportunities, collaborations and fun challenges!
          </p>
          <p className="not-last:mb-8">
            Reach out, I’d love to hear what you’re working on!
          </p>
        </div>
        <div className="flex gap-4">
          <a href="mailto:inkintime@gmail.com">
            <img className="cursor-pointer" src={email} />
          </a>
          <a href="https://github.com/jmrvicencio">
            <img className="cursor-pointer" src={github} />
          </a>
          <a href="https://www.linkedin.com/in/john-kyle-vicencio-898b89114/">
            <img className="cursor-pointer" src={linkedin} />
          </a>
        </div>
        <img src={bg} className="absolute top-1/2 left-1/2 -translate-1/2 -z-1" />
      </div>
    </section>
  );
};

export default Contact;
