import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enum/routes.enum';
import FirstScreen from './screens/FirstScreen';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.FIRST_SCREEN,
    element: <FirstScreen />,
    errorElement: <div>Página não encontrada</div>,
  },
];
