import Label from '@/components/Label';
import asterisk from '/images/asterisk.svg';
import { ReactNode } from 'react';
import { Asterisk } from 'lucide-react';

const skillset = {
  'Front-end': 'React.js, HTML, Javascript',
  'Back-end': 'Node.js, Express, Firebase, EJS',
  'Workflow & Tools': 'Typescript, Prettier, ESLint, Git, npm',
  Styling: 'TailwindCSS, CSS, Sass',
  Database: 'PostgreSQL, Firestore, PrismaORM',
  'Build Tool': 'Vite, Webpack',
  Languages: 'Javascript, Python, C#, GDScript',
  'Game Engine': 'Godot, Unity',
  Design: 'Figma, Photoshop, Blender, After Effects, Davinci Resolve, Clip Studio Paint',
};

const Heading = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex gap-2 items-center mb-4">
      <img src={asterisk} />
      <h3 className="border-b-2 font-back text-2xl border-white">{children}</h3>
    </div>
  );
};

const Entry = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div>
      <Heading>{title}</Heading>
      <p className="text-lg pl-8">{desc}</p>
    </div>
  );
};

const Skillset = () => {
  return (
    <section>
      <Label>Skillset</Label>
      <div className="grid grid-cols-3 gap-6 mt-12">
        {Object.entries(skillset).map(([title, items]) => (
          <Entry title={title} desc={items} />
        ))}
      </div>
    </section>
  );
};

export default Skillset;
