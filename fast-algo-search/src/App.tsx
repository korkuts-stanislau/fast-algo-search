import { useState } from 'react'
import './App.css'
import { ChooseOllAlgo } from './ChooseOllAlgo';
import { ChoosePllAlgo } from './ChoosePllAlgo';
import { VideoPlayer } from './VideoPlayer'

function App() {
  const [currentVideoSrc, setCurrentVideoSrc] = useState('https://www.youtube.com/embed/q1RiCZ4v9jU');
  const [currentStartSecond, setCurrentStartSecond] = useState(0);

  const setVideoWithTime = (src: string, startSec: number) => {
    setCurrentVideoSrc(src);
    setCurrentStartSecond(startSec);
  }

  return (
    <div>
      <VideoPlayer videoSrc={currentVideoSrc} startSecond={currentStartSecond}/>
      <div className='flex justify-around mt-6'>
        <ChooseOllAlgo setCurrentVideoWithTime={setVideoWithTime}/>
        <ChoosePllAlgo setCurrentVideoWithTime={setVideoWithTime}/>
      </div>
    </div>
  )
}

export default App
