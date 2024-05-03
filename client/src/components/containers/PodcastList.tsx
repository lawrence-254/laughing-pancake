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
                    <h1>{podcast.category}</h1> {/* Display category for each podcast */}
                    {podcast.episodes.map((episode, eIndex) => (
                        <Carousel key={eIndex}>
                            <h1>run</h1>
                            <PodcastContainer episode={episode} />
                        </Carousel>
                    ))}
                </div>
            ))}
        </>
    );
};

export default PodcastList;

