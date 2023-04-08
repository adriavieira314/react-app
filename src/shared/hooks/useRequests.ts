import axios from 'axios';
import { useState } from 'react';

import { useGlobalContext } from './useGlobalContext';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios
      .get(url)
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async (url: string, body: any) => {
    setLoading(true);
    const returnData = await axios
      .post(url, body)
      .then((result) => {
        setNotification('Entrando...', 'success', '');

        return result.data;
      })
      .catch(() => {
        setNotification('Senha inválida.', 'error', '');
      });

    setLoading(false);
    return returnData;
  };

  return {
    loading,
    getRequest,
    postRequest,
  };
};
