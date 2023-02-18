import { useState } from 'react';

type TrainerProps = {};

const keyClassName = 'text-green-300';

export const Trainer: React.FC<TrainerProps> = (props) => {
  const [opened, setOpened] = useState(false);

  return (
    <div>
      <h1
        className="text-2xl text-center cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-500 text-black px-[4px] py-[2px]"
        onClick={() => setOpened(!opened)}
      >
        Trainer
      </h1>
      {opened && <div className="text-center">In process</div>}
    </div>
  );
};
