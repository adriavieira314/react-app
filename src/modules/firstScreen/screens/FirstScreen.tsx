import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_USER } from '../../../shared/constants/urls';
import { RoutesEnum } from '../../../shared/enum/routes.enum';
import {
  getAuthorizationToken,
  unsetAuthorizationToken,
} from '../../../shared/functions/connection/auth';
import { connectionAPIGet } from '../../../shared/functions/connection/connectionAPI';

const FirstScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = getAuthorizationToken();

      if (token) {
        await connectionAPIGet(URL_USER)
          .then(() => {
            navigate(RoutesEnum.PRODUCTS);
          })
          .catch(() => {
            unsetAuthorizationToken();
            navigate(RoutesEnum.LOGIN);
          });
      } else {
        navigate(RoutesEnum.LOGIN);
      }
    };

    verifyToken();
  }, []);

  return <Spin />;
};

export default FirstScreen;
