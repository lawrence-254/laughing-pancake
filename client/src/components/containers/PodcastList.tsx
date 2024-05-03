import React from 'react';
import PodcastContainer from './PodcastContainer';
import { Carousel } from 'react-responsive-carousel';

interface Podcast {
  title: string;
  description: string;
  image: string;
  category: string;
  episodes: Episode[];
}

interface Episode {
  title: string;
  description: string;
  image: string;
  audio: string;
}

interface Props {
  podcastData: Podcast[];
}

const PodcastList: React.FC<Props> = ({ podcastData }) => {
  return (
    <>
      {podcastData.map((podcast, index) => (
        <div key={index}>
          <h1>{podcast.category}</h1>
          <Carousel>
            {podcast.episodes.map((episode, eIndex) => (
              <div key={eIndex}>
                <PodcastContainer episode={episode} />
              </div>
            ))}
          </Carousel>
        </div>
      ))}
    </>
  );
};

export default PodcastList;
