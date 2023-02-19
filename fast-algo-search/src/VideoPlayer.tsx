import { KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { Algo } from './Types';
import { fromVideoSrcToId } from './Utilities';

type VideoPlayerProps = {
  algo: Algo;
  sameAlgoUpdateFlag: boolean;
  defaultVideoSrc: string;
};

type YTVideoState = {
  name: 'Not started' | 'Ended' | 'Play' | 'Pause';
  num: number;
};

const YTVideoStates: YTVideoState[] = [
  { name: 'Not started', num: -1 },
  { name: 'Ended', num: 0 },
  { name: 'Play', num: 1 },
  { name: 'Pause', num: 2 },
];

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
  const { algo, sameAlgoUpdateFlag } = props;
  const [intervalId, setIntervalId] = useState<number>();
  const playerRef = useRef<YouTube>(null);

  const onKeyDown = useCallback(
    (ev: globalThis.KeyboardEvent) => {
      const overwrittenKeys = ['Space', 'KeyM', 'KeyU', 'KeyR'];
      if (overwrittenKeys.includes(ev.code)) {
        ev.preventDefault();
      }
      if (ev.code === 'Space') {
        playerRef.current
          ?.getInternalPlayer()
          ?.getPlayerState()
          .then((state) => {
            const stateName = YTVideoStates.find((s) => s.num == state)?.name;
            if (stateName === 'Play')
              playerRef.current?.getInternalPlayer()?.pauseVideo();
            if (stateName === 'Pause')
              playerRef.current?.getInternalPlayer()?.playVideo();
          });
      } else if (ev.code === 'KeyM') {
        playerRef.current?.getInternalPlayer()?.mute();
      } else if (ev.code === 'KeyU') {
        playerRef.current?.getInternalPlayer()?.unMute();
      } else if (ev.code === 'KeyR') {
        playerRef.current?.getInternalPlayer()?.seekTo(algo.startSecond, true);
      }
    },
    [algo.startSecond],
  );

  const setEvents = () => {
    window.addEventListener('keydown', onKeyDown);
  };

  const removeEvents = () => {
    window.removeEventListener('keydown', onKeyDown);
  };

  useEffect(() => {
    setEvents();
    return removeEvents;
  }, []);

  useEffect(() => {
    removeEvents();
    setEvents();
    clearInterval(intervalId);
    setIntervalId(
      setInterval(async () => {
        let currentTime = await playerRef.current
          ?.getInternalPlayer()
          ?.getCurrentTime();
        if (currentTime !== undefined && currentTime > algo.endSecond) {
          playerRef.current
            ?.getInternalPlayer()
            ?.seekTo(algo.startSecond, true);
        }
      }, 1000),
    );
  }, [algo.startSecond, algo.videoSrc]);

  // if it is the same algo or algo from the same video
  useEffect(() => {
    playerRef.current?.getInternalPlayer()?.seekTo(algo.startSecond, true);
  }, [sameAlgoUpdateFlag, algo.startSecond]);

  // if it is a new video
  useEffect(() => {
    playerRef.current
      ?.getInternalPlayer()
      ?.loadVideoById({
        videoId: fromVideoSrcToId(algo.videoSrc),
        startSeconds: algo.startSecond,
      })
      .then(() => {
        playerRef.current?.getInternalPlayer()?.mute();
      });
  }, [algo.videoSrc]);

  return (
    <div className="fixed z-40 w-[100%] h-[40vh]">
      <YouTube
        ref={playerRef}
        opts={{
          playerVars: {
            autoplay: 1,
            fs: 0,
            modestbranding: 1,
            controls: 0,
            iv_load_policy: 3,
            rel: 0,
          },
        }}
        videoId={fromVideoSrcToId(props.defaultVideoSrc)}
        iframeClassName="w-[100%] h-[40vh]"
      />
    </div>
  );
};
