import { albums } from '../data/albums';


function HomePage() {
    return (
        <>
            <main className="bg-slate-900 text-white min-h-screen px-6 py-8">
                <h2 className="text-3xl font-bold mb-6 text-center">Explora Musica</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {albums.map((album) => {
                        return (
                            <div key={album.id} className='bg-slate-800 p-4 rounded-xl hover:scale-105 hover:shadow-lg transition'>
                                <img src={album.cover} alt={album.title} className="rounded-md w-full h-auto mb-3" />
                                <h3 className='font-semibold text-lg'>{album.title}</h3>
                                <p className='text-sm text-slate-400'>{album.artist}</p>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    )

}
export default HomePage