// Define podcastData outside of the component
const podcastData = [
  {
    title: 'The Joe Rogan Experience',
    description: 'The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests...',
    image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
    category: 'Comedy',
    episodes: [
      {
        title: 'Joe Rogan Experience #1554 - Kanye West',
        description: 'Kanye West is a rapper, record producer, fashion designer, and current independent candidate...',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
        audio: 'https://www.listennotes.com/c/r/9e9b3c1b7e4f4f8e8f3b7e7f7f7e7e7f'
      },
      {
        title: 'Joe Rogan Experience #1553 - Tim Kennedy',
        description: 'Tim Kennedy is a Special Forces sniper, and a former UFC middleweight contender.',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
        audio: 'https://www.listennotes.com/c/r/9e9b3c1b7e4f4f8e8f3b7e7f7f7e7e7f'
      }
    ]
  },
    {
    title: 'The Joe Rogan Experience',
    description: 'The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests...',
    image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
    category: 'Comedy',
    episodes: [
      {
        title: 'Joe Rogan Experience #1554 - Kanye West',
        description: 'Kanye West is a rapper, record producer, fashion designer, and current independent candidate...',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
        audio: 'https://www.listennotes.com/c/r/9e9b3c1b7e4f4f8e8f3b7e7f7f7e7e7f'
      },
      {
        title: 'Joe Rogan Experience #1553 - Tim Kennedy',
        description: 'Tim Kennedy is a Special Forces sniper, and a former UFC middleweight contender.',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
        audio: 'https://www.listennotes.com/c/r/9e9b3c1b7e4f4f8e8f3b7e7f7f7e7e7f'
      }
    ]
  }
  ,
    {
    title: 'The Joe Rogan Experience',
    description: 'The Joe Rogan Experience podcast is a long form conversation hosted by comedian Joe Rogan with friends and guests...',
    image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
    category: 'Comedy',
    episodes: [
      {
        title: 'Joe Rogan Experience #1554 - Kanye West',
        description: 'Kanye West is a rapper, record producer, fashion designer, and current independent candidate...',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
        audio: 'https://www.listennotes.com/c/r/9e9b3c1b7e4f4f8e8f3b7e7f7f7e7e7f'
      },
      {
        title: 'Joe Rogan Experience #1553 - Tim Kennedy',
        description: 'Tim Kennedy is a Special Forces sniper, and a former UFC middleweight contender.',
        image: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/4b/2b/8a/4b2b8a7b-3b4a-1f2e-5f2b-1d0e6b1b3b3d/mza_1021138051382986233.jpg/600x600bb.jpg',
        audio: 'https://www.listennotes.com/c/r/9e9b3c1b7e4f4f8e8f3b7e7f7f7e7e7f'
      }
    ]
  }
];

import Layout from '../components/Layout/Layout';
import PodcastList from '../components/containers/PodcastList';
import { StreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '../context/user-context';
import { Navigate } from 'react-router-dom';


const Home = () => {
  const {client}=useUser();
  if (!client) return <Navigate to="/login" />;
  return (
    <StreamVideoClient client={client}>
    <Layout>
      <PodcastList podcastData={podcastData} />
    </Layout>
    </StreamVideoClient>
  );
};

export default Home;
