import { useState } from 'react'
import './App.css'
import { ChooseOllAlgo } from './ChooseOllAlgo';
import { ChoosePllAlgo } from './ChoosePllAlgo';
import { Algo } from './Types';
import { VideoPlayer } from './VideoPlayer'

function App() {
  const [activeAlgo, setActiveAlgo] = useState<Algo>({
    title: "Initital",
    videoSrc: 'https://www.youtube.com/embed/q1RiCZ4v9jU',
    imgRef: "",
    startSecond: 0
  });
  const [updateFlag, setUpdateFlag] = useState(false);

  const setAlgo = (algo: Algo) => {
    setActiveAlgo(algo);
    setUpdateFlag(!updateFlag);
  }

  return (
    <div>
      <VideoPlayer algo={activeAlgo} updateFlag={updateFlag}/>
      <div className='bg-black lg:h-[50rem] h-[20rem]'></div>
      <div className='flex lg:flex-row flex-col justify-around my-8'>
        <ChooseOllAlgo setAlgo={setAlgo} activeAlgo={activeAlgo}/>
        <ChoosePllAlgo setAlgo={setAlgo} activeAlgo={activeAlgo}/>
      </div>
    </div>
  )
}

export default App
