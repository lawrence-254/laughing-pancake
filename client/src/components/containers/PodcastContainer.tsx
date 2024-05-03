import React from 'react';

interface Episode {
  title: string;
  description: string;
  image: string;
  audio: string;
}

interface Props {
  episode: Episode;
}

const PodcastContainer: React.FC<Props> = ({ episode }) => {
  return (
    <div>
      <h2>{episode.title}</h2>
      <p>{episode.description}</p>
      <img src={episode.image} alt={episode.title} style={{ width: '100px', height: '100px' }} />
      {/* Assuming 'audio' is a URL to the audio file */}
      <audio controls>
        <source src={episode.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default PodcastContainer;
