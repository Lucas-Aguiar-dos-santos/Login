
import {ErrorMessage, InputContainer} from './styles'
import {IInput} from './types'

const Input = ({placeholder}:IInput)=>{
    return(
        <InputContainer>
            <input type="text" />
        </InputContainer>
    );
}

export default Input;