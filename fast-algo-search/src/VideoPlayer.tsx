import { KeyboardEvent, useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import useGlobalDOMEvents from "./CustomHooks";
import { Algo } from "./Types";
import { fromVideoSrcToId } from "./Utilities";

type VideoPlayerProps = {
    algo: Algo;
    sameAlgoUpdateFlag: boolean;
    defaultVideoSrc: string;
}

type YTVideoState = {
    name: "Not started" | "Ended" | "Play" | "Pause",
    num: number
}

const YTVideoStates: YTVideoState[] = [
    {name: "Not started", num: -1},
    {name: "Ended", num: 0},
    {name: "Play", num: 1},
    {name: "Pause", num: 2},
]

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    const {algo, sameAlgoUpdateFlag} = props;
    const [intervalId, setIntervalId] = useState<number>();

    useGlobalDOMEvents({
        keydown: async (ev: Event) => {
            ev.preventDefault();
            const keyboardEvent = ev as unknown as KeyboardEvent;
            if(keyboardEvent.code === "Space") {
                const videoState = await playerRef.current?.getInternalPlayer()?.getPlayerState();
                const stateName = YTVideoStates.find(s => s.num == videoState)?.name;

                if(stateName === "Play") playerRef.current?.getInternalPlayer()?.pauseVideo();
                if(stateName === "Pause") playerRef.current?.getInternalPlayer()?.playVideo();
            }
            if(keyboardEvent.code === "KeyM") {
                playerRef.current?.getInternalPlayer()?.mute();
            }
            if(keyboardEvent.code === "KeyU") {
                playerRef.current?.getInternalPlayer()?.unMute();
            }
            if(keyboardEvent.code === "KeyR") {
                playerRef.current?.getInternalPlayer()?.seekTo(algo.startSecond, true);
            }
        }
    })

    const playerRef = useRef<YouTube>(null);

    useEffect(() => {
        clearInterval(intervalId);
        setIntervalId(setInterval(async () => {
            let currentTime = await playerRef.current?.getInternalPlayer()?.getCurrentTime();
            if(currentTime !== undefined && currentTime > algo.endSecond) {
                playerRef.current?.getInternalPlayer()?.seekTo(algo.startSecond, true);
            }
        }, 1000));
    }, [algo.startSecond, algo.videoSrc]);
    
    // if it is the same algo or algo from the same video
    useEffect(() => {
        playerRef.current?.getInternalPlayer()?.seekTo(algo.startSecond, true);
    }, [sameAlgoUpdateFlag, algo.startSecond]);

    // if it is a new video
    useEffect(() => {
        playerRef.current?.getInternalPlayer()?.loadVideoById({
            videoId:fromVideoSrcToId(algo.videoSrc),
            startSeconds: algo.startSecond
        });
    }, [algo.videoSrc]);

    return (
        <div className="fixed w-[100%] lg:h-[50rem] h-[20rem]">
            <YouTube 
                ref={playerRef}
                opts={{
                    playerVars: {
                        autoplay: 1,
                        fs: 0,
                        modestbranding: 1,
                        controls: 0,
                        iv_load_policy: 3,
                        rel: 0
                    }
                }}
                videoId={fromVideoSrcToId(props.defaultVideoSrc)}
                iframeClassName="w-[100%] lg:h-[50rem] h-[20rem]"
                /> 
        </div>);
}