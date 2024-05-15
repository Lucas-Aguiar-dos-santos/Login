
import {ErrorMessage, InputContainer} from './styles'
import {IInput} from './types'

import { Controller } from 'react-hook-form'





const Input = ({ name, control, errorMessage, ...rest}:IInput)=>{
    return(<>
        <InputContainer>
        <Controller 
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value, ref } })=> <input {...rest} onChange={onChange} onBlur={onBlur} value={value} ref={ref } />}
        />
           
        </InputContainer>
        {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
        </>
    );
}

export default Input;