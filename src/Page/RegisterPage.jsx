import { useForm } from "react-hook-form"


function RegisterPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Álbum enviado:", data);
        alert("Álbum agregado con éxito");
    };

    return (
        <>
            <main className="flex justify-center items-center min-h-screen bg-slate-900 text-white">
                <div className="bg-slate-800 p-8 rounded-xl shadow-lg w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Agregar Nuevo Álbum</h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <label className="block mb-1 font-semibold">Nombre del Álbum</label>
                            <input
                                {...register("nombre", { required: "Nombre del álbum requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.nombre && <p className="text-red-400 text-sm mt-1">{errors.nombre.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Artista</label>
                            <input
                                {...register("artista", { required: "Nombre del artista requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.artista && <p className="text-red-400 text-sm mt-1">{errors.artista.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Año de lanzamiento</label>
                            <input
                                type="number"
                                {...register("anio", {
                                    required: "Año requerido",
                                    min: { value: 1900, message: "Año inválido" },
                                    max: { value: new Date().getFullYear(), message: "No puede ser en el futuro" }
                                })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.anio && <p className="text-red-400 text-sm mt-1">{errors.anio.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Género</label>
                            <input
                                {...register("genero", { required: "Género requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.genero && <p className="text-red-400 text-sm mt-1">{errors.genero.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">URL de la Portada</label>
                            <input
                                {...register("portada", {
                                    required: "URL requerida",
                                    pattern: {
                                        value: /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/,
                                        message: "Debe ser una URL válida de imagen"
                                    }
                                })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.portada && <p className="text-red-400 text-sm mt-1">{errors.portada.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-green-600 hover:bg-green-700 rounded-md font-semibold"
                        >
                            Guardar Álbum
                        </button>
                    </form>
                </div>
            </main>
        </>
    )
}
export default RegisterPage