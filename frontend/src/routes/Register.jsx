import axios from "axios"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { WrapperForm, Form, InputText, InputSubmit, ErrorItemForm } from "../components/Form/Form";

export default function Register() { 
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const {firstName, lastName, email, password} = data;
        axios.post(`/api/auth/register`, {firstName, lastName, email, password})
        .then(() => navigate("/login"))
        .catch(err => console.log(err))
    };

    return (
        <WrapperForm>
            <Form id="registerForm" onSubmit={handleSubmit(onSubmit)}>
                <h2>Registration form</h2>
                <InputText type="text" {...register("firstName", {required: "First name is required"})} placeholder="First name"/>
                {errors.firstName && <ErrorItemForm>{errors.firstName?.message}</ErrorItemForm>}
                
                <InputText type="text" {...register("lastName", {required: "Last name is required"})} placeholder="Last name"/>
                {errors.lastName && <ErrorItemForm>{errors.lastName?.message}</ErrorItemForm>}

                <InputText type="email" {...register("email", { 
                    required: 'Email is required',
                    pattern: { 
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                        message: "Invalid email address"
                    }  
                })} placeholder="example@mail.com"/>
                {errors.email && <ErrorItemForm>{errors.email?.message}</ErrorItemForm>}

                <InputText type="password" {...register("password", {required: "Password is required"})} placeholder="Password" />
                {errors.password && <ErrorItemForm>{errors.password?.message}</ErrorItemForm>}

                <InputSubmit type="submit">Register</InputSubmit>
            </Form>
        </WrapperForm>
    )
}
