import Footer from '../components/footer'
import Navigation from '../components/navigation'
import Description from '../components/description'

export default function suggestionstatus() {
    return (
        <div>

            <Description />

            <Navigation />

            <main className="mx-auto w-2/3 min-h-screen">
                <div className='flex flex-col'>
                    <h1 className='font-bold celular:text-3xl md:text-5xl py-10'>Estado de sugerencia</h1>
                    <div className='flex celular:flex-col md:flex-row justify-between'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col celular:space-y-20 md:space-y-16 celular:py-10 md:py-20 px-6'>
                                <img src="/rectangle.png" alt="rectangle" />
                                <img src="/rectangle.png" alt="rectangle" />
                                <img src="/rectangle.png" alt="rectangle" />
                            </div>
                            <div className='flex flex-col celular:space-y-7 md:space-y-20 celular:py-10 md:py-20 '>
                                <h1 className='text-gray-900 text-xl font-medium'>Recibido el 02 de marzo</h1>
                                <h1 className='text-gray-900 text-xl font-medium'>Sugerencia Revisada y agregada</h1>
                                <h1 className='text-gray-900 text-xl font-medium'>Implementado</h1>
                            </div>
                        </div>
                        <div className='py-10'>
                            <img src="/littlethings.png" alt="littlethings" />
                        </div>

                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}