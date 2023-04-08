import { createContext, useContext, useEffect, useState } from 'react';

import { getAuthorizationToken, setAuthorizationToken } from '../functions/connection/auth';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationProps {
  message: string;
  type: NotificationType;
  description?: string;
}

interface GlobalData {
  accessToken?: string;
  notification?: NotificationProps;
}

interface GlobalContextProps {
  globalData: GlobalData;
  setGlobalData: (globalData: GlobalData) => void;
}

const GlobalContext = createContext({} as GlobalContextProps);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [globalData, setGlobalData] = useState<GlobalData>({});

  return (
    <GlobalContext.Provider value={{ globalData, setGlobalData }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  const { globalData, setGlobalData } = useContext(GlobalContext);

  useEffect(() => {
    //roda uma vez ao atualizar a pagina e verifica se existe o token
    const token = getAuthorizationToken();

    if (token) {
      setAccessToken(token);
    }
  }, []);

  const setAccessToken = (accessToken: string) => {
    setAuthorizationToken(accessToken);

    setGlobalData({
      ...globalData, //substitui o globalData com o que esta no accessToken
      accessToken,
    });
  };

  const setNotification = (message: string, type: NotificationType, description: string) => {
    setGlobalData({
      ...globalData,
      notification: {
        message,
        type,
        description,
      },
    });
  };

  return {
    notification: globalData?.notification,
    accessToken: globalData?.accessToken,
    setAccessToken,
    setNotification,
  };
};
