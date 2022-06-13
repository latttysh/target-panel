import { useForm } from "react-hook-form";
import React from "react";
import "./Login.scss";

function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="login">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="login-logotype">LOGOTYPE</div>
        <div className="login-text">Добро пожаловать!</div>
        <input type="login" {...register("login")} placeholder="Login" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <button type="Submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;
