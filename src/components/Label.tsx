import { ReactNode } from 'react';

const Label = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="flex ml-4 flex-row w-96 items-center gap-4 mb-4">
      <h2 className="text-accent-400 flex w-fit whitespace-nowrap">{children}</h2>
      <div className="h-0.5 w-full bg-journal-300" />
    </div>
  );
};

export default Label;
