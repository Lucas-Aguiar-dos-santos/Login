import React from 'react';

import Button from '../../Components/Button/index'
import Input from '../../Components/Input/index'
import {Container, Wrapper, TitleLogin, Column, Spacing} from './styles'


import { useForm } from 'react-hook-form';

import {IFormLogin, defaultValues} from './types'


import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"




const schema = yup
  .object({
    email: yup.string().email("Email Invalido").required("Campo requerido"),
    password: yup.string().min(6, "No minimo 6 caracteres").required("Campo requerido"),
  })
  .required()




const Login = () => {


    

    const {control, handleSubmit,  formState: { errors, isValid },} = useForm<IFormLogin>({
        resolver: yupResolver(schema),
        mode:'onBlur',
        defaultValues,
        reValidateMode: "onChange",
    })

    const onSubmit = async (FormData : IFormLogin ) =>{

    }


    function buttonDisabled(){
        if(isValid === true){
          console.log("Logado")
        }
    }
    buttonDisabled()


        return(
            <Container>
                  <Wrapper>
                        <Column>
                            <TitleLogin>Login</TitleLogin>
                            <Spacing/>
                            <form action="" onSubmit={handleSubmit(onSubmit)}>
                              <Input name='email' placeholder="Email" control={control} errorMessage={errors?.email?.message}/>
                              <Spacing/>
                              <Input name='password' type='password' placeholder="Senha" control={control} errorMessage={errors?.password?.message}/>
                              <Spacing/>
                              <Button title='Entrar' disabled={isValid}/>
                            </form>
                        </Column>
                  </Wrapper>
            </Container>
        );
}

export default Login;