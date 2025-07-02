import { useForm } from "react-hook-form"


function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("Datos enviados: data")
        alert("Registro exito...")
    }

    return (
        <>
            
            <main className="flex justify-center items-center min-h-screen bg-slate-900 text-white">
                <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-semibold">Nombre</label>
                            <input
                                {...register("nombre", { required: "Nombre requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>}
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Correo</label>
                            <input type="email" {...register("email", {
                                required: "Correo requerido",
                                pattern: { value: /^\S+@\S+$/i, message: "Formato inválido" }
                            })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label className="block mb-1 font-semibold">Contraseña</label>
                            <input
                                type="password"
                                {...register("password", {
                                    required: "Contraseña requerida",
                                    minLength: { value: 6, message: "Mínimo 6 caracteres" }
                                })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>}
                        </div>
                        <button type="submit" className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold">
                                Registrarse
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default RegisterPage