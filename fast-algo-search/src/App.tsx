import { useState } from 'react'
import './App.css'
import { ChooseOllAlgo } from './ChooseOllAlgo';
import { ChoosePllAlgo } from './ChoosePllAlgo';
import { Tutorial } from './Tutorial';
import { Algo } from './Types';
import { VideoPlayer } from './VideoPlayer'

const defaultAlgo: Algo = {
  title: "",
  videoSrc: 'https://www.youtube.com/embed/q1RiCZ4v9jU',
  imgRef: "",
  startSecond: 0,
  endSecond: 1000
}

function App() {
  const [activeAlgo, setActiveAlgo] = useState<Algo>(defaultAlgo);

  const [sameAlgoUpdateFlag, setSameAlgoUpdateFlag] = useState(false);

  const setAlgo = (algo: Algo) => {
    setActiveAlgo(algo);
    // the same algo as before
    if(algo === activeAlgo) {
      setSameAlgoUpdateFlag(!sameAlgoUpdateFlag);
    }
  }

  // TODO?: add timer

  return (
    <div>
      <VideoPlayer defaultVideoSrc={defaultAlgo.videoSrc} algo={activeAlgo} sameAlgoUpdateFlag={sameAlgoUpdateFlag}/>
      <div className='bg-black lg:h-[50rem] h-[20rem]'></div>
      <Tutorial/>
      <div className='flex lg:flex-row flex-col justify-around mb-8'>
        <ChooseOllAlgo setAlgo={setAlgo} activeAlgo={activeAlgo}/>
        <ChoosePllAlgo setAlgo={setAlgo} activeAlgo={activeAlgo}/>
      </div>
    </div>
  )
}

export default App
