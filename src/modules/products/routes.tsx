import { RouteObject } from 'react-router-dom';

import { RoutesEnum } from '../../shared/enum/routes.enum';
import Products from './screens/Products';

export const productsScreenRoutes: RouteObject[] = [
  {
    path: RoutesEnum.PRODUCTS,
    element: <Products />,
  },
];
