import { useForm } from "react-hook-form"
import { dbStore } from "../firebase/appConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Swal from "sweetalert2";

function RegisterPage() {
    const {
        register,
        handleSubmit,
        reset, // <-- Agrega reset aquí
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const year = parseInt(data.year_publication);
            const fechaPublicacion = new Date(year, 0, 1);

            await addDoc(collection(dbStore, "album"), {
                artista: data.artista,
                genero: data.genero,
                nombre_album: data.nombre_album,
                year_publication: Timestamp.fromDate(fechaPublicacion),
            });

            Swal.fire({
                icon: "success",
                title: "Álbum agregado",
                text: "El álbum se ha registrado correctamente",
                timer: 2000,
                showConfirmButton: false,
            });

            reset();

        } catch (error) {
            console.error("Error al agregar el álbum:", error);
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Hubo un problema al guardar el álbum",
            });
        }
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
                                {...register("nombre_album", { required: "Nombre requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.nombre_album && <p className="text-red-400 text-sm mt-1">{errors.nombre_album.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Artista</label>
                            <input
                                {...register("artista", { required: "Artista requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.artista && <p className="text-red-400 text-sm mt-1">{errors.artista.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Año de lanzamiento</label>
                            <input
                                type="number"
                                {...register("year_publication", {
                                    required: "Año requerido",
                                    min: { value: 1900, message: "Año inválido" },
                                    max: { value: new Date().getFullYear(), message: "No puede ser en el futuro" }
                                })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.year_publication && <p className="text-red-400 text-sm mt-1">{errors.year_publication.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-1 font-semibold">Género</label>
                            <input
                                {...register("genero", { required: "Género requerido" })}
                                className="w-full px-4 py-2 bg-slate-700 rounded-md focus:outline-none"
                            />
                            {errors.genero && <p className="text-red-400 text-sm mt-1">{errors.genero.message}</p>}
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