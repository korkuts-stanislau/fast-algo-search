import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { ChooseOllAlgo } from './ChooseOllAlgo';
import { ChoosePllAlgo } from './ChoosePllAlgo';
import {
  clearStorage,
  getFromStorageOrGenerate,
  saveToStorage,
} from './Storage';
import { Trainer } from './Trainer';
import { Tutorial } from './Tutorial';
import { Algo, Filter, UserAlgoInfo } from './Types';
import { VideoPlayer } from './VideoPlayer';

const defaultAlgo: Algo = {
  title: '',
  videoSrc: 'https://www.youtube.com/embed/q1RiCZ4v9jU',
  imgRef: '',
  startSecond: 0,
  endSecond: 1000,
};

function App() {
  const [activeAlgo, setActiveAlgo] = useState<Algo>(defaultAlgo);
  const [userAlgosInfo, setUserAlgosInfo] = useState(getFromStorageOrGenerate);

  const [sameAlgoUpdateFlag, setSameAlgoUpdateFlag] = useState(false);

  const [filter, setFilter] = useState<Filter>('all');

  useEffect(() => {
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const onKeyDown = useCallback((ev: globalThis.KeyboardEvent) => {
    const overwrittenKeys = ['KeyA', 'KeyL', 'KeyT'];
    if (overwrittenKeys.includes(ev.code)) {
      ev.preventDefault();
    }
    if (ev.code === 'KeyA') {
      setFilter('all');
    } else if (ev.code === 'KeyL') {
      setFilter('unlearned');
    } else if (ev.code === 'KeyT') {
      setFilter('train');
    }
  }, []);

  const setAlgoInfo = (algoInfo: UserAlgoInfo) => {
    const newAlgosInfo = userAlgosInfo.map((a) =>
      a.title === algoInfo.title ? algoInfo : a,
    );
    saveToStorage(newAlgosInfo);
    setUserAlgosInfo(newAlgosInfo);
  };

  const setAlgo = (algo: Algo) => {
    setActiveAlgo(algo);
    if (algo === activeAlgo) {
      setSameAlgoUpdateFlag(!sameAlgoUpdateFlag);
    }
  };

  const handleClearStorage = () => {
    clearStorage();
    setUserAlgosInfo(getFromStorageOrGenerate);
  };

  return (
    <div>
      <VideoPlayer
        defaultVideoSrc={defaultAlgo.videoSrc}
        algo={activeAlgo}
        sameAlgoUpdateFlag={sameAlgoUpdateFlag}
      />
      <div className="bg-black h-[40vh]"></div>
      <Tutorial clearStorage={handleClearStorage} />
      <Trainer userAlgosInfo={userAlgosInfo} />
      <div className="flex lg:flex-row flex-col justify-around mt-4 mb-8">
        <ChooseOllAlgo
          setAlgo={setAlgo}
          activeAlgo={activeAlgo}
          userAlgosInfo={userAlgosInfo}
          setUserAlgoInfo={setAlgoInfo}
          filter={filter}
        />
        <ChoosePllAlgo
          setAlgo={setAlgo}
          activeAlgo={activeAlgo}
          userAlgosInfo={userAlgosInfo}
          setUserAlgoInfo={setAlgoInfo}
          filter={filter}
        />
      </div>
    </div>
  );
}

export default App;
