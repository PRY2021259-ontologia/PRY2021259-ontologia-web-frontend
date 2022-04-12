import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'

export default function Definitions() {
    return (
        <div>

            <Description />

            <Navigation />
            <main className="celular:text-sm md:text-base mx-auto w-2/3 min-h-screen">
                <div className='flex flex-col'>
                    <div className='py-10 '>
                        <h1 className='font-bold celular:text-4xl md:text-5xl'>Conceptos guardados</h1>
                    </div>
                    <div className='flex celular:flex-col md:flex-row md:space-x-16'>
                        <div className='flex flex-col p-7 shadow-md rounded-lg md:w-2/3 h-1/2 my-2 border'>
                            <h1 className='font-bold text-lg'>
                                Rango de fechas
                            </h1>
                            <div className='py-2 font-medium '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de inicio</label>
                                </div>
                                <div className='py-1'>  
                                    <input className='w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10' type="date" />
                                </div>
                            </div>
                            <div className='py-2 font-medium '>
                                <div className='py-1'>
                                    <label className='' htmlFor="">Fecha de fin</label>
                                </div>
                                <div className='py-1'>
                                    <input className='w-full rounded-md px-3 outline-1 outline-offset-0 outline-gray-400 border border-gray-300 text-gray-600 h-10' type="date" />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className=' p-5 shadow-md rounded-lg my-2 border '>
                                <h1 className='py-1 font-medium'>Tipos</h1>
                                <p className='py-3 text-gray-500 md:text-lg'>Solanum tuberosum​ es una especie herbácea perteneciente al género
                                    Solanum originaria de la región que comprende el altiplano sur del
                                    PerúSolanum tuberosum​ es una especie herbácea perteneciente al género
                                    Solanum originaria de la región que comprende el altiplano sur del Perú
                                </p>
                                <p className='flex text-bluedetails py-3 underline justify-end'>Ver detalles</p>
                            </div>
                            <div className='p-5 shadow-md rounded-lg my-2 border'>
                                <h1 className='py-1 font-medium'>Tipos</h1>
                                <p className='py-3 text-gray-500 md:text-lg'>Solanum tuberosum​ es una especie herbácea perteneciente al género
                                    Solanum originaria de la región que comprende el altiplano sur del
                                    PerúSolanum tuberosum​ es una especie herbácea perteneciente al género
                                    Solanum originaria de la región que comprende el altiplano sur del Perú
                                </p>
                                <p className='flex text-bluedetails py-3 underline justify-end'>Ver detalles</p>
                            </div>
                            <div className='p-5 shadow-md rounded-lg my-2 border'>
                                <h1 className='py-1 font-medium'>Tipos</h1>
                                <p className='py-3 text-gray-500 md:text-lg'>Solanum tuberosum​ es una especie herbácea perteneciente al género
                                    Solanum originaria de la región que comprende el altiplano sur del
                                    PerúSolanum tuberosum​ es una especie herbácea perteneciente al género
                                    Solanum originaria de la región que comprende el altiplano sur del Perú
                                </p>
                                <p className='flex text-bluedetails py-3 underline justify-end'>Ver detalles</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}