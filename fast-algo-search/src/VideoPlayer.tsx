import { useEffect, useRef, useState } from "react";
import YouTube from "react-youtube";
import { Algo } from "./Types";

type VideoPlayerProps = {
    algo: Algo;
    updateFlag: boolean;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    const {algo, updateFlag} = props;

    const playerRef = useRef<YouTube>(null);
    
    useEffect(() => {
        if(playerRef.current !== null) {
            playerRef.current.getInternalPlayer()?.seekTo(algo.startSecond, true);
        }
    }, [updateFlag])

    // TODO: fix problem when you run algo from the same video video starts from the start
    // TODO: add condition if it is the same video we do not reload all iframe, only set other time

    return (
        <div className="fixed w-[100%] lg:h-[50rem] h-[20rem]">
            <YouTube 
                ref={playerRef}
                opts={{
                    playerVars: {
                        autoplay: 1,
                        start: algo.startSecond,
                        end: algo.endSecond,
                        fs: 0,
                        modestbranding: 1
                    }
                }}
                style={{
                    height: "100% !important", 
                    width: "100% !important"
                }}
                videoId={algo.videoSrc.split("embed/")[1]}
                iframeClassName="w-[100%] lg:h-[50rem] h-[20rem]"
                /> 
        </div>);
}