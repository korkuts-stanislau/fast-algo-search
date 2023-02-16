import { useState } from 'react'
import './App.css'
import { ChooseOllAlgo } from './ChooseOllAlgo';
import { ChoosePllAlgo } from './ChoosePllAlgo';
import { Algo } from './Types';
import { VideoPlayer } from './VideoPlayer'

function App() {
  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [activeAlgo, setActiveAlgo] = useState<Algo>({
    title: "Initital",
    videoSrc: 'https://www.youtube.com/embed/q1RiCZ4v9jU',
    imgRef: "",
    startSecond: 0
  });

  const setAlgo = (algo: Algo) => {
    setActiveAlgo(algo);
    setLastUpdateTime(Date.now());
  }

  return (
    <div>
      <VideoPlayer 
        videoSrc={activeAlgo.videoSrc} 
        startSecond={activeAlgo.startSecond} 
        className="fixed w-[100%] h-[600px]"
        key={lastUpdateTime}/>

      <div className='h-[600px] bg-black'></div>
      <div className='flex justify-around my-8'>
        <ChooseOllAlgo setAlgo={setAlgo} activeAlgo={activeAlgo}/>
        <ChoosePllAlgo setAlgo={setAlgo} activeAlgo={activeAlgo}/>
      </div>
    </div>
  )
}

export default App
