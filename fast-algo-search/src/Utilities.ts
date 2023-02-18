export const fromVideoSrcToId = (videoSrc: string) => {
    return videoSrc.split("embed/")[1];
}