import { Result } from 'antd';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import { RoutesEnum } from '../../../shared/enum/routes.enum';
import { ContainerPageNotFound } from '../styles/pageNotFound.styles';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(RoutesEnum.LOGIN);
  };

  return (
    <ContainerPageNotFound>
      <Result
        status="404"
        title="404"
        subTitle="Desculpe, a página que você procura não existe."
        extra={
          <Button type="primary" onClick={handleOnClick}>
            Ir para página de login
          </Button>
        }
      />
    </ContainerPageNotFound>
  );
};

export default PageNotFound;
