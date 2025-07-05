import { collection, getDocs } from 'firebase/firestore';
import { dbStore } from '../firebase/appConfig';
import { useEffect, useState } from 'react';

function HomePage() {
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAlbums = async () => {
        try {
            const querySnapshot = await getDocs(collection(dbStore, "album"));
            const docs = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));
            setAlbums(docs);
        } catch (error) {
            console.error("Error al obtener los álbumes:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAlbums();
    }, []);

    return (
        <>
            <main className="bg-slate-900 text-white min-h-screen px-6 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Explora Música</h2>
                {loading ? (
                    <p className="text-center">Cargando álbumes...</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {albums.map((album) => (
                            <div key={album.id} className="bg-slate-800 p-4 rounded-xl hover:scale-105 hover:shadow-lg transition">
                                <h3 className="font-semibold text-lg">{album.nombre_album}</h3>
                                <p className="text-sm text-slate-400">Artista: {album.artista}</p>
                                <p className="text-sm text-slate-400">Año: {album.year_publication?.toDate ? album.year_publication.toDate().getFullYear() : album.year_publication}</p>
                                <p className="text-sm text-slate-400">Género: {album.genero}</p>
                            </div>
                        ))}
                    </div>
                )}
            </main>
        </>
    );
}

export default HomePage