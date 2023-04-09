import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enum/routes.enum';
import LoginScreen from './screens/LoginScreen';

export const loginRoutes: RouteObject[] = [
  {
    path: RoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];
