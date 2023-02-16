import { useEffect, useState } from "react";

type VideoPlayerProps = {
    videoSrc: string;
    startSecond: number;
    className: string;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    return (
        <div className={props.className}>
            <iframe
                width="100%" 
                height="100%" 
                src={`${props.videoSrc}?start=${props.startSecond}&autoplay=1&mute=1`} 
                title="Video"
                allow="autoplay; encrypted-media; web-share">
            </iframe>
        </div>
    );
}