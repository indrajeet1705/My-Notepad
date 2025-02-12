import React from "react";
import { useForm } from "react-hook-form";

import { useState } from "react";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState([]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="border h-[55vh] w-[25vw]">
        <div className="top-0 text-center font-semibold text-3xl p-5">
          Login
        </div>
        <div className=" flex flex-col mt-8 justify-center fle items-center p-1">
          <form
            onSubmit={
              handleSubmit((data) => setData(JSON.stringify(data)))}
            
          >
            <div className="flex flex-col gap-8 w-[300px]">
              <input
                type="text"
                {...register("unsername", { required: true })}
                className="p-2 rounded-lg pl-3"
                placeholder="username"
              />
              <input
                type="password"
                {...register("password", { required: true })}
                className="p-2 rounded-lg pl-3"
                placeholder="password"
              />
              <div className=" flex mt-4 justify-center">
                <input
                  type="submit"
                  className="p-2 hover:bg-blue-800 bg-blue-600 w-[100px]"
                />
              </div>
            </div>
          </form>
     
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
