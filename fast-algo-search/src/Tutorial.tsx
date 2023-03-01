import { useState } from 'react';
import { Filter } from './Types';

type TutorialProps = {
  clearStorage: () => void;
  setFilter: (filter: Filter) => void;
};

const keyClassName = 'text-green-300';

export const Tutorial: React.FC<TutorialProps> = (props) => {
  const [opened, setOpened] = useState(false);

  const handleClearDataButton = () => {
    if (confirm('Are you sure you want to delete all data?')) {
      props.clearStorage();
    }
  };

  return (
    <div>
      <h1
        className="text-2xl text-center cursor-pointer bg-blue-300 hover:bg-blue-400 active:bg-blue-500 text-black px-[4px] py-[2px]"
        onClick={() => setOpened(!opened)}
      >
        Tutorial
      </h1>
      {opened && (
        <div className="bg-gray-600 rounded-md m-auto lg:w-[700px] w-[90%] my-4 p-4">
          <ul className="list-disc px-4 cursor-default">
            <p>Hotkeys</p>
            <li>
              To pause/resume video press{' '}
              <span className={keyClassName}>Space</span>
            </li>
            <li>
              To mute video press <span className={keyClassName}>M</span>
            </li>
            <li>
              To unmute video press <span className={keyClassName}>U</span>
            </li>
            <li>
              To restart algorithm press <span className={keyClassName}>R</span>
            </li>
            <li>
              To show all algorithms press{' '}
              <span className={keyClassName}>A</span> or{' '}
              <button
                className="bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-md px-[4px]"
                onClick={() => props.setFilter('all')}
              >
                here
              </button>
            </li>
            <li>
              To show unlearned algorithms press{' '}
              <span className={keyClassName}>L</span> or{' '}
              <button
                className="bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-md px-[4px]"
                onClick={() => props.setFilter('unlearned')}
              >
                here
              </button>
            </li>
            <li>
              To show only algorithms that you train press{' '}
              <span className={keyClassName}>T</span> or{' '}
              <button
                className="bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-md px-[4px]"
                onClick={() => props.setFilter('train')}
              >
                here
              </button>
            </li>
            <li>
              To generate next trainer algorithm press{' '}
              <span className={keyClassName}>N</span>
            </li>
            <hr className="my-2" />
            <p>Info</p>
            <li>Your data stored only in this browser</li>
            <li>If you clean page cash data will be lost</li>
            <li>
              If you want to remove all application data click{' '}
              <button
                className="bg-red-700 hover:bg-red-800 active:bg-red-900 rounded-md px-[4px]"
                onClick={handleClearDataButton}
              >
                here
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
