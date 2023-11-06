'use client';
import { X } from '@phosphor-icons/react';
import { useState } from 'react';
import Youtube from 'react-youtube';

const VideoPlayer = ({ youtubeId }: { youtubeId: string }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: '300',
    height: '250',
  };
  const Player = () => {
    return (
      <div className='fixed bottom-2 right-2'>
        <button
          onClick={handleVideoPlayer}
          className='text-color-white float-right '
        >
          <X size={32} />
        </button>

        <Youtube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className='fixed bottom-5 right-5 bg-color-primary text-color-secondary hover:bg-color-grey'
    >
      Tonton Trailer
    </button>
  );
};

export default VideoPlayer;
