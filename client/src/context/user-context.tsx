import { StreamVideoClient } from '@stream-io/video-react-sdk';
import { createContext } from 'react';


interface User {
  username: string;
  email: string;
  password: string;
}

interface UserContextProps {
    user: User | null;
    setUser: (user: User| null)=>void;
    client: StreamVideoClient | undefined;
    setClient: (client: StreamVideoClient | undefined)=>void;
}

const UserContext=createContext<UserContextProps|undefined>(undefined!);

interface UserProviderProps {
    children: React.ReactNode;
}

export const UserProvider =(props: UserProviderProps) => {
    const [user, setUser] = React.useState<User | null>(null);
    const [client, setClient] = React.useState<StreamVideoClient | undefined>(undefined);

    return (
        <UserContext.Provider value={{user, setUser, client, setClient}}>
            {props.children}
        </UserContext.Provider>
    )
}