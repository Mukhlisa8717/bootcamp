import React, { useState } from "react";
import { HiUser, HiEye, HiEyeOff } from "react-icons/hi";
import { MdLock } from "react-icons/md";

const LoginForm = ({ handleLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(username, password);
  };

   const toggleShowPassword = () => {
     setShowPassword((prevShowPassword) => !prevShowPassword);
   };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4">
        <label
          htmlFor="login"
          className="text-base font-semibold leading-6 text-[#1A2024]"
        >
          Имя пользователя<span className="text-red-600"> *</span>
          <div className="mt-2 flex items-center rounded-lg border bg-white">
            <HiUser className="m-3 text-2xl text-[#6E8BB7]" />
            <input
              id="login"
              type="text"
              placeholder="Введите имя"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-grow text-[#303940] focus:outline-none "
              required
            />
          </div>
        </label>
        <label
          htmlFor="password"
          className="text-base font-semibold leading-6 text-[#1A2024]"
        >
          Пароль<span className="text-red-600"> *</span>
          <div className="mt-2 flex items-center rounded-lg border bg-white">
            <MdLock className="m-3 text-2xl text-[#6E8BB7]" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow text-[#303940] focus:outline-none"
              required
            />
            <button type="button" onClick={toggleShowPassword} className="mr-1">
              {showPassword ? <HiEyeOff /> : <HiEye />}
            </button>
          </div>
        </label>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="h-6 w-6"
          />
          <label
            htmlFor="remember"
            className="pl-4 text-base font-medium leading-6 text-[#6E8BB7]"
          >
            Запомнить меня
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-10 w-full rounded-lg bg-[#0067F4] p-3 text-base font-semibold leading-8 text-white"
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
