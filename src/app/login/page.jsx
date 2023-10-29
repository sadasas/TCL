"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import styles from "@/styles/auth/Login.module.scss";

function FormRegistation() {
  const schema = yup
    .object({
      username: yup.string().required("default is admin"),
      password: yup
        .number("must be a number")
        .required("default is 123")
        .typeError("must be a number"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles["container"]}>
      <form className={styles["form"]} onSubmit={handleSubmit(onSubmit)}>
        <input  {...register("username")} placeholder="username" />
        <p>{errors.username?.message}</p>

        <input {...register("password")} placeholder="password" />
        <p>{errors.password?.message}</p>

        <button type="submit">login</button>
      </form>
    </div>
  );
}

export default FormRegistation;
