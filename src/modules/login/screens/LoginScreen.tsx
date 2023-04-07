import axios from 'axios';
import { useState } from 'react';

import Button from '../../../shared/buttons/button/Button';
import Input from '../../../shared/inputs/input/Input';
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImage,
  TitleLogin,
} from '../styles/loginScreen.styles';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    await axios
      .post('http://localhost:8080/auth', {
        email: email,
        password: password,
      })
      .then(function (response) {
        console.log(response.data.accessToken);
        alert('Fez login');
      })
      .catch(function (error) {
        console.error(error);
        alert('Usuario e senha invalidos');
      });
  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./login_background.png" />

      <ContainerLogin>
        <LimitedContainer>
          <LogoImage src="./logo.svg" />

          <TitleLogin level={2} type="secondary">
            LOGIN
          </TitleLogin>
          <Input title="USUÁRIO" margin="32px 0px 0px" onChange={handleEmail} />
          <Input type="password" title="SENHA" margin="32px 0px 0px" onChange={handlePassword} />

          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            ENTRAR
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
