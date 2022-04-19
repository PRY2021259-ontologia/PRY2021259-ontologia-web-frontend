import Navigation from '../components/navigation'
import Description from '../components/description'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function difinitionshistory() {
    return (
        <div>

            <Description />

            <Navigation />
            <main className="celular:text-sm celular:w-3/4 md:text-base mx-auto md:w-2/3 min-h-screen">
                <div className='flex flex-col'>
                    <div className='py-10 '>
                        <h1 className='font-bold celular:text-4xl md:text-5xl'>Conceptos guardados</h1>
                    </div>
                    <div className='flex celular:flex-col md:flex-row md:space-x-16 celular:mb-6 md:mb-0'>
                        <div className='flex flex-col p-7 shadow-md rounded-lg celular:w-full md:w-1/4 h-1/2 my-2 border'>
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
                        <div className='flex flex-col w-full'>
                            <div className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                <div className='flex celular:flex-col md:flex-row md:items-center'>
                                    <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                    <h1 className='px-1 font-medium'>La Roya -</h1>
                                    <h1 className='flex text-bluedetails py-3 underline'>www.ontologiapapa.com</h1>
                                </div>
                                <h1 className=''>11:49pm</h1>
                            </div>
                            <div className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                <div className='flex celular:flex-col md:flex-row md:items-center'>
                                    <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                    <h1 className='px-1 font-medium'>La Roya -</h1>
                                    <h1 className='flex text-bluedetails py-3 underline'>www.ontologiapapa.com</h1>
                                </div>
                                <h1 className=''>11:49pm</h1>
                            </div>
                            <div className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                <div className='flex celular:flex-col md:flex-row md:items-center'>
                                    <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                    <h1 className='px-1 font-medium'>La Roya -</h1>
                                    <h1 className='flex text-bluedetails py-3 underline'>www.ontologiapapa.com</h1>
                                </div>
                                <h1 className=''>11:49pm</h1>
                            </div>
                            <div className='py-2'>Ayer- Lunes, 4 de abril del 2022</div>
                            <div className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                <div className='flex celular:flex-col md:flex-row md:items-center'>
                                    <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                    <h1 className='px-1 font-medium'>La Roya -</h1>
                                    <h1 className='flex text-bluedetails py-3 underline'>www.ontologiapapa.com</h1>
                                </div>
                                <h1 className=''>11:49pm</h1>
                            </div>
                            <div className='py-2'>Lunes, 3 de febrero del 2022</div>
                            <div className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                <div className='flex celular:flex-col md:flex-row md:items-center'>
                                    <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                    <h1 className='px-1 font-medium'>La Roya -</h1>
                                    <h1 className='flex text-bluedetails py-3 underline'>www.ontologiapapa.com</h1>
                                </div>
                                <h1 className=''>11:49pm</h1>
                            </div>
                            <div className='py-2'>Ayer- Lunes, 4 de abril del 2022</div>
                            <div className='py-1 px-3 shadow-md rounded-lg my-2 border flex flex-row justify-between items-center'>
                                <div className='flex celular:flex-col md:flex-row md:items-center'>
                                    <a className='text-yellow-400'><FontAwesomeIcon icon={faStar} size="1x" /></a>
                                    <h1 className='px-1 font-medium'>La Roya -</h1>
                                    <h1 className='flex text-bluedetails py-3 underline'>www.ontologiapapa.com</h1>
                                </div>
                                <h1 className=''>11:49pm</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
