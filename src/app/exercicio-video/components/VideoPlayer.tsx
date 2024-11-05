import { useEffect, useRef } from "react";

type VideoProperties = {
  url: string;
  isPlaying: boolean;
};

export const VideoPlayer: React.FC<VideoProperties> = ({ url, isPlaying }) => {
  const videoTag = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    isPlaying ? videoTag.current?.play() : videoTag.current?.pause();
  }, [isPlaying]);
  return <video className="w-1/2" ref={videoTag} src={url} loop playsInline />;
};
