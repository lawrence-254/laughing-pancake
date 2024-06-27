import Layout from '../components/Layout/Layout'
import { StreamVideoClient } from '@stream-io/video-react-sdk';
import { useUser } from '../context/user-context';
import { Navigate } from 'react-router-dom';



const FavouritePodcasts = () => {
  const {client}=useUser();
  if (!client) return <Navigate to="/login" />;
  return (
    <StreamVideoClient client={client}>
    <Layout>FavouritePodcasts</Layout>
    </StreamVideoClient>
  )
}

export default FavouritePodcasts