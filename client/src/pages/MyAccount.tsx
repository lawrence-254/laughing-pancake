import Layout from '../components/Layout/Layout'
import { StreamVideoClient } from '@stream-io/video-react-sdk';


const MyAccount = () => {
  return (
    <StreamVideoClient>
    <Layout>MyAccount</Layout>
    </StreamVideoClient>
  )
}

export default MyAccount