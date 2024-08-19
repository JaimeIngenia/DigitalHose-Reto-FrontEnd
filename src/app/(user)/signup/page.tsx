"use client";

import { useForm } from "react-hook-form";
import { useRef } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  dni: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  // Definir la referencia de la contraseña
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Aquí puedes manejar el registro de usuario
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-xl bg-gray-900 p-8 rounded-lg">
        <h1 className="text-center text-2xl font-bold text-white mb-6">
          Crear cuenta
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {/* Nombre */}
          <div>
            <input
              type="text"
              placeholder="Nombre*"
              {...register("firstName", { required: true })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.firstName && (
              <p className="text-red-500 mt-1">Nombre es requerido</p>
            )}
          </div>

          {/* Apellido */}
          <div>
            <input
              type="text"
              placeholder="Apellido*"
              {...register("lastName", { required: true })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.lastName && (
              <p className="text-red-500 mt-1">Apellido es requerido</p>
            )}
          </div>

          {/* DNI */}
          <div>
            <input
              type="text"
              placeholder="DNI*"
              {...register("dni", { required: true })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.dni && (
              <p className="text-red-500 mt-1">DNI es requerido</p>
            )}
          </div>

          {/* Correo Electrónico */}
          <div>
            <input
              type="email"
              placeholder="Correo electrónico*"
              {...register("email", {
                required: "Correo electrónico es requerido",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Correo electrónico inválido",
                },
              })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.email && (
              <p className="text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Contraseña */}
          <div>
            <input
              type="password"
              placeholder="Contraseña*"
              {...register("password", {
                required: "Contraseña es requerida",
                minLength: {
                  value: 6,
                  message: "Debe tener al menos 6 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "Debe tener máximo 20 caracteres",
                },
              })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.password && (
              <p className="text-red-500 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* Confirmar Contraseña */}
          <div>
            <input
              type="password"
              placeholder="Confirmar contraseña*"
              {...register("confirmPassword", {
                required: "Confirmar contraseña es requerido",
                validate: (value) =>
                  value === password.current || "Las contraseñas no coinciden",
              })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Teléfono */}
          <div className="md:col-span-2">
            <input
              type="text"
              placeholder="Teléfono*"
              {...register("phone", { required: true })}
              className="w-full px-3 py-2 border rounded bg-gray-800 text-white"
            />
            {errors.phone && (
              <p className="text-red-500 mt-1">Teléfono es requerido</p>
            )}
          </div>

          {/* Botón Crear Cuenta */}
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 bg-lime-400 text-black font-bold rounded hover:bg-lime-500 transition"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
