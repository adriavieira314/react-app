import { Spin } from 'antd';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutesEnum } from '../../../shared/enum/routes.enum';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';

const FirstScreen = () => {
  const { user } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate(RoutesEnum.PRODUCTS);
    }
  }, []);

  return <Spin />;
};

export default FirstScreen;
