import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { TDecodeUser } from "../types";
import { currentUser } from "../services/authService";

type TUserProviderProps = {
  children: ReactNode;
};
type TUserContextProps =
  | {
      user: TDecodeUser | null | undefined;
      setUser: (user: TDecodeUser | null | undefined) => void;
      isLoading: boolean;
      setIsLoading: Dispatch<SetStateAction<boolean>>;
    }
  | undefined;

const UserContext = createContext<TUserContextProps>(undefined);

const UserProvider: FC<TUserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TDecodeUser | null | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    const user = (await currentUser()) as TDecodeUser;

    setUser(user);
    setIsLoading(false);
  };

  useEffect(() => {
    handleUser();
  }, [isLoading]);

  return (
    <UserContext.Provider value={{ user, setUser, isLoading, setIsLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser use must be using before userContext provider");
  }

  return context;
};

export default UserProvider;
