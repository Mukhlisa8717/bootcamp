import React from "react";
import loginImg from "../../public/images/loginImg.png";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from '../reducers/authSlice'
import LoginForm from "../components/LoginForm";

const Login = () => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const handleLogin = (username, password) => {
        if (username === 'admin' && password === '1234567890') {
            dispatch(login())
        } else {
            alert('неправильные учетные данные')
        }
    }

    return (
        <div className="login flex h-screen ">
            <div className="flex w-1/2 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 opacity-90">
                <img src={loginImg} alt="login image" />
            </div>
            <div className="flex w-1/2 flex-col justify-center gap-10 px-16 pb-10">
                <h1 className="text-left text-4xl font-bold tracking-tighter text-[#001A49]">
                    Вход в платформу
                </h1>
                {!isLoggedIn ? (
                    <LoginForm handleLogin={handleLogin} />
                ) : (
                    <Navigate to="/dashboard" />
                )}
            </div>
        </div>
    );
};

export default Login;
