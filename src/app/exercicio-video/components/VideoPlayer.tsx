type VideoProperties = {
  url: string;
  isPlaying: boolean;
};

export const VideoPlayer: React.FC<VideoProperties> = ({ url, isPlaying }) => {
  return <video src={url} loop playsInline />;
};
