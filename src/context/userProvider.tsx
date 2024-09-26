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
import { currentUser } from "../services/Auth";

type TUserProviderProps = {
  children: ReactNode;
};

type TUserContextProps = {
  user: TDecodeUser | null;
  setUser: Dispatch<SetStateAction<TDecodeUser | null>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

const UserContext = createContext<TUserContextProps | undefined>(undefined);

const UserProvider: FC<TUserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<TDecodeUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleUser = async () => {
    try {
      const fetchedUser = (await currentUser()) as TDecodeUser | null;

      if (fetchedUser) {
        setUser(fetchedUser);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user:", error);
      setUser(null); // Ensure user is set to null on failure
    } finally {
      setIsLoading(false);
    }
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

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
};

export default UserProvider;
