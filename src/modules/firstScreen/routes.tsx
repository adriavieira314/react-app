import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enum/routes.enum';
import FirstScreen from './screens/FirstScreen';
import PageNotFound from './screens/PageNotFound';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];
