import { Control } from "react-hook-form";
import { IFormLogin } from "../../Pages/Login/types";

export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    control: Control <IFormLogin,any>;
    name:"email" | "password";
    errorMessage?:string;
}