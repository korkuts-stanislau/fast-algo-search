import { useCallback, useEffect, useState } from 'react';
import { scrumbles } from './Scrumbles';
import { AlgoScrumbles, UserAlgoInfo } from './Types';

type TrainerProps = {
  userAlgosInfo: UserAlgoInfo[];
};

const getNextAlgoScrumble = (
  algosToTrain: UserAlgoInfo[],
  previousAlgoScrumbles?: AlgoScrumbles,
) => {
  if (algosToTrain.length === 0) return undefined;
  if (algosToTrain.length === 1)
    return scrumbles.find((s) => s.title === algosToTrain[0].title);
  const algosToTrainScrumbles = scrumbles.filter(
    (s) =>
      previousAlgoScrumbles?.title !== s.title &&
      algosToTrain.map((a) => a.title).includes(s.title),
  );
  const randomAlgoScrumbles =
    algosToTrainScrumbles[
      Math.floor(Math.random() * algosToTrainScrumbles.length)
    ];

  return randomAlgoScrumbles;
};

export const Trainer: React.FC<TrainerProps> = (props) => {
  const algosToTrain = props.userAlgosInfo.filter((a) => a.isInTrainer);

  const [opened, setOpened] = useState(false);
  const [currentAlgoScrumbles, setCurrentAlgoScrumbles] = useState(() =>
    getNextAlgoScrumble(algosToTrain),
  );

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [algosToTrain]);

  const onKeyDown = useCallback(
    (ev: globalThis.KeyboardEvent) => {
      const overwrittenKeys = ['KeyN'];
      if (overwrittenKeys.includes(ev.code)) {
        ev.preventDefault();
      }
      if (ev.code === 'KeyN') {
        setCurrentAlgoScrumbles(
          getNextAlgoScrumble(algosToTrain, currentAlgoScrumbles),
        );
      }
    },
    [algosToTrain],
  );

  return (
    <div>
      <h1
        className="text-2xl text-center cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-500 text-black px-[4px] py-[2px]"
        onClick={() => setOpened(!opened)}
      >
        Trainer
      </h1>
      {opened && (
        <div className="bg-gray-600 rounded-md m-auto lg:w-[700px] w-[90%] my-4 p-4 flex flex-col items-center cursor-default">
          <div className="mb-4">
            <span className="inline-block mr-2 text-lg">
              Algorithms to train:
            </span>
            {algosToTrain.map((a) => (
              <span className="inline-block mr-2">{a.title}</span>
            ))}
          </div>
          <div>
            <span className="text-lg inline-block mr-2">Scrumble:</span>
            {currentAlgoScrumbles !== undefined ? (
              <span className="text-lg mr-2">
                {currentAlgoScrumbles.scrumbles[0]}
              </span>
            ) : (
              <span className="text-lg mr-2">Choose algorithms first</span>
            )}

            <button
              className="bg-yellow-700 hover:bg-yellow-800 active:bg-yellow-900 rounded-md px-[4px]"
              onClick={() =>
                setCurrentAlgoScrumbles(
                  getNextAlgoScrumble(algosToTrain, currentAlgoScrumbles),
                )
              }
            >
              next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
