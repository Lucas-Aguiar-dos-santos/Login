import {ButtonLogin} from './styles'
import {IButton} from './types'

const Button = ({title, onClick}: IButton )=>{
    return(
        <ButtonLogin type='submit' onClick={onClick} >
            {title}
        </ButtonLogin>
    );
}



export default Button;