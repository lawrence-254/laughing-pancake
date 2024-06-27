import { StreamVideoClient } from '@stream-io/video-react-sdk';
import { createContext, useState, useContext } from 'react';


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
    const [user, setUser] = useState<User | null>(null);
    const [client, setClient] = useState<StreamVideoClient | undefined>(undefined);

    return (
        <UserContext.Provider value={{user, setUser, client, setClient}}>
            {props.children}
        </UserContext.Provider>
    )
}

export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider');
    }
    return context;
  }