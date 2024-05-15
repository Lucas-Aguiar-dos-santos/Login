import React from 'react';

import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import {Container, Wrapper, TitleLogin, Column, Row, Spacing} from './styles'



const Login = () => {
        return(
            <Container>
                  <Wrapper>
                        <Column>
                            <TitleLogin>Login</TitleLogin>
                            <Spacing/>
                            <Input placeholder="Email"/>
                            <Spacing/>
                            <Input placeholder="Senha"/>
                            <Spacing/>
                            <Button title='Entrar'/>
                        </Column>
                  </Wrapper>
            </Container>
        );
}

export default Login;