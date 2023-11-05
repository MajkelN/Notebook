import axios from "axios"
import { useForm } from "react-hook-form";
import { WrapperForm, Form, InputText, InputSubmit, ErrorItemForm } from "../components/Form/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignIn } from 'react-auth-kit';

export default function Login() { 
    const signIn = useSignIn();
    const navigate = useNavigate();
    const [ errorMessage, setError ] = useState("")
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const {email, password} = data;

        axios.post(`/api/auth/login`, {email, password})
        .then(res => res.data)
        .then(({token, id}) => {
            signIn({
                token: token,
                expiresIn: 3600,
                tokenType: "Bearer",
                authState: { id: id }
            })
            navigate("/notes");
        })
        .catch(err => {
            if(err.response.status == 401) {
                setError("Invalid email or password!!!");
            }
        })
        
    }
    
    return (
        <WrapperForm>
            <Form id="loginForm" onSubmit={handleSubmit(onSubmit)}>
                <h2>Login form</h2>
                <InputText type="email" {...register("email", { 
                    required: 'Email is required',
                    pattern: { 
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid email address"
                    }  
                })} placeholder="Email"/>
                {errors.email && <ErrorItemForm>{errors.email?.message}</ErrorItemForm>}

                <InputText type="password" {...register("password", {required: "Password is required"})} placeholder="Password"/>
                {errors.password && <ErrorItemForm>{errors.password?.message}</ErrorItemForm>}
                {errorMessage && <ErrorItemForm>{errorMessage}</ErrorItemForm>}

                <InputSubmit type="submit">Log in</InputSubmit>
            </Form>
        </WrapperForm>
    )
}
