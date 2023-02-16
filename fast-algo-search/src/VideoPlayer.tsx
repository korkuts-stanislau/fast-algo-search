type VideoPlayerProps = {
    videoSrc: string,
    startSecond: number
}

export const VideoPlayer: React.FC<VideoPlayerProps> = (props) => {
    return <div>
        <iframe width="100%" height="800px" src={`${props.videoSrc}?start=${props.startSecond}&autoplay=1&mute=1`} title="Video" allow="autoplay; encrypted-media; web-share"></iframe>
    </div>
}