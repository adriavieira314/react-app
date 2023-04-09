import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../../shared/enum/routes.enum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';

const FirstScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = getAuthorizationToken();

    if (token) {
      navigate(RoutesEnum.PRODUCTS);
    } else {
      navigate(RoutesEnum.LOGIN);
    }
  }, []);

  return <Spin />;
};

export default FirstScreen;
