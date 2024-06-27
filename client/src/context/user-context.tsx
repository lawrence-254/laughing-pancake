import { StreamVideoClient } from '@stream-io/video-react-sdk';


interface User {
  username: string;
  email: string;
  password: string;
}

interface UserContextProps {
    user: User | null,
    setUser: (user: User| null)=>void,
    client: StreamVideoClient | null,
}